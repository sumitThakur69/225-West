export interface EventItem {
  id: number;
  imgName: string;   
  title: string;
  mail: string;
  d_and_b: string;
}

export const eventList: EventItem[] = [
  {
    id: 1,
    imgName: "/assets/images/Events/Event.png",
    title: "Design Thinking Workshop",
    mail: "@225 West Cafe",
    d_and_b: "23 March 2024  |  18:30",
  },
  {
    id: 2,
    imgName: "/assets/images/Events/Event2.png",
    title: "Mindfulness & Meditation for Entrepreneurs",
    mail: "@225 West Cafe",
    d_and_b: "30 March 2024  |  18:30",
  },
  {
    id: 3,
    imgName: "/assets/images/Events/Event3.png",
    title: "Panel Discussion: The Future of Work",
    mail: "@225 West Cafe",
    d_and_b: "5 April 2024  |  18:30",
  },
];
