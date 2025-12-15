export interface SolutionItem {
  id: number;
  imgName: string;
  title: string;
  price: string;
  descr: string;
  amenities: string[];
}

export const getImage = (name: string): string => {
  return `/assets/images/solutions/${name}`;
};

export const solutionsList: SolutionItem[] = [
  { 
    id: 1, 
    imgName: "Sol.png", 
    title: "Hot Desks", 
    price: "Starting at $320", 
    descr: "Roam free and network across all our vibrant Seed Hub location",
    amenities: [
      "Business address in Tambakboyo",
      "24/7 badge entry",
      "Reception and office management services",
      "Comfortable common and lounge areas with top-notch amenities",
      "Complimentary coffee, tea, and water",
      "Free meeting rooms, phone booths, and breakout zones",
      "Personal locker",
      "Regular cleaning and security",
      "Easy and free access to open spaces within the entire TSH network"
    ]
  },
  { 
    id: 2, 
    imgName: "Sol2.png", 
    title: "Dedicated Desks", 
    price: "Starting at $390", 
    descr: "Put down Roots with your own personality space in your fav hub",
    amenities: [
      "Business address in Tambakboyo",
      "24/7 badge entry",
      "Your own dedicated desk space",
      "Reception and office management services",
      "Comfortable common and lounge areas with top-notch amenities",
      "Complimentary coffee, tea, and water",
      "Free meeting rooms, phone booths, and breakout zones",
      "Personal locker and storage",
    ]
  },
  { 
    id: 3, 
    imgName: "Sol3.png", 
    title: "Private Offices", 
    price: "Starting at $580", 
    descr: "Put down Roots with your own personality space in your fav hub",
    amenities: [
      "Business address in Tambakboyo",
      "24/7 badge entry",
      "Fully private and customizable office space",
      "Reception and office management services",
      "Comfortable common and lounge areas with top-notch amenities",
      "Complimentary coffee, tea, and water",
      "Free meeting rooms, phone booths, and breakout zones",
      "Personal lockers for team members",
      "Regular cleaning and security",
    ]
  },
  { 
    id: 4, 
    imgName: "Sol4.png", 
    title: "Virtual Offices", 
    price: "Starting at $120", 
    descr: "Put down Roots with your own personality space in your fav hub",
    amenities: [
      "Business address in Tambakboyo",
      "Professional mail handling and forwarding",
      "Telephone answering services",
      "Access to meeting rooms (by booking)",
      "Reception services for your guests",
      "Day pass credits included monthly",
      "Professional business presence",
      "Company registration support",
      "Access to coworking spaces when needed"
    ]
  },
  { 
    id: 5, 
    imgName: "Sol5.png", 
    title: "Day Passes", 
    price: "Starting at $30", 
    descr: "Put down Roots with your own personality space in your fav hub",
    amenities: [
      "Full day access to coworking space",
      "Comfortable common and lounge areas with top-notch amenities",
      "Complimentary coffee, tea, and water",
      "High-speed WiFi access",
      "Access to phone booths and breakout zones",
      "Reception services",
      "Regular cleaning and security",
      "Flexible workspace options",
      "Networking opportunities with community members"
    ]
  },
  { 
    id: 6, 
    imgName: "Sol6.png", 
    title: "Enterprise Solutions", 
    price: "Tailor-made", 
    descr: "Put down Roots with your own personality space in your fav hub",
    amenities: [
      "Business address in Tambakboyo",
      "24/7 badge entry for your entire team",
      "Fully customized office space solutions",
      "Dedicated account management",
      "Reception and office management services",
      "Comfortable common and lounge areas with top-notch amenities",
      "Complimentary coffee, tea, and water",
      "Priority booking for meeting rooms and event spaces",
    ]
  },
];