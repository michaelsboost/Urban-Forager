// Guard against mobile Print control layout regressions.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const source=fs.readFileSync(path.join(root,'src/source.html'),'utf8');
const styles=fs.readFileSync(path.join(root,'dist/bundle.css'),'utf8');
for (const markup of [html,source]) {
  assert.match(markup,/class="uf-print-launch uf-dossier-print-action"/);
  assert.match(markup,/aria-label="Print or save this dossier"/);
  assert.doesNotMatch(markup,/<span>Print<\/span><\/button>/);
}
assert.match(styles,/\.uf-app \.uf-dossier-toolbar>div button\.uf-dossier-print-action/);
assert.match(styles,/width:42px!important;height:42px!important/);
assert.match(styles,/min-width:42px!important;min-height:42px!important/);
assert.match(styles,/border:0!important;box-shadow:none!important/);
assert.doesNotMatch(styles,/border:2px solid #70f0b8!important/);
console.log('Pass: borderless print actions, accessible icon-only 42px dossier control, synced markup.');
