'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const storage=new Map();const localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,String(v))};
const context=vm.createContext({window:{},console,URL,Date,localStorage});vm.runInContext(read('src/script.js'),context);
const app=vm.runInContext('urbanForager()',context);
assert.equal(app.libraryView,'grid','new users should see the photo-first compact view');
for(const mode of ['cards','grid','list']){
 app.setLibraryView(mode);
 assert.equal(app.libraryView,mode);
 assert.equal(storage.get('urbanForagerLibraryView'),mode);
}
app.setLibraryView('invalid');assert.equal(app.libraryView,'list','invalid mode must be ignored');
const second=vm.runInContext('urbanForager()',context); second.initializeRouting=()=>{}; second.loadIds=()=>[];second.init();
assert.equal(second.libraryView,'list','saved preference must persist');
storage.set('urbanForagerLibraryView','untrusted');
const fallback=vm.runInContext('urbanForager()',context);fallback.initializeRouting=()=>{};fallback.loadIds=()=>[];fallback.init();
assert.equal(fallback.libraryView,'grid','invalid saved mode must default to compact grid');
for(const file of ['index.html','src/source.html']){
 const html=read(file);
 assert.equal((html.match(/class="uf-view-switch"/g)||[]).length,2,'both library and saved screens need switcher');
 for(const mode of ['cards','grid','list'])assert(html.includes(`setLibraryView('${mode}')`));
 assert.equal(html.split(' :class="\'uf-view-\'+libraryView"').length-1,2);
}
const css=read('dist/bundle.css');
for(const key of ['.uf-plant-grid.uf-view-grid','.uf-plant-grid.uf-view-cards','.uf-plant-grid.uf-view-list','@media (max-width:639px)','@media print{.uf-view-switch'])assert(css.includes(key),key);
assert.equal(read('dist/script.js'),read('src/script.js'));
const kw=JSON.parse(read('urbanforager-kodeWeave.json'));
assert.equal(kw.html,read('index.html'));assert.equal(kw.javascript,read('src/script.js'));
console.log('PASS Phase 2S: three modes, localStorage persistence, invalid-mode fallback, layout CSS, both screens, source synchronization.');
