'use client'
import React, { useRef } from "react";
import NavigateButton from "@/ui-kit/NavigateButton"
import CircleBtn from "@/ui-kit/CircleBtn"
import BackgroundLogo from "../BackgroundLogo";
import { AboutAmenityList , getAmenityIcon } from "@/constants/aboutAmenity"

const Amenities = () => {
const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <BackgroundLogo className='py-16 bg-(--west-bg-secondary) text-(--west-bg)'>
        <div className="container flex flex-col gap-16">
            {/* above */}
        <div className="flex flex-col items-start space-y-4 md:space-y-12 max-w-[700px]">
          <CircleBtn text="AMENITIES" />
          <h1 className="text-5xl md:text-7xl leading-tight md:leading-[1.1]">
            Find your perfect fit & grow with us
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-14">
            {
                AboutAmenityList.map((item)=> (
                    <div key={item.id} className="space-y-4">
                        <img src={getAmenityIcon(item.iconName)} 
                        className="transition-transform duration-300 ease-out    hover:-translate-y-1 hover:scale-110"
                        alt="" />
                        <h1 className="text-lg sm:text-xl md:text-2xl
                            text-(--west-bg)
                            wrap-break-words
                            leading-snug
                            max-w-full">
                            {item.title}
                        </h1>
                      <h1 className="text-lg leading-relaxed text-(--west-bg)/80">
                {item.description}
                 </h1>
                </div>
                ))
            }
        </div>
        {/* video section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mt-16">
        
        <div className="relative w-full h-[500px] md:aspect-4/5 md:max-w-[600px] rounded-3xl  overflow-hidden bg-[#DEDACD]">
            <video
            ref={videoRef}
            src="/videos/about2-vid.mp4"
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            playsInline
            />
        </div>

        <div className="flex flex-col gap-6 max-w-[450px] w-fit">
            <h1 className=" text-4xl md:text-5xl lg:text-7xl text-(--west-bg)">
            Escape the ordinary and work the extraordinary
            </h1>

            <NavigateButton text="Explore our locations" href="/" />
        </div>
        </div>
        </div>
    </BackgroundLogo>
  )
}

export default Amenities
