import Image from "next/image";
import { Event } from "@/types/event";
import NavigateButton from "@/ui-kit/NavigateButton";

interface FeaturedEventCardProps {
  event: Event;
}

export default function FeaturedEventCard({ event }: FeaturedEventCardProps) {
  return (
    <div className="container py-8">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 group"
      >
        {/* Left */}
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
          {event.imageUrl && (
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-6">
          <div className="flex items-center gap-3 text-gray-500">
            <span>{event.date}</span>
            <span>|</span>
            <span>{event.time}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold group-hover:underline">
            {event.title}
          </h1>

          {event.overviewDescription && (
            <p className="text-gray-600 text-lg line-clamp-3">
              {event.overviewDescription}
            </p>
          )}
          <div className="flex items-center gap-2 text-gray-500">
            <span>{event.mail}</span>
          </div>
          </div>
           <NavigateButton text="VIEW EVENT DETAIL" href={`/events/${event.slug}`}/>
        </div>
      </div>
    </div>
  );
}
