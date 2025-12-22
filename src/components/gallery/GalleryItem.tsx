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
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`gallery-item   ${isVisible ? 'visible' : ''}`}
        style={{
    gridRowEnd: `span ${Math.ceil(item.height / 8)}`,
    transitionDelay: `${Math.min(index * 40, 600)}ms`
  }}
      onClick={onClick}
    >
        
      <div className="gallery-item-inner">
        <Image
        src={item.image}
        alt={item.title}
        width={600}
        height={800}
        className="object-cover"
        loading={index < 8 ? 'eager' : 'lazy'}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        <div className="gallery-overlay ">
          <p className="text-(--west-bg) text-[0.65rem] sm:text-xs tracking-[0.15em] uppercase font-medium">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
}