export const revalidate = 86400;

import Amenities from "@/components/Amenities";
import Hero from "@/components/Hero";
import OurStories from "@/components/OurStories";
import Solutions from "@/components/Solution";
import ContactUs from "@/components/ContactUs";
import Carousel from "@/components/Carousel";
import Events from "@/components/Events";
import React from "react";

export default function Page() {
  return (
    <>
      {/* Google Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CoworkingSpace",
            name: "225 West",
            description:
              "Premium coworking space in Jaipur offering shared offices, private cabins, meeting rooms and event spaces.",
            url: "https://225-west.vercel.app",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jaipur",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <main>
        <Hero />
        <OurStories />
        <Carousel />
        <Amenities />
        <Solutions />
        <Events />
        <ContactUs />
      </main>
    </>
  );
}
