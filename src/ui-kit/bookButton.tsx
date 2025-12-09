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
      className={`btn-regular ${className}`}
    >
      <p className="mt-[0.5]">{text}</p > 
      <BsArrowRight className="text-(--west-bg) text-2xl" />
    </Link>
  );
};

export default BookButton;
