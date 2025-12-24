"use client";

import { useState , useEffect } from "react";
import EventsSection from "@/ui-kit/events/EventsSection";
import { Event } from "@/types/event";
import { getPastEvents } from "@/sanity/lib/getEvents";

export default function PastEventsSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [limit, setLimit] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Load initial events
 useEffect(() => {
    loadEvents(6);
  }, []);

  async function loadEvents(newLimit: number) {
    setIsLoading(true);
    try {
      const data = await getPastEvents(newLimit);
      setEvents(data);
      setHasMore(data.length === newLimit);
    } catch (error) {
      console.error("Error loading past events:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleLoadMore = () => {
    const newLimit = limit + 6;
    setLimit(newLimit);
    loadEvents(newLimit);
  };

  return (
    <EventsSection
      title="Past Events"
      events={events}  
      background="var(--west-bg-2)"
      className="py-16"
      showLoadMore={hasMore}
      onLoadMore={handleLoadMore}
      isLoading={isLoading}
    />
  );
}