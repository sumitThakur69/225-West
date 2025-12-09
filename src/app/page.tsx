import Amenities from '@/components/Amenities'
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
    </div>
  )
}

export default page
