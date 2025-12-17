import WorkCards from '@/components/workPage/WorkCards'
import { solutionsList } from '@/constants/solutionList'
import ContactUs from '@/components/ContactUs'
import React from 'react'
import WorkAmenities from '@/components/workPage/WorkAmenities'

const page = () => {
  return (
    <>
      <div className="container py-8">

        <div className="mt-16 md:relative min-h-[260px] md:min-h-[300px] lg:min-h-[380px]">

          <h1
            className="text-5xl md:text-6xl lg:text-8xl max-w-[900px] tracking-tight
              md:absolute md:top-0 md:left-0">
            Flexible workspace solutions to fuel your growth.
          </h1>
          <h2
            className=" mt-6 max-w-[580px] text-gray-700  md:absolute md:bottom-6 md:left-0 lg:bottom-0 lg:right-0 lg:left-auto">
            The Seed Hub isn't just a workspace, it's a tailored solution for your
            business. Explore our flexible options, designed to empower your
            productivity and fuel your ambitions.
          </h2>

        </div>

        <div>
          {solutionsList.map((solution) => (
            <WorkCards key={solution.id} solution={solution} />
          ))}
        </div>

      </div>
      <WorkAmenities />
      <ContactUs />
    </>
  )
}

export default page
