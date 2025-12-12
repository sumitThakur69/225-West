export interface Event {
  _id: string;
  title: string;
  mail: string;
  date: string;
  time: string;
  slug: string;
  imgName: string;

  overviewTitle: string;
  overviewDescription: string;
  whatToExpect: string[];
  whoShouldAttend: string;
  additionalDetails: string;
  rsvp: string;
}
