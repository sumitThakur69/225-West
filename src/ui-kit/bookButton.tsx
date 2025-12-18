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
      href='/#contact'
      className={`btn-regular group ${className}`}
    >
      <h1 className="leading-none tracking-wide">{text}</h1 > 
      <BsArrowRight className="text-(--west-bg) text-xl transition-transform duration-300 group-hover:translate-x-1 " />
    </Link>
  );
};

export default BookButton;
