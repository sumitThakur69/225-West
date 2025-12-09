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
      className="inline-flex items-center gap-2 border-b-2 hover:border-current transition-all duration-200"
    >
      {text}
      <span className="text-xl">→</span>
    </Link>
  );
};

export default NavigateButton;
