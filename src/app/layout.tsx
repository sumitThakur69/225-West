import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${clashDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
