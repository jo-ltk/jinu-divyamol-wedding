export type WeddingImage = { src: string; alt: string; role: "couple" };

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
    malayalam: "ഞാൻ എന്റെ പ്രിയനു സ്വന്തം. എന്നെ മാത്രമാണ് അവൻ ആഗ്രഹിക്കുന്നത്.",
    english: "I am my dear one’s, And his desire is for me.",
  },
  invitation: {
    lead: "With the blessing of God and our families, we request the honour of your presence",
    close: "as we begin our life together in marriage.",
  },
  story: {
    opening:
      "Every beautiful story has chapters that change everything. Ours took a decisive turn when our families came together.",
    visitTitle: "The day our families met",
    visitMalayalam: "രണ്ട് കുടുംബങ്ങൾ ഒന്നായ ദിവസം",
    visit:
      "Jinu and Divyamol had met before, but when Divyamol visited Jinu's home with both families present, it became the occasion where their relationship was officially fixed.",
    visitQuote: "That day was when two families became one.",
    official: "That was the day their relationship was officially fixed, marking the beginning of a beautiful new chapter.",
  },
  family: {
    bride: { father: "Baby Francis", mother: "Gracy Baby" },
    sister: "Navya Baby",
    groom: { father: "M X Albert", mother: "Dolly Albert" },
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

const couple = (src: string, alt: string): WeddingImage => ({ src, alt, role: "couple" });

export const images = {
  hero: [
    couple("/images/hero/01.jpg", "Jinu and Divyamol by the waterfall"),
    couple("/images/hero/02.jpg", "Jinu and Divyamol in the hills"),
    couple("/images/hero/03.jpg", "Jinu and Divyamol at the falls"),
  ],
  story: [
    couple("/images/story/01.jpg", "Jinu and Divyamol sharing a quiet moment together"),
    couple("/images/story/02.jpg", "Jinu and Divyamol smiling together"),
    couple("/images/story/03.jpg", "Jinu and Divyamol in an affectionate embrace"),
  ],
  registration: [
    couple("/images/registration/01.jpg", "Jinu and Divyamol exchanging garlands at the registration office"),
    couple("/images/registration/office.jpg", "Jinu and Divyamol at the registration office"),
    couple("/images/registration/together.jpg", "Jinu and Divyamol after registration"),
    couple("/images/registration/portrait.jpg", "Jinu and Divyamol on their registration day"),
    couple("/images/registration/walk.jpg", "Jinu and Divyamol walking after registration"),
  ],
  gallery: [
    couple("/images/gallery/hills.jpg", "Jinu and Divyamol in the hills"),
    couple("/images/gallery/steps.jpg", "Jinu and Divyamol on the stone steps"),
    couple("/images/gallery/portrait-02.jpg", "Jinu and Divyamol"),
    couple("/images/gallery/portrait-03.jpg", "Jinu and Divyamol"),
    couple("/images/gallery/portrait-04.jpg", "Jinu and Divyamol"),
  ],
};
