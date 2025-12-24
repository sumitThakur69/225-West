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
