export const allEventsQuery = `
  *[_type == "event"] | order(_createdAt desc) {
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
    "imgName": image.asset->url
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

