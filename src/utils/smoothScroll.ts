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
          (document.getElementById(target)?.getBoundingClientRect().top ?? 0) +
            window.scrollY -
            offset,
          0
        );

  const distance = Math.abs(end - start);

  const minD = 250;
  const maxD = 900;
  const scaledDuration = Math.min(
    maxD,
    Math.max(minD, (distance / 1200) * duration)
  );

  const startTime = performance.now();
  let cancelled = false;

  function cancel() {
    cancelled = true;
    cleanup();
  }

  function onWheel(e: WheelEvent) {
    if (Math.abs(e.deltaY) > 6 || Math.abs(e.deltaX) > 6) cancel();
  }

  function onKeydown(e: KeyboardEvent) {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "PageUp" ||
      e.key === "PageDown" ||
      e.key === "Home" ||
      e.key === "End" ||
      e.key === " "
    ) {
      cancel();
    }
  }

  function cleanup() {
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("keydown", onKeydown);
    window.removeEventListener("mousedown", cancel);
  }

  window.addEventListener("wheel", onWheel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("keydown", onKeydown);
  window.addEventListener("mousedown", cancel);

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function animate(now: number) {
    if (cancelled) return;

    const elapsed = now - startTime;
    const progress = Math.min(elapsed / scaledDuration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, start + (end - start) * eased);

    if (progress < 1) requestAnimationFrame(animate);
    else cleanup();
  }

  requestAnimationFrame(animate);
}