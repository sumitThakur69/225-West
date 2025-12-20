export function smoothScroll(
  target: string | "top",
  duration = 500,
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

  function animate(time: number) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, start + (end - start) * progress);

    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
