export type Memory = {
  id: string;
  caption: string;
  date?: string;
  /** Path under /public, e.g. "/memories/beach-trip.jpg". Leave undefined for a text-only note. */
  image?: string;
};

/**
 * Edit this list with real memories before sending the site to Kavya.
 * Drop photo files into /public/memories and reference them by path below.
 */
export const memories: Memory[] = [
  {
    id: "1",
    caption: "Standing under the Lincoln Park sign, arms around each other, way before either of us knew what we'd grow up to be — nobody ever stood a chance, me and you, forever.",
    image: "/memories/lincoln-park-sign.jpeg",
  },
  {
    id: "2",
    caption: "Dressed up, dramatic, and completely inseparable — you and your kissy face, me just happy to be next to you. You ran straight to me and kissed me that day — I hope you remember.",
    image: "/memories/festive-selfie.jpeg",
  },
  {
    id: "3",
    caption: "Our first sisters' time alone.",
    image: "/memories/silly-faces-outdoors.jpeg",
  },
  {
    id: "4",
    caption: "My biggest support, always showing harsh truth.",
    image: "/memories/graduation-day.jpeg",
  },
  {
    id: "5",
    caption: "Little sis, big sis, and mamma at the World Trade Center, about to become New Yorkers.",
    image: "/memories/oculus-with-mom.jpeg",
  },
  {
    id: "6",
    caption: "Little sisters on a boat with the skyline behind us, and grown-up us in almost the same pose years later — our own 8 year challenge.",
    image: "/memories/boat-trip-then-and-now.jpeg",
  },
  {
    id: "7",
    caption: "Upside-down selfies on the floor for absolutely no reason — pure chaos, pure us. You became my safe space, and reminded me you're always there.",
    image: "/memories/upside-down-selfie.jpeg",
  },
  {
    id: "8",
    caption: "Looking cute anyway.",
    image: "/memories/donut-date.jpeg",
  },
  {
    id: "9",
    caption: "Twirling in your new kurta just to show me before we left the house.",
    image: "/memories/new-kurta-twirl.jpeg",
  },
  {
    id: "10",
    caption: "Tiny you, flower garlands and all — already stealing the show.",
    image: "/memories/baby-flower-garland.jpg",
  },
  {
    id: "11",
    caption: "Matching dresses, matching giggles — trouble in stereo.",
    image: "/memories/matching-dresses-sisters.jpg",
  },
  {
    id: "12",
    caption: "You, a mirror, and main character energy since day one.",
    image: "/memories/mirror-moment.jpg",
  },
];
