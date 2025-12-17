import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import BookButton from "@/ui-kit/bookButton";
import Link from "next/link";

interface ResponsiveMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResponsiveMenu = ({ open, setOpen }: ResponsiveMenuProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

 const menuLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

  const socialIcons = [FaFacebook, FaTwitter, FaInstagram, FaLinkedin];
  const locations = ["TSH Kraton", "TSH Tambakboyo", "TSH Godean", "TSH Bantul"];
  const solutions = ["Hot Desks", "Dedicated Desks", "Private Offices", "Virtual Offices"];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-(--west-bg) flex transition-all duration-300 z-50 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* LEFT SIDE */}
      <div className="w-1/2 relative max-md:hidden">
        <button
          onClick={() => setOpen(false)}
          className="flex absolute items-center top-6 left-6 z-50 gap-1 uppercase cursor-pointer text-black tracking-wider"
        >
          <span className="text-sm md:text-base font-medium">Close</span>
          <MdClose className="text-3xl" />
        </button>

        <video
          ref={videoRef}
          src="/videos/menu-vid.mp4"
          poster="/assets/posters/poster.png"
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE  */}
      <div className="w-full h-full px-6 md:px-12 py-6 flex flex-col justify-between overflow-y-auto">
      
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LuLeaf className="text-2xl md:text-3xl" />
            <p className="text-3xl font-medium">225 West</p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="flex items-center uppercase cursor-pointer md:hidden"
          >
            <span className="text-sm font-medium">Close</span>
            <MdClose className="text-2xl" />
          </button>

          <BookButton className="hidden md:flex py-2" text="Book a tour" href="/book-tour" />
        </div>

        {/* MENU LINKS */}
        <div className="flex justify-between items-start w-full">
          <nav className="mt-8 space-y-2">
            {menuLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={()=>setOpen(false)}
                className="block text-5xl lg:text-6xl font-medium cursor-pointer underline-slide underline-slide-thick"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="md:flex flex-col space-y-4 md:mt-12 mt-8">
            {socialIcons.map((Icon, i) => (
              <div key={i} className="icon-circle icon-circle-dark">
                <Icon className="text-2xl" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-lg md:text-xl uppercase mt-8 md:mt-12">
          <div>
            <h3 className="underline-slide underline-black mb-3 md:mb-4 font-semibold">Location</h3>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li className="underline-slide underline-black cursor-pointer" key={loc}>
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="underline-slide underline-black mb-3 md:mb-4 font-semibold">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((sol) => (
                <li className="underline-slide underline-black cursor-pointer" key={sol}>
                  {sol}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile */}
        <BookButton className="flex md:hidden py-2 mt-4 mx-auto" text="Book a tour" href="/book-tour" />
      </div>
    </div>
  );
};

export default ResponsiveMenu;