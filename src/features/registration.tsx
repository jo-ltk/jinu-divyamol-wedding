import Image from "next/image";
import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { images, wedding } from "@/content/wedding";

const registration = wedding.timeline[0];

export function Registration() {
  return (
    <section className="registration" id="registration">
      <header className="section-head" data-reveal>
        <p className="label">{wedding.registration.date}</p>
        <HeadingReveal className="section-title">{registration.event}</HeadingReveal>
        <Ornament />
        <p className="lede">{registration.note}</p>
      </header>

      <div className="registration-photos" data-reveal>
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
