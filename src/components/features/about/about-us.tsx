import { Dumbbell } from "lucide-react";
import AboutLogo from "./../../../../public/assets/About_us.webp";
import AboutImage from "./components/about-image";
import AboutUsContent from "./components/about-content";

export default function AboutUs() {
  return (
    <section className="relative dark:bg-[#242424] font-baloo bg-white text-black">
      {/* Background image with title */}
      <div className="flex justify-center py-5 sm:mx-6 md:mx-8 lg:mx-5 relative">
        <div className="relative max-w-full">
          <img
            src={AboutLogo}
            alt="Workouts"
            className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 sm:bottom-4">
            <p className="text-main flex items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg whitespace-nowrap">
              <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              About us
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Images */}
        <div className="order-2 lg:order-1">
          <AboutImage />
        </div>

        {/* Page content */}
        <div className="order-1 lg:order-2">
          <AboutUsContent />
        </div>
      </div>
    </section>
  );
}
