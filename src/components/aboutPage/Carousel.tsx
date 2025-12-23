"use client";

import { carouselImages } from "@/constants/carouselImages";
import NavigateButton from "@/ui-kit/NavigateButton";

const GalleryImage = ({ img, height }: { img: any; height: string }) => (
  <div
    className={`relative flex-1 overflow-hidden rounded-3xl transition-all duration-700 ease-out hover:flex-[1.6] md:hover:flex-[1.6] ${height}`}
  >
    <img
      src={img.url}
      alt={img.alt}
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[0.97] hover:scale-110"
      loading="lazy"
    />
    <div className="absolute inset-0 pointer-events-none" />
  </div>
);

const GalleryRow = ({ images, height }: { images: any[]; height: string }) => (
  <div className="flex gap-3 md:gap-6 group">
    {images.map((img) => (
      <GalleryImage key={img.id} img={img} height={height} />
    ))}
  </div>
);

const BentoGallery = () => {
  const images = carouselImages.slice(0, 8);

  const rows = [
    { start: 0, end: 3, height: "h-[200px] sm:h-[260px] md:h-[320px]" },
    { start: 3, end: 6, height: "h-[180px] sm:h-[220px] md:h-[260px]" },
    { start: 6, end: 8, height: "h-[190px] sm:h-[240px] md:h-[300px]" },
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="container space-y-3 md:space-y-6">
        {rows.map((row, idx) => (
          <GalleryRow
            key={idx}
            images={images.slice(row.start, row.end)}
            height={row.height}
          />
        ))}
      </div>

      <div className="container mt-12 flex justify-end">
        <NavigateButton
          text="VIEW MORE PHOTOS"
          className="max-md:hidden"
          href="/gallery"
        />
        <NavigateButton
          text="VIEW MORE"
          className="md:hidden"
          href="/gallery"
        />
      </div>
    </section>
  );
};

export default BentoGallery;
