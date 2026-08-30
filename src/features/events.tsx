"use client";

import { useState } from "react";
import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { wedding } from "@/content/wedding";

type VenueDetails = {
  name: string;
  address: string;
  day: string;
  date: string;
  time: string;
  mapUrl: string;
  embed: string;
};

type ScheduleEvent = {
  tab: string;
  date: string;
  event: string;
  note: string;
  venue: VenueDetails;
};

const upcomingEvents: ScheduleEvent[] = [
  {
    tab: "Wedding",
    date: wedding.timeline[1].date,
    event: wedding.timeline[1].event,
    note: wedding.timeline[1].note,
    venue: {
      name: wedding.wedding.venue,
      address: wedding.wedding.address,
      day: wedding.wedding.day,
      date: wedding.wedding.date,
      time: wedding.wedding.time,
      mapUrl: wedding.wedding.directions,
      embed: wedding.wedding.embed,
    },
  },
  {
    tab: "Celebration",
    date: wedding.timeline[2].date,
    event: wedding.timeline[2].event,
    note: wedding.timeline[2].note,
    venue: {
      name: wedding.reception.venue,
      address: wedding.reception.address,
      day: wedding.reception.day,
      date: wedding.reception.date,
      time: wedding.reception.time,
      mapUrl: wedding.reception.directions,
      embed: wedding.reception.embed,
    },
  },
];

function EventVenue({ venue }: { venue: VenueDetails }) {
  return (
    <div className="event-venue">
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
  const [active, setActive] = useState(0);
  const item = upcomingEvents[active];

  return (
    <section className="events" id="wedding">
      <header className="section-head" data-reveal>
        <p className="label">Days to remember</p>
        <HeadingReveal className="section-title">The Schedule</HeadingReveal>
        <Ornament />
        <p className="lede">Dates, times, and venues for the wedding and celebration.</p>
      </header>

      <div className="event-tabs" role="tablist" aria-label="Upcoming events" data-reveal>
        {upcomingEvents.map((entry, i) => (
          <button
            key={entry.tab}
            type="button"
            role="tab"
            id={`event-tab-${i}`}
            aria-controls={`event-panel-${i}`}
            aria-selected={active === i}
            className={active === i ? "is-active" : ""}
            onClick={() => setActive(i)}
          >
            {entry.tab}
          </button>
        ))}
      </div>

      <article
        className="event-panel"
        role="tabpanel"
        id={`event-panel-${active}`}
        aria-labelledby={`event-tab-${active}`}
        data-reveal
      >
        <p className="label">0{active + 1}</p>
        <time>{item.date}</time>
        <h3>{item.event}</h3>
        <p className="event-note">{item.note}</p>
        <EventVenue venue={item.venue} />
      </article>

      <div className="event-travel" data-reveal>
        <header className="event-travel-head">
          <p className="label">Guest information</p>
          <h3>How to reach</h3>
        </header>
        <div className="travel-rail" aria-label="Travel options">
          {wedding.travel.map((mode, i) => (
            <article key={mode.title} className="travel-card">
              <span className="label">{mode.accent}</span>
              <h4>
                <em>0{i + 1}</em> {mode.title}
              </h4>
              <p>{mode.description}</p>
              <a className="text-link" href={mode.href} target="_blank" rel="noreferrer">
                {mode.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="swipe-hint dark">Swipe for travel options</p>
      </div>
    </section>
  );
}
