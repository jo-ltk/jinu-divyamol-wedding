import Image from "next/image";
import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { images, wedding } from "@/content/wedding";

type VenueDetails = {
  name: string;
  address: string;
  day: string;
  date: string;
  time: string;
  mapUrl: string;
  embed: string;
};

const venuesByEvent: Record<string, VenueDetails> = {
  "The Wedding": {
    name: wedding.wedding.venue,
    address: wedding.wedding.address,
    day: wedding.wedding.day,
    date: wedding.wedding.date,
    time: wedding.wedding.time,
    mapUrl: wedding.wedding.directions,
    embed: wedding.wedding.embed,
  },
  "The Celebration": {
    name: wedding.reception.venue,
    address: wedding.reception.address,
    day: wedding.reception.day,
    date: wedding.reception.date,
    time: wedding.reception.time,
    mapUrl: wedding.reception.directions,
    embed: wedding.reception.embed,
  },
};

function EventVenue({ venue }: { venue: VenueDetails }) {
  return (
    <div className="event-venue" data-reveal>
      <div className="event-venue-map">
        <iframe title={`${venue.name} map`} src={venue.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="event-venue-copy">
        <p className="label">Venue</p>
        <h3>{venue.name}</h3>
        <p>
          {venue.day} · {venue.date}
          <br />
          {venue.time}
        </p>
        <p>{venue.address}</p>
        <a className="button" href={venue.mapUrl} target="_blank" rel="noreferrer">
          Get directions
        </a>
      </div>
    </div>
  );
}

export function Events() {
  return (
    <section className="events" id="wedding">
      <header className="section-head" data-reveal>
        <p className="label">Days to remember</p>
        <HeadingReveal className="section-title">The Schedule</HeadingReveal>
        <Ornament />
        <p className="lede">Dates, times, and venues for each day.</p>
      </header>
      <ol>
        {wedding.timeline.map((item, i) => {
          const venue = venuesByEvent[item.event];

          return (
            <li key={item.event} data-reveal>
              <span>0{i + 1}</span>
              <div className="event-details">
                <time>{item.date}</time>
                <strong>{item.event}</strong>
                <p>{item.note}</p>
                {venue ? <EventVenue venue={venue} /> : null}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="event-photos" data-reveal>
        <p className="label">August 19, 2026 · Registration</p>
        <div className="event-rail">
          {images.registration.map((photo) => (
            <figure key={photo.src}>
              <Image src={photo.src} alt={photo.alt} fill sizes="82vw" />
            </figure>
          ))}
        </div>
        <p className="swipe-hint dark">Swipe to see the office and the day</p>
      </div>
    </section>
  );
}
