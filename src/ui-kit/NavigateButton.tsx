"use client";

import Link from "next/link";

interface NavigateButtonProps {
  text: string;
  href: string;
}

const NavigateButton = ({ text, href }: NavigateButtonProps) => {
  return (
    <Link
      href={href}
      className="
        inline-flex items-center gap-2 
        transition-all duration-200
        border-b-0 underline-slide
      "
    >
      {text}
      <span className="text-xl">→</span>
    </Link>
  );
};

export default NavigateButton;
