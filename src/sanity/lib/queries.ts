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
    "slug": slug.current,
    "imgName": image.asset->url
  }
`;
