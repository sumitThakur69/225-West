import Image from "next/image";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { GalleryItem } from "@/constants/galleryData";

interface Props {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function GalleryModal({ item, onClose }: Props) {
  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-6xl max-h-[90vh] bg-(--west-bg) rounded-xl overflow-hidden flex flex-col md:flex-row">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-(--west-bg) md:bg-(--west-bg-secondary)/10 shadow-md flex items-center justify-center hover:scale-110 transition">
        <MdClose className="text-2xl" />
        </button>

        <div className="relative w-full md:w-2/3 min-h-[280px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-full md:w-1/3 p-6 md:p-10 overflow-y-auto">
          <p className="text-xs tracking-widest uppercase text-(--west-bg-secondary)/60 mb-4">
            {item.category}
          </p>

          <h2 className="text-2xl font-light text-(--west-bg-secondary) mb-3">
            {item.title}
          </h2>

          <p className="text-sm leading-relaxed text-(--west-bg-secondary)/80 mb-6">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-(--west-bg-secondary)/10 text-(--west-bg-secondary)"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
