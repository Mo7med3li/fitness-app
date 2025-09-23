import AboutUs from "@/components/features/about/about-us";
import HeroSection from "./components/hero-section/hero-section";
import { ModeToggle } from "@/components/common/mode-toggle";
import { TranslationToggle } from "@/components/common/translation-toggle";

export default function HomePage() {
  // Translation
  return (
    <div>
      {/* hero section */}
      <HeroSection />
      {/* about section */}
      <AboutUs />
      <ModeToggle />
      <TranslationToggle />

      {/* workout section */}

      {/* why us section */}

      {/* healthy section */}
      {/*  */}
    </div>
  );
}
