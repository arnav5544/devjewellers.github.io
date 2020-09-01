self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('arnav5544').then(function(cache) {
     return cache.addAll([
       'https://adevjewellers.github.io',
       'index.html',
       'script.js',

       'devjewellers512.png',
'devjewellers.webmanifest',
      'save.js',
      'whatsapp.png',
      'favicon1.ico',
      'favicon.ico',
      'devjewellers.jpg',
      'click.mp3',
      'android-chrome-512x512.ico',
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
