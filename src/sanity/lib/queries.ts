export const allEventsQuery = `
  *[_type == "event"
    && ($eventType == null || eventType == $eventType)
    && ($search == null || lower(title) match lower($search) + "*")
  ] | order(_createdAt desc) {
    _id,
    title,
    mail,
    date,
    time,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;


export const singleEventQuery = `
  *[_type == "event" && slug.current == $slug][0]{
    _id,
    title,
    mail,
    date,
    time,
    overviewTitle,
    overviewDescription,
    whatToExpect,
    whoShouldAttend,
    additionalDetails,
    rsvp,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;

export const relatedEventsQuery = `
  *[_type == "event" && slug.current != $slug][0...3]{
    _id,
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    date,
    time,
    mail
  }
`;

// FIRST upcoming event 
export const featuredEventQuery = `
  *[_type == "event" 
    && date >= now()
    && ($eventType == null || eventType == $eventType)
    && ($search == null || title match $search + "*")
  ] 
  | order(date asc)[0] {
    _id,
    title,
    mail,
    date,
    time,
    eventType,
    overviewTitle,
    overviewDescription,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;

// remaining upcoming events (skip the first one)
export const upcomingEventsQuery = `
  *[_type == "event" 
    && date >= now()
    && ($eventType == null || eventType == $eventType)
    && ($search == null || title match $search + "*")
  ] 
  | order(date asc)[1...$end] {
    _id,
    title,
    mail,
    date,
    time,
    eventType,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;

export const pastEventsQuery = `
  *[_type == "event" && date < now()]
  | order(date desc)[0...6] {
    _id,
    title,
    date,
    time,
    mail,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;

