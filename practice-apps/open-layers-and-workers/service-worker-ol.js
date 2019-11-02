const cacheName = 'staticCache-v1';
const dataCacheName = 'tileCache-v1';
const dataUrls = ['ahocevar.com/geoserver', 'tile.openstreetmap'];


var filesToCache = [
  './index.html',
  './map1.html',
  './map2.html',
  './shared-worker.js',
  './img/background.jpg',
  './img/map1.jpg',
  './img/map2.jpg',
  './openlayers/build.ol.js',
  './openlayers/style.ol.css'
];

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    //https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url);

  if (dataUrls.some((url) => e.request.url.indexOf(url) !== -1)) {
    e.respondWith(
      caches.match(e.request).then(function (response) {
        if (!response) {
          //we don't have it cached
          return caches.open(dataCacheName).then(function (cache) {
            return fetch(e.request).then(function (response) {
              cache.put(e.request.url, response.clone());
              return response;
            });
          })
        }
        return response;
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
      })
    );
  }

});