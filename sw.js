const CACHE_NAME = 'absensi-bip-v230_fix_update_checker';
const APP_SHELL = ['./','./index.html','./manifest.json','./version.json','./firebase-config.js','./firebase-bridge.js','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-master-transparent.png'];
self.addEventListener('install', event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate', event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME && String(k).indexOf('absensi-bip-')===0).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('message', event=>{
  if(event && event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
async function networkFirst(request){
  const cache=await caches.open(CACHE_NAME);
  try{
    const fresh=await fetch(request, {cache:'no-store'});
    if(fresh && fresh.ok) cache.put(request, fresh.clone());
    return fresh;
  }catch(err){
    const cached=await caches.match(request);
    if(cached) return cached;
    return caches.match('./index.html');
  }
}
async function cacheFirst(request){
  const cached=await caches.match(request);
  if(cached) return cached;
  const cache=await caches.open(CACHE_NAME);
  try{
    const fresh=await fetch(request);
    if(fresh && fresh.ok) cache.put(request, fresh.clone());
    return fresh;
  }catch(err){ return caches.match('./index.html'); }
}
self.addEventListener('fetch', event=>{
  if(event.request.method !== 'GET') return;
  const url=new URL(event.request.url);
  const isNavigate=event.request.mode === 'navigate';
  const isFreshFile=/\/(index\.html|sw\.js|manifest\.json|version\.json)$/.test(url.pathname);
  if(isNavigate || isFreshFile){ event.respondWith(networkFirst(event.request)); return; }
  event.respondWith(cacheFirst(event.request));
});
