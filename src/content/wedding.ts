export type WeddingImage = { src: string; alt: string; role: "placeholder" };

export const wedding = {
  couple: { groom: "Jinu Albert", bride: "Divyamol K B", display: "Jinu & Divyamol", monogram: "J & D" },
  wedding: {
    date: "September 2, 2026",
    day: "Wednesday",
    time: "11:15 AM",
    dateTime: "2026-09-02T11:15:00+05:30",
    venue: "Kingdom Hall of Jehovah's Witnesses",
    address: "GVWG+4QQ, Paingana, Kottayam - Kumily Rd, Paingana, Mundakayam, Kerala 686513",
    shortPlace: "Mundakayam, Kerala",
    directions: "https://maps.app.goo.gl/qVghbzwBUQQawfXN8?g_st=ic",
    embed: "https://maps.google.com/maps?q=Kingdom+Hall+of+Jehovah's+Witnesses+Paingana+Mundakayam&t=&z=15&ie=UTF8&output=embed",
  },
  reception: {
    date: "September 5, 2026",
    day: "Saturday",
    time: "6:00 PM",
    venue: "GREEN NEST KUMBALANGI",
    address: "V7RH+G2 Green Nest, Kallanchery Rd, North Kumbalangi, Kumbalangi, Kochi, Kerala 682007",
    shortPlace: "Kumbalangi, Kochi",
    directions: "https://maps.app.goo.gl/EWMLXwyjxhJoLmbj9",
    embed: "https://maps.google.com/maps?q=GREEN+NEST+KUMBALANGI+Kochi&t=&z=15&ie=UTF8&output=embed",
  },
  registration: {
    date: "August 19, 2026",
    day: "Wednesday",
    title: "Registration",
  },
  verse: {
    reference: "Song of Solomon 7:10",
    english: "I am my dear one’s, And his desire is for me.",
  },
  invitation: {
    lead: "With the blessing of God and our families, we request the honour of your presence",
    close: "as we begin our life together in marriage.",
  },
  story: {
    opening: "Every beautiful story has a beginning. Ours began with a simple visit that became a very special milestone.",
    visit: "When Divyamol first came to Jinu's home, it became a memorable moment in their journey.",
    visitQuote: "That day was more than just a visit.",
    official: "That was the day their relationship was officially fixed, marking the beginning of a beautiful new chapter.",
  },
  family: {
    bride: ["Mr. Baby Francis", "Mrs. Gracy Baby"],
    sister: "Navya Baby",
    groom: ["Dolly Albert", "M X Albert"],
  },
  timeline: [
    { date: "August 19, 2026", event: "Registration", note: "The official beginning of this chapter." },
    { date: "September 2, 2026", event: "The Wedding", note: "Kingdom Hall, Mundakayam · 11:15 AM" },
    { date: "September 5, 2026", event: "The Celebration", note: "Green Nest Kumbalangi · 6:00 PM" },
  ],
  travel: [
    {
      title: "By Air",
      accent: "COK",
      description:
        "Cochin International Airport (COK) is the closest international gateway. From there, Mundakayam is about a three-hour drive via the Kottayam–Kumily road. Kumbalangi is closer to Kochi, typically under an hour by taxi.",
      cta: "Find flights",
      href: "https://www.google.com/travel/flights?q=flights+to+COK",
    },
    {
      title: "By Rail",
      accent: "KTYM",
      description:
        "Kottayam is the most convenient station for the wedding in Mundakayam. For the reception in Kumbalangi, Ernakulam Junction (South) or Ernakulam Town are the primary rail hubs, with taxis available for the remaining drive.",
      cta: "View route",
      href: "https://maps.app.goo.gl/qVghbzwBUQQawfXN8?g_st=ic",
    },
    {
      title: "By Road",
      accent: "NH183",
      description:
        "The wedding venue sits on the Kottayam–Kumily Road in Paingana, Mundakayam. The reception is at Green Nest, Kallanchery Road, North Kumbalangi. Private cars, taxis, and KSRTC services connect both locations.",
      cta: "Get directions",
      href: "https://maps.app.goo.gl/EWMLXwyjxhJoLmbj9",
    },
  ],
} as const;

const image = (id: string, alt: string): WeddingImage => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`,
  alt: `Temporary placeholder: ${alt}`,
  role: "placeholder",
});

export const images = {
  hero: [
    image("photo-1519741497674-611481863552", "wedding table set in warm daylight"),
    image("photo-1511285560929-80b456fea0bc", "editorial wedding details"),
  ],
  story: [
    image("photo-1522673607200-164d1b6ce486", "couple walking outdoors"),
    image("photo-1519225421980-715cb0215aed", "wedding place setting"),
  ],
  weddingVenue: image("photo-1519167758481-83f550bb49b3", "light-filled event architecture"),
  reception: image("photo-1507525428034-b723cf961d3e", "waterside landscape"),
  saveDate: image("photo-1507504031003-b417219a0fde", "pale coastline"),
  gallery: [
    image("photo-1507504031003-b417219a0fde", "coastal horizon"),
    image("photo-1511285560929-80b456fea0bc", "wedding details"),
    image("photo-1464366400600-7168b8af9bc3", "floral table styling"),
    image("photo-1522673607200-164d1b6ce486", "couple walking"),
    image("photo-1519741497674-611481863552", "celebration table"),
    image("photo-1519225421980-715cb0215aed", "place setting"),
  ],
};
