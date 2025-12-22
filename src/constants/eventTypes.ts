export const EVENT_TYPES = [
  { label: "Networking", value: "networking" },
  { label: "Festival", value: "festival" },
  { label: "Stand-up Comedy", value: "standup" },
  { label: "Creative & Art", value: "creative" },
  { label: "Workshop & Seminar", value: "workshop" },
]

export const EVENT_MESSAGES: Record<string, string> = {
  networking: "I'm interested in attending your networking events. Please provide more information about upcoming networking opportunities.",
  festival: "I would like to know more about your festival events. Could you share details about upcoming festivals?",
  standup: "I'm interested in your stand-up comedy events. Please let me know about upcoming comedy shows.",
  creative: "I'm interested in creative & art events. Could you provide information about upcoming art exhibitions or creative workshops?",
  workshop: "I would like to attend your workshops and seminars. Please share details about upcoming educational events.",
}

export const SOLUTION_TYPES = [
  { label: "Hot Desks", value: "hot-desks" },
  { label: "Dedicated Desks", value: "dedicated-desks" },
  { label: "Private Offices", value: "private-offices" },
  { label: "Virtual Offices", value: "virtual-offices" },
  { label: "Day Passes", value: "day-passes" },
  { label: "Enterprise Solutions", value: "enterprise-solutions" },
]

export const SOLUTION_MESSAGES: Record<string, string> = {
  "hot-desks": "I'm interested in Hot Desks at Seed Hub. Please provide more information about pricing, availability, and how I can get started with flexible workspace access across your locations.",
  "dedicated-desks": "I would like to inquire about Dedicated Desks. Could you share details about having my own permanent workspace at your hub, including pricing and available locations?",
  "private-offices": "I'm interested in Private Offices for my team. Please provide information about office sizes, customization options, pricing, and availability.",
  "virtual-offices": "I'm interested in Virtual Office services. Could you provide details about business address services, mail handling, and professional presence options?",
  "day-passes": "I would like to know more about Day Passes. Please share information about daily access options, pricing, and how I can book a day pass.",
  "enterprise-solutions": "I'm interested in Enterprise Solutions for my organization. Please provide information about customized workspace solutions, pricing, and how we can discuss our specific requirements.",
}