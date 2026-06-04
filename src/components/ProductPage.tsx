import type { ProductContent } from "@/lib/content";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PositioningBand } from "@/components/PositioningBand";
import { TrustStrip } from "@/components/TrustStrip";
import { Showcase } from "@/components/Showcase";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Steps } from "@/components/Steps";
import { CaseStudy } from "@/components/CaseStudy";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export function ProductPage({ content }: { content: ProductContent }) {
  return (
    <div data-theme={content.theme} className="flex min-h-full flex-col bg-ink">
      <Nav content={content} />
      <main className="flex-1">
        <Hero content={content} />
        <PositioningBand content={content} />
        <TrustStrip content={content} />
        <Showcase content={content} />
        <Features content={content} />
        <Stats content={content} />
        <Steps content={content} />
        <CaseStudy content={content} />
        <Testimonial content={content} />
        <CTA content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}
