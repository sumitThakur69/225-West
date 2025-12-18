import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import BackgroundLogo from "./BackgroundLogo";
import { smoothScroll } from "@/utlis/smoothScroll";
import BackToTopButton from "@/components/common/BackToTopButton"

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
    "HOT DESKS",
    "DEDICATED DESKS",
    "PRIVATE OFFICES",
    "VIRTUAL OFFICES",
    "DAY PASSES",
    "ENTERPRISE SOLUTIONS",
  ];

  const seedHub: string[] = ["OUR STORY", "GALLERY", "CONTACT US", "EVENTS"];

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

          {/* Location / Solutions / The Seed Hub */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-8">
            <div>
              <h1 className="underline-slide opacity-60 text-lg mb-4 tracking-wide">
                LOCATION
              </h1>
              <ul className="space-y-3">
                {locations.map((location, index) => (
                  <li key={index}>
                    <a href="#" className="underline-slide underline-white">
                      {location}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-lg mb-4 opacity-60 tracking-wide">SOLUTIONS</h1>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <a href="#" className="underline-slide underline-white">
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-fit">
              <h1 className="mb-4 tracking-wide opacity-60">THE SEED HUB</h1>
              <ul className="space-y-3">
                {seedHub.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="underline-slide underline-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Logo / Big */}
        <div className="mb-10 lg:mb-14">
          <h1 className="text-6xl md:text-8xl lg:text-[11rem] text-center font-normal tracking-tight leading-none">
            225 West
          </h1>
        </div>

        {/* Bottom */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 pt-8 border-t border-[rgba(241,236,220,0.12)]"
        >
          <div 
          className="text-center sm:text-left opacity-80 max-sm:order-3">
            <h1>Copyright © 2023 Slab! Design Studio</h1>
          </div>

          <div className="flex justify-center">
            <BackToTopButton />
          </div>

          <div className="flex justify-center md:justify-end gap-6 text-sm">
            <a href="#" className="underline-slide underline-white">
              <h1>TERMS</h1>
            </a>
            <a href="#" className="underline-slide underline-white">
              <h1>PRIVACY POLICY</h1>
            </a>
          </div>
        </div>
      </div>
    </BackgroundLogo>
  );
};

export default Footer;
