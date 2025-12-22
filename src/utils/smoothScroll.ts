export function smoothScroll(
  target: string | "top",
  duration = 600,
  offset = 0
) {
  const start = window.pageYOffset;
  const end =
    target === "top"
      ? 0
      : document.getElementById(target)?.getBoundingClientRect().top! +
        window.pageYOffset -
        offset;

  const startTime = performance.now();

  function easeInOutCubic(t: number) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate(time: number) {
    const elapsed = time - startTime;
    const rawProgress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(rawProgress);

    window.scrollTo(0, start + (end - start) * eased);

    if (rawProgress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
