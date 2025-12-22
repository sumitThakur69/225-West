'use client';

import { GalleryItem as GalleryItemType } from '@/constants/galleryData';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
  onClick: () => void;
}

export default function GalleryItem({ item, index, onClick }: GalleryItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const spanClass =
    index === 0
      ? 'md:col-span-2 md:row-span-2'
      : index === 3
      ? 'md:row-span-2'
      : index === 5
      ? 'md:col-span-2'
      : '';

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-out
        ${spanClass}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${Math.min(index * 40, 600)}ms` }}>
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover"
        loading={index < 8 ? 'eager' : 'lazy'}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      <div className=" absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-(--west-bg) text-[0.65rem] sm:text-xs tracking-[0.15em] uppercase font-medium">
          {item.title}
        </p>
      </div>
    </div>
  );
}
