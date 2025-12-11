import { getEvent } from "@/sanity/lib/getEvents";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: PageProps) {
  // MUST await params first in Next.js 15+
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    console.log("Event not found for slug:", slug);
    return notFound();
  }

  return (
    <div className="min-h-screen bg-(--west-bg)">
      {/* Back Button */}
      <div className="container pt-8">
        <Link 
          href="/events" 
          className="inline-flex items-center gap-2 text-(--west-bg-secondary) hover:opacity-70 transition-opacity"
        >
          <ChevronLeft size={20} />
          <span>Back to Events</span>
        </Link>
      </div>

      <div className="container max-w-4xl mx-auto py-16 px-4">
        {/* Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
          <Image
            src={event.imgName}
            alt={event.title}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
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
          <div className="flex flex-wrap gap-4 mt-12">
            <button className="btn-regular">
              REGISTER NOW
            </button>
            <button className="px-6 py-3 border-2 border-(--west-bg-secondary) rounded-full uppercase text-sm font-medium hover:bg-(--west-bg-secondary) hover:text-(--west-bg) transition-colors">
              ADD TO CALENDAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

