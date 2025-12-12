"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface BookButtonProps {
  text: string;
  href: string;
  className?: string; 
}

const BookButton: React.FC<BookButtonProps> = ({ text, href, className }) => {
  return (
    <Link
      href={href}
      className={`btn-regular group ${className}`}
    >
      <p className="mt-[0.5]">{text}</p > 
      <BsArrowRight className="text-(--west-bg) text-xl transition-transform duration-300 group-hover:translate-x-1 " />
    </Link>
  );
};

export default BookButton;
