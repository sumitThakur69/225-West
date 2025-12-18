import { getUpcomingEvents , getFeaturedEvent , getPastEvents , getEvents } from "@/sanity/lib/getEvents" 
import MainEventsClient from "@/components/eventPage/MainEvents";
import { Event } from "@/types/event";
import EventsSection from "@/ui-kit/events/EventsSection";

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
  const [featuredEvent, events, pastEvents]: [
    Event | null,
    Event[],
    Event[]
  ] = search 
    ? await Promise.all([
        null, // No featured event during search
        getEvents(eventType, search), // Get ALL events
        getPastEvents(),
      ])
    : await Promise.all([
        getFeaturedEvent(eventType, search),
        getUpcomingEvents(eventType, search),
        getPastEvents(),
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
      <EventsSection
        title="Past Events"
        events={pastEvents}  
        background="var(--west-bg-2)"
        className="py-16"
      />
      </section>
    </div>
  )
}
