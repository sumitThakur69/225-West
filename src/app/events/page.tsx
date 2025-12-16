import { getPastEvents } from "@/sanity/lib/getEvents" 
import EventsSection from "@/ui-kit/events/EventsSection"

const page = async () => {
  const pastEvents = await getPastEvents();
  return (
    <div className="mt-16">
      <div className="container">
        <h1 className="py-16 text-5xl md:text-6xl lg:text-8xl max-w-[1000px] tracking-tight">
          Explore past events and workshops
        </h1>
      </div>

      <EventsSection
        title="Past Events"
        events={pastEvents}
        background="var(--west-bg-2)"
        href="/event"
      />
    </div>
  )
}

export default page
