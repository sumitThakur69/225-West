import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import BackgroundLogo from "./BackgroundLogo";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import BackToTopButton from "@/components/common/BackToTopButton"
import { MdOutlineShareLocation } from "react-icons/md";

interface SocialIcon {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  label:string;
}

const Footer: React.FC = () => {
  const locations: string[] = [
    "TSH KRATON",
    "TSH TAMBAKWOYO",
    "TSH GEDEAN",
    "TSH BANTOOL",
    "TSH PROGO",
    "TSH JACKALL",
  ];

  const solutions: string[] = [
    "Hot Desks",
    "Dedicated Desks",
    "Private Offices",
    "Virtual Offices",
    "Day Passes",
    "Enterprice Solutions",
  ];

  const west = [
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/#contact" },
];

  const socialIcons: SocialIcon[] = [
    { icon: FaFacebook, link: "https://facebook.com/", label: "Facebook" },
    { icon: FaTwitter, link: "https://twitter.com/", label: "Twitter" },
    { icon: FaInstagram, link: "https://instagram.com/", label: "Instagram" },
    { icon: FaLinkedin, link: "https://linkedin.com/", label: "LinkedIn" },
  ];


  return (
    <BackgroundLogo  className="w-full bg-(--west-bg-secondary) text-(--west-bg)"
    position="left"
    size="50"
    logo="/brand/Logo_Footer.svg"
    >
      <div className="container py-10 md:py-14 lg:py-18">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-20 items-start">
          {/* Description & Social Icons */}
          <div className="lg:pr-8">
            <h1 className="mb-6 leading-relaxed max-w-[450px]">
              The Seed Hub is more than just a coworking space, it's a fertile
              ground for nurturing your ideas and growing your business.
            </h1>
            <div className="flex flex-row space-x-4">
              {socialIcons.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                  <div className="icon-circle icon-circle-light">
                    <item.icon className="text-2xl" aria-hidden="true" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/*  Solutions / The Seed Hub */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-8">
            {/* <div className="tracking-wider">
              <h1 className="underline-slide opacity-60 text-lg mb-4 tracking-wide">
                LOCATION
              </h1>
              <ul className="space-y-3">
                {locations.map((location, index) => (
                  <li key={index}>
                    <span  className="underline-slide underline-white cursor-pointer">
                      {location}
                    </span>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="tracking-wider">
              <h1 className="text-lg mb-4 opacity-60">SOLUTIONS</h1>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index}>
                  <Link
                    href={`/workspaces#${slugify(solution)}`}
                    className="underline-slide underline-white">
                    {solution}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-fit  tracking-wider">
              <h1 className="mb-4  opacity-60">225 West</h1>
              <ul className="space-y-3">
                {west.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="underline-slide underline-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10 lg:mb-14 flex flex-col items-center space-y-4 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-normal tracking-tight leading-none">
            225 West
          </h1>

          <div className="group text-(--west-bg)/80">
            <div className="flex items-start">
              {/* Icon wrapper */}
              <span className="flex items-end justify-center w-5 h-5 shrink-0">
                <MdOutlineShareLocation className="w-4 h-4" />
              </span>

              <h2 className="m-0 text-sm md:text-md leading-relaxed max-w-[550px]">
                225, Vardhman Nagar-A Patrakar Colony, Gopalpura Bypass, near 200 Feet Bypass,
                Jaipur, Rajasthan 302019, India
              </h2>
            </div>

            <a
              href="https://maps.app.goo.gl/AZCXxEaSebUj2i3i6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3>See location →</h3>
            </a>
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 pt-8 border-t border-[rgba(241,236,220,0.12)]">
          <div 
          className="text-center sm:text-left opacity-80 max-sm:order-3">
            <h1>225_West@gmail.com</h1>
          </div>

          <div className="flex justify-center">
            <BackToTopButton />
          </div>

          <div className="flex justify-center md:justify-end gap-6 text-sm">
            <Link href="/terms" className="underline-slide underline-white">
              <h1>TERMS</h1>
            </Link>
            <Link href="/policies" className="underline-slide underline-white">
              <h1>PRIVACY POLICY</h1>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundLogo>
  );
};

export default Footer;
