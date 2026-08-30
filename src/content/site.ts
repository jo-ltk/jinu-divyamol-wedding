import { wedding } from "@/content/wedding";

export const site = {
  url: "https://jinu-divyamol-wedding.vercel.app",
  name: wedding.couple.display,
  title: `${wedding.couple.display} — Wedding Invitation`,
  description: `Wedding of ${wedding.couple.groom} & ${wedding.couple.bride}. ${wedding.wedding.day}, ${wedding.wedding.date} at ${wedding.wedding.venue}, ${wedding.wedding.shortPlace} · ${wedding.wedding.time}. Celebration ${wedding.reception.day}, ${wedding.reception.date} at ${wedding.reception.venue}, ${wedding.reception.shortPlace} · ${wedding.reception.time}. View schedule, venues, and directions.`,
  shortDescription: `Wedding ${wedding.wedding.date} · ${wedding.wedding.shortPlace} · Celebration ${wedding.reception.date} · ${wedding.reception.shortPlace}`,
  keywords: [
    "Jinu Albert",
    "Divyamol K B",
    "wedding invitation",
    wedding.wedding.shortPlace,
    wedding.reception.shortPlace,
    "Kerala wedding",
  ],
} as const;
