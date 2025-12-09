import Amenities from '@/components/Amenities'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import OurStories from '@/components/OurStories'
import Solutions from '@/components/Solution'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurStories />
      <Amenities />
      <Solutions />
      <Footer />
    </div>
  )
}

export default page
