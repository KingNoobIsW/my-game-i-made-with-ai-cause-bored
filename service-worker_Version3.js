const CACHE_NAME = 'cluster-rush-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
  // You can add other files to cache, e.g. CSS, JS, images, etc.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
