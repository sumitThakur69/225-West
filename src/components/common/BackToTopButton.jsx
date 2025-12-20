"use client";

import { smoothScroll } from "@/utils/smoothScroll";

export default function BackToTopButton() {
  return (
    <button
      onClick={() => smoothScroll("top", 1200)}
      className="text-sm underline-slide underline-white"
    >
      BACK TO TOP
    </button>
  );
}
