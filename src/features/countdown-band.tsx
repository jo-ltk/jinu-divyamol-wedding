import { Countdown } from "@/components/countdown";
import { HeadingReveal } from "@/components/heading-reveal";

export function CountdownBand() {
  return (
    <section className="countdown-band">
      <div data-reveal>
        <p className="label">Until they say I do</p>
        <HeadingReveal className="section-title">Until that beautiful moment</HeadingReveal>
      </div>
      <Countdown />
    </section>
  );
}
