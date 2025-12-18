import { client } from "./sanity.client";
import { allEventsQuery , singleEventQuery , pastEventsQuery
   , featuredEventQuery , upcomingEventsQuery} from "./queries";

export async function getEvents(
  eventType: string | null = null,
  search: string | null = null
) {
  return await client.fetch(allEventsQuery, { eventType, search });
}

export async function getEvent(slug: string) {
  return await client.fetch(singleEventQuery, { slug });
}

export async function getPastEvents() {
  return client.fetch(pastEventsQuery);
}

export async function getFeaturedEvent(eventType: string | null = null , search: string | null) {
  return client.fetch(featuredEventQuery, { eventType , search });
}

export async function getUpcomingEvents(
  eventType: string | null = null, 
  search: string | null = null,
  end: number = 7
) {
  return client.fetch(upcomingEventsQuery, { eventType, search, end });
}


