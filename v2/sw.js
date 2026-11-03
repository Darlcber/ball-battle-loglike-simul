// 홈 화면 앱용 서비스 워커. 페이지는 항상 네트워크에서 새로 받음(캐시 안 씀) → 고친 버전이 바로 보임.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") e.respondWith(fetch(e.request, { cache: "no-store" }).catch(() => fetch(e.request)));
});
