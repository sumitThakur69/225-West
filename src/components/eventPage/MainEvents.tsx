"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition, useEffect } from "react";
import EventTypeFilter from "./EventTypeFilter";
import FeaturedEventCard from "./FeaturedCard";
import EventsSection from "@/ui-kit/events/EventsSection";
import { Event } from "@/types/event";
import EmptyEvents from "@/components/common/EmptyEvents";
import { useDebounce } from "@/hooks/useDebounce";

interface Props {
  initialFeaturedEvent: Event | null;
  initialEvents: Event[];
}

export default function MainEventsClient({ 
  initialFeaturedEvent,
  initialEvents
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  
  const selectedEventType = searchParams.get("eventType");
  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");
  
  // Debounce search value
  const debouncedSearch = useDebounce(searchValue, 500);

  // Update URL when debounced search changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (debouncedSearch) {
      params.set("q", debouncedSearch);
    } else {
      params.delete("q");
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  }, [debouncedSearch]);

  const handleFilterChange = (eventType: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (eventType) params.set("eventType", eventType);
    else params.delete("eventType");

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  const hasEvents = initialEvents.length > 0;
  const hasFeaturedEvent = initialFeaturedEvent !== null;
  const isSearching = searchValue !== debouncedSearch || isPending;

  return (
    <>
      <EventTypeFilter
        selectedType={selectedEventType}
        onFilterChange={handleFilterChange}
        onSearchChange={setSearchValue}
        searchValue={searchValue}
        isSearching={isSearching}
      />

      {/* Show featured event jab when no filter/search is applied */}
      {!selectedEventType && !debouncedSearch && hasFeaturedEvent && (
        <FeaturedEventCard event={initialFeaturedEvent} />
      )}

      {/* Show events or empty state */}
      {hasEvents ? (
        <EventsSection
          title=""
          events={initialEvents}
          background="transparent"
          className="mb-16"
        />
      ) : (
        <div className="container py-16">
          <EmptyEvents 
            message={
              debouncedSearch
                ? "No events match your search"
                : selectedEventType 
                ? `No ${selectedEventType} events found` 
                : "No upcoming events found"
            } 
          />
        </div>
      )}
    </>
  );
}