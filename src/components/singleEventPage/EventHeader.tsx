import Image from "next/image";
import { Event } from "@/types/event";

interface EventDetailProps {
  event: Event;
}

const EventHeader: React.FC<EventDetailProps> = ({ event }) => {
  return (
    <div className="pt-16 bg-(--west-bg) ">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
          
          <div className="flex flex-col justify-start md:justify-end h-full gap-3 sm:gap-4 order-2 md:order-1">
            
            <div className="flex flex-wrap gap-2 sm:gap-3 text-(--west-bg-secondary)/60 text-sm sm:text-base lg:text-lg">
              <span>{event.date}</span>
              <span>|</span>
              <span>{event.time}</span>
              <span>|</span>
              <span className="break-all">{event.mail}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] wrap-break-words">
              {event.title}
            </h1>
          </div>

          <div className="w-full flex justify-start md:justify-end order-2">
            <div className="relative w-full md:max-w-lg aspect-square">
              <Image
                src={event.imgName}
                alt="event_images"
                width={700}
                height={600}
                className="rounded-2xl sm:rounded-3xl object-cover w-full h-full shadow-xl transition-all duration-700 hover:scale-105 sm:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;