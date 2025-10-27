const CACHE_NAME = "site-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "https://nerontech.github.io/sparkles/index.html",
  "https://nerontech.github.io/sparkles/app.js",
  "https://nerontech.github.io/sparkles/icons/android/android-launchericon-144-144.png",
  "https://nerontech.github.io/sparkles/icons/android/android-launchericon-192-192.png",
  "https://nerontech.github.io/sparkles/icons/android/android-launchericon-48-48.png",
  "https://nerontech.github.io/sparkles/icons/android/android-launchericon-512-512.png",
  "https://nerontech.github.io/sparkles/icons/android/android-launchericon-72-72.png",
  "https://nerontech.github.io/sparkles/icons/android/android-launchericon-96-96.png",
  "https://nerontech.github.io/sparkles/icons/ios/100.png",
  "https://nerontech.github.io/sparkles/icons/ios/1024.png",
  "https://nerontech.github.io/sparkles/icons/ios/114.png",
  "https://nerontech.github.io/sparkles/icons/ios/120.png",
  "https://nerontech.github.io/sparkles/icons/ios/128.png",
  "https://nerontech.github.io/sparkles/icons/ios/144.png",
  "https://nerontech.github.io/sparkles/icons/ios/152.png",
  "https://nerontech.github.io/sparkles/icons/ios/16.png",
  "https://nerontech.github.io/sparkles/icons/ios/167.png",
  "https://nerontech.github.io/sparkles/icons/ios/180.png",
  "https://nerontech.github.io/sparkles/icons/ios/192.png",
  "https://nerontech.github.io/sparkles/icons/ios/20.png",
  "https://nerontech.github.io/sparkles/icons/ios/256.png",
  "https://nerontech.github.io/sparkles/icons/ios/29.png",
  "https://nerontech.github.io/sparkles/icons/ios/32.png",
  "https://nerontech.github.io/sparkles/icons/ios/40.png",
  "https://nerontech.github.io/sparkles/icons/ios/50.png",
  "https://nerontech.github.io/sparkles/icons/ios/512.png",
  "https://nerontech.github.io/sparkles/icons/ios/57.png",
  "https://nerontech.github.io/sparkles/icons/ios/58.png",
  "https://nerontech.github.io/sparkles/icons/ios/60.png",
  "https://nerontech.github.io/sparkles/icons/ios/64.png",
  "https://nerontech.github.io/sparkles/icons/ios/72.png",
  "https://nerontech.github.io/sparkles/icons/ios/76.png",
  "https://nerontech.github.io/sparkles/icons/ios/80.png",
  "https://nerontech.github.io/sparkles/icons/ios/87.png",
  "https://nerontech.github.io/sparkles/icons/windows11/LargeTile.scale-100.png",
  "https://nerontech.github.io/sparkles/icons/windows11/LargeTile.scale-125.png",
  "https://nerontech.github.io/sparkles/icons/windows11/LargeTile.scale-150.png",
  "https://nerontech.github.io/sparkles/icons/windows11/LargeTile.scale-200.png",
  "https://nerontech.github.io/sparkles/icons/windows11/LargeTile.scale-400.png",
  "https://nerontech.github.io/sparkles/icons/windows11/SmallTile.scale-100.png",
  "https://nerontech.github.io/sparkles/icons/windows11/SmallTile.scale-125.png",
  "https://nerontech.github.io/sparkles/icons/windows11/SmallTile.scale-150.png",
  "https://nerontech.github.io/sparkles/icons/windows11/SmallTile.scale-200.png",
  "https://nerontech.github.io/sparkles/icons/windows11/SmallTile.scale-400.png",
  "https://nerontech.github.io/sparkles/icons/windows11/SplashScreen.scale-100.png",
  "https://nerontech.github.io/sparkles/icons/windows11/SplashScreen.scale-125.png",
  "https://nerontech.github.io/sparkles/icons/windows11/SplashScreen.scale-150.png",
  "https://nerontech.github.io/sparkles/icons/windows11/SplashScreen.scale-200.png",
  "https://nerontech.github.io/sparkles/icons/windows11/SplashScreen.scale-400.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square150x150Logo.scale-100.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square150x150Logo.scale-125.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square150x150Logo.scale-150.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square150x150Logo.scale-200.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square150x150Logo.scale-400.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.scale-100.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.scale-125.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.scale-150.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.scale-200.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.scale-400.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-16.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-20.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-24.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-256.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-30.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-32.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-36.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-40.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-44.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-48.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-60.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-64.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-72.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-80.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Square44x44Logo.targetsize-96.png",
  "https://nerontech.github.io/sparkles/icons/windows11/StoreLogo.scale-100.png",
  "https://nerontech.github.io/sparkles/icons/windows11/StoreLogo.scale-125.png",
  "https://nerontech.github.io/sparkles/icons/windows11/StoreLogo.scale-150.png",
  "https://nerontech.github.io/sparkles/icons/windows11/StoreLogo.scale-200.png",
  "https://nerontech.github.io/sparkles/icons/windows11/StoreLogo.scale-400.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Wide310x150Logo.scale-100.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Wide310x150Logo.scale-125.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Wide310x150Logo.scale-150.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Wide310x150Logo.scale-200.png",
  "https://nerontech.github.io/sparkles/icons/windows11/Wide310x150Logo.scale-400.png",
  "https://nerontech.github.io/sparkles/index.html",
  "https://nerontech.github.io/sparkles/offline.html",
  "https://nerontech.github.io/sparkles/service-worker.js",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((resp) => {
          return resp;
        })
        .catch(() => {
          return caches.match("https://nerontech.github.io/sparkles/index.html");
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request)
          .then((resp) => {
            if (
              event.request.method === "GET" &&
              resp &&
              resp.type === "basic"
            ) {
              caches
                .open(CACHE_NAME)
                .then((cache) => cache.put(event.request, resp.clone()));
            }
            return resp;
          })
          .catch(() => {
            return cached;
          })
      );
    })
  );
});
