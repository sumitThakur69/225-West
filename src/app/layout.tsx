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
  title: "225-West",
  description: "Xyx",
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
