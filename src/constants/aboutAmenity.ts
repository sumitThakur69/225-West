export interface AmenityItem {
    id: number;
    title : string;
    description: string;
    iconName: string;
}

export const getAmenityIcon = (name:string):string => {
    return `/assets/abouticons/${name}.svg`;
}

export const AboutAmenityList: AmenityItem[] = [
      {
    id: 1,
    title: "Focus & Productivity",
    description: "Escape distractions and find your flow in our ergonomically designed workspaces. High-speed Wi-Fi and abundant natural light keep you connected and energized.",
    iconName: "target",
  },
  {
    id: 2,
    title: "Spark Innovation",
    description: "Connect with a vibrant community of like-minded individuals and teams. Collaborate, share ideas, and ignite new possibilities in our stimulating atmosphere.",
    iconName: "lightbulb",
  },
  {
    id: 3,
    title: "Supportive Community",
    description: "Gain valuable advice and mentorship from experienced entrepreneurs and find trusted collaborators to help your business flourish. Build lasting connections and friendships within our supportive network.",
    iconName: "help",
  },
  {
    id: 4,
    title: "Flexible Solution",
    description: "Choose the membership plan that perfectly suits your needs. We offer hot desks for agile working, dedicated desks for a personalized space, and private offices for growing teams. Scale up or down seamlessly as your business evolves.",
    iconName: "solution",
  },
  {
    id: 5,
    title: "Dedicated Team",
    description: "Our passionate team is committed to your success. We provide exceptional support, from IT assistance to event coordination, and create a welcoming environment where you feel valued and inspired.",
    iconName: "247",
  },
  {
    id: 6,
    title: "Beyond Work",
    description: "We understand the importance of well-being. Access on-site amenities like relaxation areas for mindfulness breaks, cafes for a caffeine boost, or fitness centers to stay energized (amenities may vary by location). Maintain a healthy work-life balance and cultivate your overall well-being.",
    iconName: "reading",
  },
];