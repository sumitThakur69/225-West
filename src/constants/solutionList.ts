export interface SolutionItem {
  id: number;
  imgName: string;
  title: string;
  price: string;
  descr: string;
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
    descr: "Roam free and network across all our vibrant Seed Hub location" 
  },
  { 
    id: 2, 
    imgName: "Sol2.png", 
    title: "Dedicated Desks", 
    price: "Starting at $390", 
    descr: "Put down Roots with your own personality space in your fav hub" 
  },
  { 
    id: 3, 
    imgName: "Sol3.png", 
    title: "Private Offices", 
    price: "Starting at $580", 
    descr: "Put down Roots with your own personality space in your fav hub" 
  },
  { 
    id: 4, 
    imgName: "Sol4.png", 
    title: "Virtual Offices", 
    price: "Starting at $120", 
    descr: "Put down Roots with your own personality space in your fav hub" 
  },
  { 
    id: 5, 
    imgName: "Sol5.png", 
    title: "Day Passes", 
    price: "Starting at $30", 
    descr: "Put down Roots with your own personality space in your fav hub" 
  },
  { 
    id: 6, 
    imgName: "Sol6.png", 
    title: "Enterprise Solutions", 
    price: "Tailor-made", 
    descr: "Put down Roots with your own personality space in your fav hub" 
  },
];