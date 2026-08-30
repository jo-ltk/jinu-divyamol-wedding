import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { wedding } from "@/content/wedding";

export function Travel() {
  return (
    <section className="travel" id="travel">
      <header className="section-head" data-reveal>
        <p className="label">Guest information</p>
        <HeadingReveal className="section-title">How to reach</HeadingReveal>
        <Ornament />
      </header>
      <div className="travel-grid">
        {wedding.travel.map((mode, i) => (
          <article key={mode.title} data-reveal>
            <span className="label">{mode.accent}</span>
            <h3>
              <em>0{i + 1}</em> {mode.title}
            </h3>
            <p>{mode.description}</p>
            <a className="text-link" href={mode.href} target="_blank" rel="noreferrer">
              {mode.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
