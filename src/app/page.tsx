import { MotionProvider } from "@/components/motion-provider";
import { SiteNav } from "@/components/site-nav";
import { CountdownBand } from "@/features/countdown-band";
import { Events } from "@/features/events";
import { Families } from "@/features/families";
import { Gallery } from "@/features/gallery";
import { Hero } from "@/features/hero";
import { Invitation } from "@/features/invitation";
import { Registration } from "@/features/registration";
import { SiteFooter } from "@/features/site-footer";
import { Story } from "@/features/story";

export default function Home() {
  return (
    <MotionProvider>
      <SiteNav />
      <main>
        <Hero />
        <CountdownBand />
        <Invitation />
        <Registration />
        <Events />
        <Story />
        <Families />
        <Gallery />
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}
