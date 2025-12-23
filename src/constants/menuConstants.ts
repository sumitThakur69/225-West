import { FiMessageSquare, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from "react";

export interface SocialIcon {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  label: string;
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface LocationItem {
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  external: boolean;
}

export const menuLinks: MenuItem[] = [
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/#contact" },
];

export const socialIcons: SocialIcon[] = [
  { icon: FaFacebook, link: "https://facebook.com/", label: "Facebook" },
  { icon: FaTwitter, link: "https://twitter.com/", label: "Twitter" },
  { icon: FaInstagram, link: "https://instagram.com/", label: "Instagram" },
  { icon: FaLinkedin, link: "https://linkedin.com/", label: "LinkedIn" },
];

export const locations: LocationItem[] = [
  {
    text: "Inquiry",
    icon: FiMessageSquare,
    href: "/#contact",
    external: false,
  },
  {
    text: "Location",
    icon: FiMapPin,
    href: "https://maps.app.goo.gl/ybjT3y2Pahu1Qs7F8",
    external: true,
  },
  {
    text: "87919 53044",
    icon: FiPhone,
    href: "tel:+918791953044",
    external: false,
  },
  {
    text: "225_West@gmail.com",
    icon: FiMail,
    href: "mailto:225_West@gmail.com",
    external: false,
  },
];

export const solutions: string[] = [
  "Hot Desks",
  "Dedicated Desks",
  "Private Offices",
  "Virtual Offices",
];
