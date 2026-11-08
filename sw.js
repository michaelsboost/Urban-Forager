const CACHE = 'urban-forager-v1.0.4-featured-cinema';
const SHELL = ['./','./index.html','./manifest.json','./dist/bundle.css','./dist/script.js','./libraries/tailwind-mod.min.js','./libraries/all.min.css','./imgs/logo-192x192.png','./imgs/logo-512x512.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (!response || response.status !== 200 || response.type === 'opaque') return response;
    const copy=response.clone(); caches.open(CACHE).then(cache=>cache.put(event.request,copy)); return response;
  }).catch(()=> event.request.mode === 'navigate' ? caches.match('./index.html') : cached)));
});
self.addEventListener('message', event => { if(event.data && event.data.type==='SKIP_WAITING') self.skipWaiting(); });
