export interface EventItem {
  id: number;
  title: string;
  description: string;
  tag: string;
  date: string;
  location: string;
  image: string;
  gallery: string[];
}

export const events: EventItem[] = [
  {
    id: 1,
    title: "Stikkly first meet and greet",
    description:
      "Figma ipsum component variant main layer. Follower outline ellipse reesizing font align. Arrow style pencil move team undo group link select. Flatten content underline share list. Bold star strikethrough editor strikethrough background. Italic opacity arrange font create comment stroke export.",
    tag: "Upcoming Event",
    date: "March 27th, 2026",
    location: "Afua Sunderland Park, Accra",
    image: "/event-details-1.jpg",
    gallery: ["/event-details-1.jpg", "/event-details-2.jpg", "/event-details-3.jpg"]
  },
  {
    id: 2,
    title: "Stikkly workshop on design thinking",
    description:
      "Figma features interactive prototyping with components and variants. Utilize the boolean operations for creating complex shapes. Share prototypes for team feedback and iteration. Use smart selection to quickly align and distribute layers. Enhance presentations with dynamic overlays and transitions.",
    tag: "Upcoming Event",
    date: "April 15th, 2026",
    location: "Cultural Centre, Accra",
    image: "/event-details-1.jpg",
    gallery: ["/event-details-2.jpg", "/event-details-1.jpg", "/event-details-3.jpg"]
  },
  {
    id: 3,
    title: "Stikkly UX/UI design conference",
    description:
      "Figma community showcases collaborative design sessions, ideation, and brainstorming techniques. Engage in hands-on workshops focusing on user research and testing methodologies. Leverage plugins to streamline your workflow and enhance creativity. Participate in networking events to connect with industry leaders and peers.",
    tag: "Upcoming Event",
    date: "May 10th, 2026",
    location: "International Conference Centre, Accra",
    image: "/event-details-3.jpg",
    gallery: ["/event-details-3.jpg", "/event-details-2.jpg", "/event-details-1.jpg"]
  },
];
