// Type for Amenity items
export interface AmenityItem {
  id: number;
  title: string;
  iconName: string;
  color: string;
}

// Function to get icon path from public folder
export const getIcon = (name: string): string => {
  return `/assets/icons/${name}.svg`;
};

export const AmenityList: AmenityItem[] = [
  { id: 1, title: "24/7 Access", iconName: "247", color: "text-[var(--west-bg-secondary)]" },
  { id: 2, title: "Wi-Fi", iconName: "wi-fi", color: "text-[var(--west-bg-secondary)]" },
  { id: 3, title: "Ergonomic Seating", iconName: "ergonomic", color: "text-[var(--west-bg-secondary)]" },
  { id: 4, title: "Meeting Rooms", iconName: "meeting", color: "text-[var(--west-bg-secondary)]" },
  { id: 5, title: "Coffee & Tea", iconName: "coffee", color: "text-[var(--west-bg-secondary)]" },
  { id: 6, title: "Work Space", iconName: "space", color: "text-[var(--west-bg-secondary)]" },
  { id: 7, title: "Presentation Tools", iconName: "chart", color: "text-[var(--west-bg-secondary)]" },
  { id: 8, title: "Print & Scan", iconName: "print", color: "text-[var(--west-bg-secondary)]" },
  { id: 9, title: "Pet Friendly", iconName: "pet", color: "text-[var(--west-bg-secondary)]" },
  { id: 10, title: "Comfort Sofa", iconName: "sofa", color: "text-[var(--west-bg-secondary)]" },
  { id: 11, title: "Secure Access", iconName: "lock", color: "text-[var(--west-bg-secondary)]" },
  { id: 12, title: "Event Desk", iconName: "event", color: "text-[var(--west-bg-secondary)]" },
];