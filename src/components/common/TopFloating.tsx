"use client";

import { useEffect, useState } from "react";
import { smoothScroll } from "@/utils/smoothScroll";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTopFloating() {
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !footerVisible;

  if (!visible) return null;

  return (
    <button
      onClick={() => smoothScroll("top", 650)}
      aria-label="Back to top"
      className="back-to-top-floating"
    >
      <FiArrowUp className="md:text-xl transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
