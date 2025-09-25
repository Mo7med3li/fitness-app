import WhyUsContent from "./why-us-content";
import WhyUsImages from "./why-us-images";
import { Dumbbell } from "lucide-react";

const WhyUsSection = () => {
  return (
    <section className="w-full bg-white/95">
      <div className="backdrop-blur-[86px]">
        <div className=" grid grid-cols-2 lg:px-28 px-4 gap-1 py-14">
          <div className="col-span-2 lg:col-span-1 space-y-16 lg:w-[640px]">
            {/* Heading */}
            <section className="space-y-6">
              <h2 className="flex items-center gap-2 font-bold text-main relative before:content-['Why_Us'] before:absolute before:-bottom-4 before:hidden lg:before:block before:-z-10 before:text-charcoal/10 z-10  before:text-[64px] before:font-bold before:text-main before:whitespace-nowrap">
                <Dumbbell className="rotate-45" /> Why Us
              </h2>
              <h2 className="font-bold text-[40px] uppercase font-baloo text-charcoal">
                Elevate fitness with <span className="text-main">the best way possible</span>
              </h2>
              <p className="text-lg font-rubik text-charcoal">
                We offer a fitness journey that's tailored to your goals, supported by professional
                trainers and a welcoming community. Whether it's weight loss, strength building, or
                overall wellness, our proven methods.
              </p>
            </section>
            {/* Content */}
            <WhyUsContent />
          </div>

          {/* Images */}
          <div className="col-span-2 lg:col-span-1">
            <WhyUsImages />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUsSection;
