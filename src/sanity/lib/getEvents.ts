import { client } from "./sanity.client";
import { allEventsQuery , singleEventQuery } from "./queries";

export async function getEvents() {
  return await client.fetch(allEventsQuery);
}

export async function getEvent(slug: string) {
  return await client.fetch(singleEventQuery, { slug });
}



