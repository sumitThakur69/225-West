export interface AmenityItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export const getAmenityIcon = (name: string): string => {
  return `/assets/workspaceicons/${name}.svg`;
};

export const WorkAmenityList: AmenityItem[] = [
  {
    id: 1,
    title: "Access to All Locations",
    description: "Seamless entry to all The Seed Hub locations.",
    iconName: "icon1",
  },
  {
    id: 2,
    title: "Business Address",
    description: "Prestigious business address in Tambakboyo.",
    iconName: "icon2",
  },
  {
    id: 3,
    title: "24/7 Badge Access",
    description: "Seamless entry to all The Seed Hub locations.",
    iconName: "icon3",
  },
  {
    id: 4,
    title: "Reception & Office Management",
    description: "Professional support services.",
    iconName: "icon4",
  },
  {
    id: 5,
    title: "Common & Lounge Areas",
    description: "Relax and collaborate in top-notch spaces.",
    iconName: "icon5",
  },
  {
    id: 6,
    title: "Beverages",
    description: "Unlimited coffee, tea, and water.",
    iconName: "icon6",
  },
  {
    id: 7,
    title: "Meeting Rooms & Phone Booths",
    description: "Free access to meeting rooms and phone booths.",
    iconName: "icon7",
  },
  {
    id: 8,
    title: "Personal Locker",
    description: "Secure your belongings.",
    iconName: "icon8",
  },
  {
    id: 9,
    title: "Cleaning & Security",
    description: "Clean, safe, and secure environment.",
    iconName: "icon9",
  },
  {
    id: 10,
    title: "Open Space Access",
    description: "Free access to open spaces across the TSH network.",
    iconName: "icon10",
  },
  {
    id: 11,
    title: "High-Speed Internet",
    description: "Reliable and fast internet connectivity.",
    iconName: "icon11",
  },
  {
    id: 12,
    title: "Event Invitations",
    description: "Access to exclusive networking events and activities.",
    iconName: "icon12",
  },
];
