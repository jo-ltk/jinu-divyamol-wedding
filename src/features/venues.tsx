"use client";

import { useState } from "react";
import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { wedding } from "@/content/wedding";

const venues = [
  {
    type: "Wedding",
    day: wedding.wedding.day,
    date: wedding.wedding.date,
    time: wedding.wedding.time,
    name: wedding.wedding.venue,
    address: wedding.wedding.address,
    mapUrl: wedding.wedding.directions,
    embed: wedding.wedding.embed,
  },
  {
    type: "Reception",
    day: wedding.reception.day,
    date: wedding.reception.date,
    time: wedding.reception.time,
    name: wedding.reception.venue,
    address: wedding.reception.address,
    mapUrl: wedding.reception.directions,
    embed: wedding.reception.embed,
  },
];

export function Venues() {
  const [active, setActive] = useState(0);
  const venue = venues[active];

  return (
    <section className="venues" id="venues">
      <header className="section-head" data-reveal>
        <p className="label">The locations</p>
        <HeadingReveal className="section-title">Venues</HeadingReveal>
        <Ornament />
      </header>

      <div className="venue-tabs" role="tablist">
        {venues.map((item, i) => (
          <button
            key={item.type}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={active === i ? "is-active" : ""}
            onClick={() => setActive(i)}
          >
            {item.type}
          </button>
        ))}
      </div>

      <article className="venue-card" data-reveal>
        <div className="venue-map">
          <iframe title={`${venue.name} map`} src={venue.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="venue-copy">
          <p className="label">{venue.type}</p>
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
      </article>
    </section>
  );
}
