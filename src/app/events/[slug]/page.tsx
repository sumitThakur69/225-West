import { getEvent } from "@/sanity/lib/getEvents";
import { client } from "@/sanity/lib/sanity.client";
import { relatedEventsQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import EventHeader from "@/components/eventPage/EventHeader";
import EventHero from "@/components/eventPage/EventHero";
import EventsSection from "@/ui-kit/events/EventsSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: PageProps) {

  const { slug } = await params;
  
  const event = await getEvent(slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = await client.fetch(relatedEventsQuery , {slug})
  
  return (<>
  <EventHeader event={event} />
  <EventHero event={event}/>
  <EventsSection title="Related Events"
  events={relatedEvents}
  background="var(--west-bg-2)"
  href="/events"
  />
  </>)
}



