/** Scroll the window to the top (or near a target element). */
export function scrollToTop(targetId?: string, headerOffset = 88) {
  const el = targetId ? document.getElementById(targetId) : null;
  const top = el
    ? el.getBoundingClientRect().top + window.scrollY - headerOffset
    : 0;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
