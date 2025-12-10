"use client";

import React, { useState } from "react";
import { carouselImages, CarouselImage } from "../constants/carouselImages";
import NavigateButton from "@/ui-kit/NavigateButton";

interface CarouselButtonProps {
  onClick: () => void;
  direction: "prev" | "next";
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center justify-center w-13 h-10 md:w-16 md:h-12 rounded-full border border-black hover:bg-white/20 transition"
    aria-label={direction === "prev" ? "Previous" : "Next"}
  >
    {direction === "prev" ? (
      <span className="text-2xl">←</span>
    ) : (
      <span className="text-2xl">→</span>
    )}
  </button>
);

interface VisibleCarouselImage extends CarouselImage {
  pos: number;
}

const Carousel: React.FC = () => {
  const [centerIndex, setCenterIndex] = useState<number>(0);

  const handlePrev = () =>
    setCenterIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCenterIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );

  // Return exactly 5 images around center
  const visibleImages = (): VisibleCarouselImage[] => {
    const arr: VisibleCarouselImage[] = [];

    for (let i = -2; i <= 2; i++) {
      const correctIndex =
        (centerIndex + i + carouselImages.length) % carouselImages.length;

      arr.push({
        ...carouselImages[correctIndex],
        pos: i,
      });
    }

    return arr;
  };

  const getStyle = (pos: number): string => {
    const base =
      "absolute  top-1/2 -translate-y-1/2 ";

    const styles: Record<number, string> = {
      0: `${base} left-1/2 -translate-x-1/2 scale-100 z-30 w-[260px] h-[440px] lg:w-[370px] lg:h-[640px]`,
      [-1]: `${base} left-[16%] -translate-x-[10px] scale-90  z-20 w-[220px] h-[360px] lg:w-[320px] lg:h-[540px]`,
      [1]: `${base} right-[16%] translate-x-[10px] scale-90 z-20 w-[220px] h-[360px] lg:w-[320px] lg:h-[540px]`,
      [-2]: `${base} left-[0%] -translate-x-[1px] scale-75 z-10 w-[180px] h-[320px] lg:w-[260px] lg:h-[460px]`,
      [2]: `${base} right-[0%] translate-x-[-1px] scale-75 z-10 w-[180px] h-[320px] lg:w-[260px] lg:h-[460px]`,
    };

    return styles[pos] ?? base;
  };

  return (
    <div className="bg-half-split w-full flex flex-col items-center justify-start">
      {/* Carousel */}
      <div className="relative w-full h-[550px] lg:h-[650px]  overflow-hidden">
        {visibleImages().map((img) => (
          <div key={img.id} className={getStyle(img.pos)}>
            <div className="w-full h-full overflow-hidden rounded-full">
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
        
      </div>

      {/* Navigation Buttons */}
      <div className="container flex items-start justify-between">
        <div className="flex gap-4">
          <CarouselButton onClick={handlePrev} direction="prev" />
          <CarouselButton onClick={handleNext} direction="next" />
        </div>

        <NavigateButton text="VIEW MORE PHOTOS" href="/photos" />
      </div>
    </div>
  );
};

export default Carousel;
