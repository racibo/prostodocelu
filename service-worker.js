const CACHE_NAME = 'azymut-app-cache-v1';
// Dodaj tutaj listę wszystkich plików, które chcesz przechować,
// zwłaszcza ten główny plik!
const urlsToCache = [
  '/',
  'index.html',
  'https://unpkg.com/leaflet/dist/leaflet.css',
  'https://unpkg.com/leaflet/dist/leaflet.js',
  'https://unpkg.com/suncalc/suncalc.js',
  'manifest.json',
  'icon-192x192.png',
  'icon-512x512.png'
];

// --- 1. INSTALACJA I POMINIĘCIE OCZEKIWANIA ---
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache ' + CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Ta linijka jest KLUCZOWA!
        // Mówi nowemu SW, aby przejął kontrolę natychmiast, a nie czekał.
        return self.skipWaiting(); 
      })
  );
});

// --- 2. AKTYWACJA, PRZEJĘCIE KONTROLI I CZYSZCZENIE ---
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Ta część jest KLUCZOWA!
          // Usuwa wszystkie stare cache, które NIE pasują do nowej nazwy.
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache: ' + cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Ta linijka jest KLUCZOWA!
      // Mówi nowemu SW, aby przejął kontrolę nad otwartymi stronami.
      return self.clients.claim();
    })
  );
});

// --- 3. PRZECHWYTYWANIE ŻĄDAŃ (STRATEGIA CACHE-FIRST) ---
self.addEventListener('fetch', event => {
  // Ignoruj chrome-extension i inne protokoły
  if (!event.request.url.startsWith('http://') && !event.request.url.startsWith('https://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Jeśli jest w cache, zwróć
        if (response) {
          return response;
        }

        // Pobierz z sieci
        return fetch(event.request).then(response => {
          // Sprawdzenie poprawności
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Sklonuj i dodaj do cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        })
        .catch(() => {
          // Fallback gdy brak sieci
          return caches.match('/index.html');
        });
      })
  );
});