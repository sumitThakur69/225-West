import { eventList } from "@/constants/eventList";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const eventId = Number(id);
  const event = eventList.find((e) => e.id === eventId);

  if (!event) return notFound();

  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      {/* Image */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
        <img
          src={event.imgName}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Event Details */}
      <div className="mt-12 space-y-6">
        {/* Date & Location */}
        <p className="text-lg text-gray-600">{event.d_and_b}</p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal">
          {event.title}
        </h1>

        {/* Contact */}
        <p className="text-lg text-gray-600">{event.mail}</p>

        {/* Description */}
        <div className="mt-10 prose prose-lg max-w-none">
          <p className="text-lg text-(--west-bg-secondary) opacity-80 leading-relaxed">
            Full detailed information about <strong>{event.title}</strong> will go here.
            You can add event description, agenda, speakers, and other relevant details.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-12">
          <button className="btn-regular">
            REGISTER NOW
          </button>
          <button className="px-6 py-3 border-2 border-(--west-bg-secondary) rounded-full uppercase text-sm font-medium hover:bg-(--west-bg-secondary) hover:text-(--west-bg) transition-colors">
            ADD TO CALENDAR
          </button>
        </div>
      </div>
    </div>
  );
}

