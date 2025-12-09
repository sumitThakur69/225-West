import React from "react";
import CircleBtn from "@/ui-kit/CircleBtn";
import { AmenityList , getIcon } from "../constants/AmenityList";

const Amenities = () => {
  return (
    <div className="container py-8 ">
      <div className="flex justify-between md:items-end flex-col md:flex-row gap-6 md:gap-0">
        
        <div className="flex flex-col items-start space-y-4 md:space-y-12 max-w-[500px]">
          <CircleBtn text="AMENITIES" />
          <h1 className="text-5xl md:text-7xl leading-tight md:leading-[1.1]">
            Resources to nurture your workday
          </h1>
        </div>

        <h1 className="max-w-[550px] text-lg leading-relaxed">
          We understand that your workspace needs to be more than just a desk.
          That's why we offer a range of amenities to help you work productively,
          stay focused, and connect with your community. Whether you need a quiet
          space to brainstorm, a comfortable area to unwind, or state-of-the-art
          tools to get the job done, we have what you need to thrive.
        </h1>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 mt-20">
        {AmenityList.map((item) => {
          const iconSrc = getIcon(item.iconName);
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-start space-y-8 cursor-pointer"
            >
              <div className="w-38 h-38 border rounded-full border-(--west-bg-secondary) flex items-center justify-center text-(--west-bg-secondary) hover:scale-105 duration-300">
                {iconSrc && (
                  <img 
                    src={iconSrc} 
                    alt={item.title} 
                    className="w-24 h-24"
                    loading="lazy"
                  />
                )}
              </div>
              <p className="text-lg font-normal text-center max-w-[200px]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;