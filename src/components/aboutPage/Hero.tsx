'use client'

import { useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlay , FaPause } from "react-icons/fa";
import { smoothScroll } from "@/utlis/smoothScroll";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="container pt-8">
      <div className="space-y-6">
        <div className="flex max-md:flex-col justify-between max-md:space-y-6">
          <h1 className="text-(--west-bg-secondary)/80 max-w-[500px]">
            From a spark of inspiration to a network of vibrant hubs, explore how The Seed Hub's story can inspire yours.
          </h1>

          <button 
          onClick={()=>smoothScroll("stories",1000,30)}
          className="flex md:justify-center items-end text-md cursor-pointer">
            EXPLORE
            <MdKeyboardArrowDown className="w-5 h-5 text-(--west-bg-secondary) animate-bounce" />
          </button>
        </div>

        <div className="relative pt-4 h-[70vh] md:h-[85vh] rounded-3xl overflow-hidden">
          <video
            ref={videoRef}
            src="/videos/about-vid.mp4"
            poster="/assets/posters/poster.png"
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-3xl"
          />

          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute inset-0 flex items-end justify-end mr-8 mb-8"
          >
          <div className="
            flex items-center justify-center rounded-full border-2 border-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            {isPlaying ? (
                <FaPause className="text-white text-lg sm:text-xl md:text-2xl" />
              ) : (
                <FaPlay className="text-white text-lg sm:text-xl md:text-2xl ml-1" />
              )}
          </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
