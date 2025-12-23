export function smoothScroll(
  target: string | "top",
  duration = 600,
  offset = 0
) {
  if (typeof window === "undefined") return;

  const start = window.scrollY;

  const end =
    target === "top"
      ? 0
      : Math.max(
          document.getElementById(target)?.getBoundingClientRect().top! +
            window.scrollY -
            offset,
          0
        );

  const startTime = performance.now();
  let cancelled = false;

  function cancel() {
    cancelled = true;
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
  }

  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });

  function easeInOutCubic(t: number) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate(time: number) {
    if (cancelled) return;

    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, start + (end - start) * eased);

    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
