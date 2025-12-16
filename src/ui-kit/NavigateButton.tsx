"use client";

import Link from "next/link";

interface NavigateButtonProps {
  text: string;
  href: string;
  className?: string; 
}

const NavigateButton = ({ text, href , className }: NavigateButtonProps) => {
  return (
    <Link
      href={href}
      className=
       {`inline-flex items-center gap-2 
        transition-all duration-200
        border-b-0 underline-slide tracking-wide ${className} `}
      
    >
      {text}
      <span className="text-xl">→</span>
    </Link>
  );
};

export default NavigateButton;
