// src/utils/smoothScroll.ts

type ScrollTarget = "top" | string;

export function smoothScroll(
  target: ScrollTarget,
  duration: number = 1000
) {
  const startY = window.scrollY;

  const endY =
    target === "top"
      ? 0
      : (() => {
          const el = document.getElementById(target);
          return el
            ? el.getBoundingClientRect().top + window.scrollY
            : startY;
        })();

  const distance = endY - startY;
  const startTime = performance.now();

  const easeInOut = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOut(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}
