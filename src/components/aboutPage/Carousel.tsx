"use client";

import React from "react";
import { carouselImages } from "@/constants/carouselImages";
import NavigateButton from "@/ui-kit/NavigateButton";

const MasonryGallery = () => {
  return (
    <section className="py-16">
      <div
        className="
          container
          columns-2
          md:columns-3
          gap-6
        "
      >
        {carouselImages.slice(0, 8).map((img) => (
          <div
            key={img.id}
            className="mb-6 rounded-3xl overflow-hidden break-inside-avoid"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="container mt-12 flex justify-end">
        <NavigateButton
          text="VIEW MORE PHOTOS"
          className="max-md:hidden"
          href="/photos"
        />
        <NavigateButton
          text="VIEW MORE"
          className="md:hidden"
          href="/photos"
        />
      </div>
    </section>
  );
};

export default MasonryGallery;