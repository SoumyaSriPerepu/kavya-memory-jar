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
    caption: "Cap, gown, peace signs. So proud of you that day I could've burst.",
    image: "/memories/graduation-day.jpeg",
  },
  {
    id: "5",
    caption: "All of us wandering around the Oculus, pretending we knew where we were going — little sis, big sis, and mamma at the World Trade Center, about to become New Yorkers.",
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
    caption: "Peace signs and a chocolate donut we definitely didn't need but got anyway — looking cute anyway.",
    image: "/memories/donut-date.jpeg",
  },
  {
    id: "9",
    caption: "Twirling in your new kurta just to show me before we left the house.",
    image: "/memories/new-kurta-twirl.jpeg",
  },
];
