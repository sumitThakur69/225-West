import Amenities from '@/components/Amenities'
import Hero from '@/components/Hero'
import OurStories from '@/components/OurStories'
import Solutions from '@/components/Solution'
import ContactUs from '@/components/ContactUs'
import Carousel from '@/components/Carousel'
import Events from '@/components/Events'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <OurStories />
      <Carousel />
      <Amenities />
      <Solutions />
      <Events/>
      <ContactUs />
    </div>
  )
}

export default page
