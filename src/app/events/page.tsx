import { getUpcomingEvents , getFeaturedEvent , getEvents } from "@/sanity/lib/getEvents" 
import MainEventsClient from "@/components/eventPage/MainEvents";
import { Event } from "@/types/event";
import PastEventsSection from "@/components/eventPage/PastEvents";

interface PageProps {
  searchParams: Promise<{
    eventType?: string;
    q?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const  eventType: string | null =  resolvedSearchParams.eventType ?? null;
  const search = resolvedSearchParams.q ?? null; 

 // If search is active, fetch all events; otherwise fetch upcoming only
  const [featuredEvent, events]: [
    Event | null,
    Event[]
  ] = search 
    ? await Promise.all([
        null, // No featured event during search
        getEvents(eventType, search), // Get ALL events
      ])
    : await Promise.all([
        getFeaturedEvent(eventType, search),
        getUpcomingEvents(eventType, search),
      ]);

  return (
    <div className="mt-8 md:mt-16">
      <div className="container">
        <h1 className="pt-16 text-5xl md:text-7xl xl:text-9xl max-w-fit mx-auto tracking-tight">
          Explore upcoming events and workshops.
        </h1>
      </div>

      <MainEventsClient
        initialFeaturedEvent={featuredEvent}
        initialEvents={events}
      />

      <section id="past-events">
        <PastEventsSection />
      </section>
    </div>
  )
}