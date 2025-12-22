export interface GalleryItem {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  height: number;
}


export const galleryItems: GalleryItem[] = [
  {
    title: 'Open Workspace',
    category: 'Workspaces',
    image: '/assets/images/gallery/open-workspace.png',
    height: 500,
    description: 'Our open workspace is designed to foster creativity and collaboration. Natural light floods through floor-to-ceiling windows, illuminating carefully curated furniture that balances comfort with productivity.',
    tags: ['Collaborative', 'Natural Light', 'Flexible Seating']
  },
  {
    title: 'Private Meeting',
    category: 'Meeting Rooms',
    image: '/assets/images/gallery/private-meeting.jpg',
    height: 380,
    description: 'Equipped with state-of-the-art technology and acoustic treatment, our meeting rooms provide the perfect setting for focused discussions and important presentations.',
    tags: ['Privacy', 'Technology', 'Professional']
  },
  {
    title: 'Coffee Area',
    category: 'Amenities',
    image: '/assets/images/gallery/coffee-area.jpg',
    height: 460,
    description: 'Fuel your day with artisanal coffee and healthy refreshments. Our barista-quality setup serves as a natural gathering point for the community.',
    tags: ['Refreshments', 'Community', 'Quality']
  },
  {
    title: 'Events',
    category: 'Social Spaces',
    image: '/assets/images/gallery/events.jpg',
    height: 500,
    description: 'A versatile venue for workshops, presentations, and community events. Modern AV equipment and flexible layouts accommodate gatherings of any size.',
    tags: ['Flexible', 'Events', 'Community']
  },
  {
    title: 'Rooftop Terrace',
    category: 'Outdoor',
    image: '/assets/images/gallery/rooftop-terrace.jpg',
    height: 360,
    description: 'Take your work outside or simply enjoy a breath of fresh air. Our rooftop terrace offers panoramic views and a welcome change of scenery.',
    tags: ['Outdoor', 'Views', 'Fresh Air']
  },
  {
    title: 'Reading Nook',
    category: 'Quiet Zones',
    image: '/assets/images/gallery/reading-nook.jpg',
    height: 440,
    description: 'A curated collection of books and comfortable seating creates an intellectual haven. Perfect for research, reading, or quiet contemplation.',
    tags: ['Quiet', 'Books', 'Inspiration']
  },
  {
    title: 'Welcome Desk',
    category: 'Reception',
    image: '/assets/images/gallery/welcome-desk.jpg',
    height: 340,
    description: 'Your journey begins here. Our welcoming reception team is always ready to assist with a warm smile and professional service.',
    tags: ['Welcome', 'Service', 'Professional']
  },
  {
    title: 'Pantry',
    category: 'Amenities',
    image: '/assets/images/gallery/pantry.jpg',
    height: 400,
    description: 'A fully-equipped kitchen space stocked with premium refreshments. Prepare meals, store snacks, or simply grab a quick bite.',
    tags: ['Kitchen', 'Refreshments', 'Convenience']
  },
  {
    title: 'Collaboration',
    category: 'Workspaces',
    image: '/assets/images/gallery/collaboration.jpg',
    height: 480,
    description: 'Where ideas come to life. Whiteboard walls and modular furniture adapt to your team\'s creative process.',
    tags: ['Teamwork', 'Creative', 'Flexible']
  },
  {
    title: 'View',
    category: 'Outdoor',
    image: '/assets/images/gallery/view.jpg',
    height: 360,
    description: 'Biophilic design brings nature indoors. Work surrounded by greenery that enhances wellbeing and air quality.',
    tags: ['Nature', 'Greenery', 'Wellness']
  },
  {
    title: 'Breakout Zone',
    category: 'Social Spaces',
    image: '/assets/images/gallery/breakout-zone.jpg',
    height: 420,
    description: 'Casual seating areas encourage spontaneous collaboration and community building. A space where networking happens naturally.',
    tags: ['Casual', 'Social', 'Networking']
  },
  {
    title: 'Creative Studio',
    category: 'Specialized',
    image: '/assets/images/gallery/creative-studio.jpg',
    height: 500,
    description: 'Purpose-built for creative work with high ceilings and abundant natural light. Ideal for design, photography, or any visual project.',
    tags: ['Creative', 'Studio', 'Inspiring']
  }
];
