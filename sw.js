// 설치(홈 화면 추가)용 최소 서비스 워커. 캐시는 하지 않음 → 항상 최신 버전을 받아 옴.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
