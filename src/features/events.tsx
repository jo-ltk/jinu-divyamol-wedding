import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { wedding } from "@/content/wedding";

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
    </section>
  );
}
