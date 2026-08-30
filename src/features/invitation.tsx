import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { wedding } from "@/content/wedding";

export function Invitation() {
  return (
    <section className="invite" id="invitation">
      <div className="invite-frame" data-reveal>
        <p className="label">The invitation</p>
        <HeadingReveal as="p" className="invite-lead">
          {wedding.invitation.lead}
        </HeadingReveal>
        <HeadingReveal as="p" className="invite-close" delay={0.15}>
          {wedding.invitation.close}
        </HeadingReveal>
        <Ornament />
        <blockquote>
          <cite>{wedding.verse.reference}</cite>
          <p className="malayalam" lang="ml">
            {wedding.verse.malayalam}
          </p>
          <p className="verse-en">
            10 {wedding.verse.english}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
