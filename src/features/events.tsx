import Image from "next/image";
import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { images, wedding } from "@/content/wedding";

export function Events() {
  return (
    <section className="events" id="wedding">
      <header className="section-head" data-reveal>
        <p className="label">Days to remember</p>
        <HeadingReveal className="section-title">The Schedule</HeadingReveal>
        <Ornament />
      </header>
      <ol>
        {wedding.timeline.map((item, i) => (
          <li key={item.event} data-reveal>
            <span>0{i + 1}</span>
            <div>
              <time>{item.date}</time>
              <strong>{item.event}</strong>
              <p>{item.note}</p>
            </div>
          </li>
        ))}
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
