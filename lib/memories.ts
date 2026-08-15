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
    caption: "That time we stayed up till 3am talking about absolutely nothing and everything.",
    date: "Summer 2019",
  },
  {
    id: "2",
    caption: "Our first road trip together — you made the world's worst playlist and I loved every second of it.",
    date: "2020",
  },
  {
    id: "3",
    caption: "The day you beat me at my own game and never let me forget it.",
  },
  {
    id: "4",
    caption: "Rainy afternoon, hot chocolate, and the movie we've now watched about twelve times.",
  },
  {
    id: "5",
    caption: "You showing up out of nowhere on the worst day of my year, just because I needed you.",
  },
  {
    id: "6",
    caption: "That ridiculous inside joke that still makes us laugh for no reason, years later.",
  },
  {
    id: "7",
    caption: "Baking a cake together that came out completely wrong and eating it anyway.",
  },
  {
    id: "8",
    caption: "The photo booth strip from that one summer — we still have it somewhere.",
  },
  {
    id: "9",
    caption: "Every single time you called just to say hi for no reason at all.",
  },
  {
    id: "10",
    caption: "The trip we planned on a whim and somehow made work perfectly.",
  },
  {
    id: "11",
    caption: "You, me, and way too much karaoke on a random Tuesday night.",
  },
  {
    id: "12",
    caption: "Happy birthday. Here's to a hundred more memories to fill this jar with.",
  },
];
