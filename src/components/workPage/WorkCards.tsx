import React from 'react'
import Image from 'next/image';
import { SolutionItem, getImage } from '@/constants/solutionList'

interface SolutionDetailProps {
  solution: SolutionItem;
}

const WorkCards: React.FC<SolutionDetailProps> = ({ solution }) => {
  return (
    <div 
    className="py-8">
      <div className="max-w-8xl mx-auto">
        <div className="
          grid grid-cols-1 lg:grid-cols-2 gap-4 
          items-start ">
  
          <div className="w-full flex justify-start">
            <div className="relative rounded-3xl w-full h-[420px] md:h-[520px] lg:h-[580px] lg:max-w-[500px] overflow-hidden">
              <Image
                src={getImage(solution.imgName)}
                alt={solution.title}
                fill
                priority
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover shadow-4xl"
              />
            </div>
          </div>
          <div 
            className="space-y-4 flex flex-col text-left lg:items-start mt-6">
            {/* Title + Description */}
            <div className="max-w-[550px]">
              <h1 className="text-4xl md:text-5xl  font-light text-(--west-bg-secondary) mb-4 text-left">
                {solution.title}
              </h1>

              <p className="text-(--west-bg-secondary)/80 md:text-xl mb-6 text-left">
                {solution.descr}
              </p>
            </div>

            {/* Amenities List */}
            <ul className="space-y-2 max-w-[550px]">
              {solution.amenities.map((amenity, index) => (
                <li
                  key={index}
                  className="flex items-start text-(--west-bg-secondary)/80"
                >
                  <span className="inline-block w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 mr-3 shrink-0"></span>
                  <span className="text-[18px] leading-relaxed">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCards;
