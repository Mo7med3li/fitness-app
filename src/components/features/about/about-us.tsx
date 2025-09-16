import { Dumbbell } from "lucide-react";
import AboutLogo from "./../../../../public/assets/About_us.webp";
import AboutImage from "./components/about-image";
import AboutUsContent from "./components/about-content";

export default function AboutUs() {
  return (
    <section className="relative dark:bg-[#242424] font-baloo bg-white text-black">
      {/*  Background image with title */}
      <div className="flex justify-center -m-5 relative">
        <img src={AboutLogo} alt="WOrkouts" />
        <p className="absolute bottom-0 text-main flex gap-2 whitespace-nowrap">
          <Dumbbell />
          About us
        </p>
      </div>

      <div className="grid grid-col-1 lg:grid-cols-2 ">
        {/* images  */}
        <AboutImage />

        {/*  Page content */}
        <AboutUsContent />
      </div>
    </section>
  );
}
