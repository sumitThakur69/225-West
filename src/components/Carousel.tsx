"use client";

import React, { useState, useRef } from "react";
import { carouselImages, CarouselImage } from "../constants/carouselImages";
import NavigateButton from "@/ui-kit/NavigateButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineArrowSmallLeft , HiOutlineArrowSmallRight } from "react-icons/hi2";

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
      <HiOutlineArrowSmallLeft className="text-2xl md:text-3xl leading-none" />
    ) : (
      <HiOutlineArrowSmallRight className="text-2xl md:text-3xl leading-none" />
    )}
  </button>
);

interface VisibleCarouselImage extends CarouselImage {
  pos: number;
}

const Carousel: React.FC = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const startX = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  const handlePrev = () => {
    setCenterIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCenterIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    startTime.current = performance.now();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current === null || startTime.current === null) return;

    const diffX = e.clientX - startX.current;
    const diffTime = performance.now() - startTime.current;

    const velocity = Math.abs(diffX) / diffTime;

    const DISTANCE_THRESHOLD = 70;
    const VELOCITY_THRESHOLD = 0.45;

    if (diffX > DISTANCE_THRESHOLD || (diffX > 0 && velocity > VELOCITY_THRESHOLD)) {
      handlePrev();
    } else if (diffX < -DISTANCE_THRESHOLD || (diffX < 0 && velocity > VELOCITY_THRESHOLD)) {
      handleNext();
    }

    startX.current = null;
    startTime.current = null;
  };

  const visibleImages = (): VisibleCarouselImage[] => {
    const arr: VisibleCarouselImage[] = [];

    for (let i = -2; i <= 2; i++) {
      const index =
        (centerIndex + i + carouselImages.length) % carouselImages.length;
      arr.push({ ...carouselImages[index], pos: i });
    }

    return arr;
  };

  const getStyle = (pos: number): string => {
    const base =
      "absolute top-1/2 -translate-y-1/2 transition-[left,right,scale] duration-500 ease-out";

    const styles: Record<number, string> = {
      0: `${base} left-1/2 -translate-x-1/2 scale-100 z-30 w-[260px] h-[440px] lg:w-[370px] lg:h-[640px]`,
      [-1]: `${base} left-[17%] sm:left-[12%] scale-90 z-20 w-[220px] h-[360px] lg:w-[320px] lg:h-[540px]`,
      [1]: `${base} right-[17%] sm:right-[12%] scale-90 z-20 w-[220px] h-[360px] lg:w-[320px] lg:h-[540px]`,
      [-2]: `${base} left-[-6%] scale-75 z-10 w-[180px] h-[320px] lg:w-[260px] lg:h-[460px]`,
      [2]: `${base} right-[-6%] scale-75 z-10 w-[180px] h-[320px] lg:w-[260px] lg:h-[460px]`,
    };

    return styles[pos] ?? base;
  };

  return (
    <div className="bg-half-split w-full flex flex-col items-center justify-start">
      <div
        className="relative w-full h-[550px] lg:h-[650px] overflow-hidden select-none"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {visibleImages().map((img) => (
          <div key={img.id} className={getStyle(img.pos)}>
            <div className="w-full h-full overflow-hidden rounded-full">
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="container flex items-start justify-between">
        <div className="flex gap-4">
          <CarouselButton onClick={handlePrev} direction="prev" />
          <CarouselButton onClick={handleNext} direction="next" />
        </div>

        <NavigateButton text="VIEW MORE PHOTOS" href="/gallery" />
      </div>
    </div>
  );
};

export default Carousel;
