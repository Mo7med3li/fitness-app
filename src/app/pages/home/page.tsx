import AboutUs from "@/components/features/about/about-us";
import HeroSection from "./components/hero-section/hero-section";
import WorkoutSection from "./components/workout-section";
import MealsSection from "./components/meals-section/meals-section";
import WhyUsSection from "./components/why-us-section/why-us-section";

export default function HomePage() {
  // Translation
  return (
    <div className="overflow-hidden">
      {/* hero section */}
      <HeroSection />

      {/* about section */}
      <AboutUs />

      {/* workout section */}
      <WorkoutSection />

      {/* why us section */}
      <WhyUsSection />

      {/* healthy section */}
      <MealsSection />
    </div>
  );
}
