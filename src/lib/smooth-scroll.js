/*
 * Single shared Lenis instance. The provider registers it; anything that locks
 * the page (mobile menu, booking modal) pauses it here, because Lenis keeps
 * scrolling on wheel input even when body overflow is hidden.
 */
let instance = null;

export function registerLenis(lenis) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}

export function stopSmoothScroll() {
  instance?.stop();
}

export function startSmoothScroll() {
  instance?.start();
}
