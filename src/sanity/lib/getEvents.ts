import { client } from "./sanity.client";
import { allEventsQuery , singleEventQuery , pastEventsQuery} from "./queries";

export async function getEvents() {
  return await client.fetch(allEventsQuery);
}

export async function getEvent(slug: string) {
  return await client.fetch(singleEventQuery, { slug });
}

export async function getPastEvents() {
  return client.fetch(pastEventsQuery);
}



