'use strict';
// Keep the checked-in application JavaScript and portable kodeWeave editor copy
// in sync. The current app is browser-ready source (not an ES-module graph),
// so a copy avoids changing its global Alpine entry point during production build.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = rel => fs.readFileSync(path.join(root, rel), 'utf8');
const sourceJS = read('src/script.js');
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/script.js'), sourceJS);
const projectPath = path.join(root, 'urbanforager-kodeWeave.json');
const project = JSON.parse(fs.readFileSync(projectPath, 'utf8'));
project.javascript = sourceJS;
project.html = read('index.html');
project.css = read('src/style.css');
fs.writeFileSync(projectPath, JSON.stringify(project, null, 2) + '\n');
console.log('Synchronized dist/script.js and kodeWeave HTML/CSS/JS.');
