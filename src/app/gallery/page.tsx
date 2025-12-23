'use client';

import { useState } from 'react';
import { galleryItems, GalleryItem as GalleryItemType } from '@/constants/galleryData';
import GalleryItem from '@/components/gallery/GalleryItem';
import GalleryModal from '@/components/gallery/GalleryModal';

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(null);

  return (
    <>
      <div className="container mx-auto px-4 md:px-10 lg:px-16 py-16">
        <header className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight text-[#1F473E] mb-3">
            Our Space
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase opacity-65 font-medium">
            Where Work Meets Life
          </p>
        </header>

        <div className="w-full h-px bg-[#c3b6a7] mb-8" />

        <div
          className=" grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {galleryItems.map((item, idx) => (
            <GalleryItem
              key={item.title}
              item={item}
              index={idx}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        <footer className="text-center mt-16 md:mt-20 pt-10 border-t border-[#1F473E]/12">
          <p className="text-sm opacity-55 tracking-wider">
            Experience thoughtful design in every corner
          </p>
        </footer>
      </div>

      <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
