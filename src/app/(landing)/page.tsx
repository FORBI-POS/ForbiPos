import { Hero } from "@/components/sections/Hero";
import { HeroScrollDemo } from "@/components/demos/hero-scroll-demo";
import { Features } from "@/components/sections/Features";
import { TechStack } from "@/components/sections/TechStack";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FooterSection } from "@/components/ui/footer-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TechStack />
      <Pricing />
      <FAQ />
      <FooterSection />
    </>
  );
}

