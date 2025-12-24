import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/common/Header";


const clashDisplay = localFont({
  src: [
    { path: "./fonts/ClashDisplay-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/ClashDisplay-Medium.woff",  weight: "500", style: "normal" },
    { path: "./fonts/ClashDisplay-Semibold.woff", weight: "600", style: "normal" },
  ],
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: {
    default: "225 West – Premium Coworking Space in Jaipur",
    template: "%s | 225 West",
  },

  description:
    "225 West is Jaipur’s premium coworking space offering shared offices, private cabins, meeting rooms and event spaces for startups and professionals.",

  keywords: [
    "coworking space Jaipur",
    "225 West Jaipur",
    "shared office Jaipur",
    "office space for rent Jaipur",
    "startup workspace Jaipur"
  ],

  openGraph: {
    title: "225 West – Premium Coworking Space in Jaipur",
    description:
      "Work, collaborate and grow at Jaipur’s most vibrant coworking space – 225 West.",
    url: "https://225-west.vercel.app",
    siteName: "225 West",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "225 West Coworking Space Jaipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "225 West – Premium Coworking Space in Jaipur",
    description:
      "Premium coworking space in Jaipur for startups, freelancers and teams.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://225-west.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${clashDisplay.variable} antialiased`}
      >
        <header><Header /></header>
        <main id="main-content">{children}</main>
        <footer id="site-footer"><Footer /></footer>
      </body>
    </html>
  );
}
