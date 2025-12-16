"use client";

import React, { useRef } from "react";
import { carouselImages } from "@/constants/carouselImages";
import NavigateButton from "@/ui-kit/NavigateButton";

const sizes = [
  "w-[340px] h-[420px]",
  "w-[350px] h-[320px]",
  "w-[340px] h-[500px]",
  "w-[400px] h-[380px]",
];


const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16">
      <div
        ref={scrollRef}
        className="
          flex gap-8 overflow-x-auto px-6
          scrollbar-hide scroll-smooth
          no-scrollbar
        "
      >
        {carouselImages.map((img, index) => (
          <div
            key={img.id}
            className={`
              shrink-0 rounded-3xl overflow-hidden
              ${sizes[index % sizes.length]}
            `}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="container mt-10 flex items-center justify-between">
        <div className="flex gap-4 text-xl">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-10 rounded-full border border-black flex items-center justify-center">
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-10 rounded-full border border-black flex items-center justify-center">
            →
          </button>
        </div>

        <NavigateButton text="VIEW MORE PHOTOS" className="max-md:hidden" href="/photos" />
        <NavigateButton text="VIEW MORE" className="md:hidden" href="/photos" />
      </div>
    </section>
  );
};

export default Carousel;
