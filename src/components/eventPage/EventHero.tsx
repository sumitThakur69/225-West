import React from "react";
import { Event } from "@/types/event";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import BookButton from "@/ui-kit/bookButton"; 

interface EventDetailProps {
  event: Event;
}

interface SocialIcon {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}

const EventHero: React.FC<EventDetailProps> = ({ event }) => {
  const shareLinks : SocialIcon[] = [
      { icon: FaFacebook, link: "https://facebook.com/" },
      { icon: FaTwitter, link: "https://twitter.com/" },
      { icon: FaInstagram, link: "https://instagram.com/" },
    ];


  return (
    <div className="bg-[--west-bg] py-12">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="w-full h-px bg-[#c3b6a7] mb-8"></div>

        {/* Header*/}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 md:mb-8 mb-2">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-(--west-bg-secondary)  max-w-3xl">
            {event.overviewTitle}
          </h1>

          {/* Share */}
          <div className="flex flex-col items-start justify-between gap-3 sm:gap-4 max-md:hidden">
            <div className="text-sm sm:text-base text-(--west-bg-secondary) font-light">Share on</div>
                <div className="flex flex-row space-x-4">
                    {shareLinks.map((item:SocialIcon , i:number)=> (
                        <a key={i} href="{item.link}" target="_blank" rel="noopener noreferrer">
                            <div className="icon-circle icon-circle-dark">
                                <item.icon className="text-2xl" />
                            </div>
                        </a>
                    ))}
                </div>
          </div>
        </div>

        {/* Overview Description */}
        <div className="mb-6 md:mb-12">
          <p className="text-(--west-bg-secondary)/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl font-light">
            {event.overviewDescription}
          </p>
        </div>

        {/* What to Expect Section */}
        {event.whatToExpect && event.whatToExpect.length > 0 && (
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#2C2416] md:mb-4 mb-2">
              What to Expect
            </h2>
            <ul className="space-y-1">
              {event.whatToExpect.map((item:string, index:number) => (
                <li key={index} className="flex items-center gap-3">
                <span className="text-(--west-bg-secondary) text-lg leading-none">•</span>
                <span className="text-(--west-bg-secondary)/80 text-sm sm:text-base lg:text-lg font-light flex-1">
                    {item}
                </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Who Should Attend */}
        {event.whoShouldAttend && (
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#2C2416] mb-2">
              Who Should Attend
            </h2>
            <p className="text-(--west-bg-secondary)/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl font-light">
              {event.whoShouldAttend}
            </p>
          </div>
        )}

        {/* Additional Details Section */}
        {event.additionalDetails && (
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#2C2416] mb-2">
              Additional Details
            </h2>
            <p className="text-(--west-bg-secondary)/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl font-light">
              {event.additionalDetails}
            </p>
          </div>
        )}

        {/* RSVP */}
        {event.rsvp && (
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#2C2416] mb-2">
              RSVP
            </h2>
            <p className="text-(--west-bg-secondary)/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl font-light">
              {event.rsvp}
            </p>
              <BookButton className="flex w-full md:w-auto md:inline-flex py-2 mt-16" text="Register now" href="/book-tour" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventHero;