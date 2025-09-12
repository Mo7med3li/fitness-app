import Image from "../../../../../../public/assets/Theo Vance.png";
import Actions from "./actions";
import Stats from "./stats";

const HeroSection = () => {
  return (
    <main className="w-full bg-center bg-[linear-gradient(#fff9,#fff9),url('/assets/auth-bg.webp')] dark:bg-[linear-gradient(#24242499,#24242499),url('/assets/auth-bg.webp')]">
      <section className="backdrop-blur-[86.1px]">
        {/* ToDo */}
        {/* <Navbar /> */}
        <section className="w-full grid grid-cols-3 container dark:text-white px-4">
          <div className="w-full lg:col-span-2 flex justify-center items-center col-span-3 ">
            <div className="space-y-16">
              <h2 className="font-bold text-6xl uppercase font-baloo">
                Your body can <span className="text-main">stand almost</span> anything
              </h2>
              {/* content */}
              <div className="relative px-4">
                <div className="before:block before:absolute before:left-0 before:w-1 before:h-full before:rounded-lg before:bg-main space-y-1">
                  <p className="text-lg font-rubik text-charcoal dark:text-white">
                    It's your mind that needs convincing. Push past your limits, stay
                  </p>
                  <p className="text-lg font-rubik text-charcoal dark:text-white">
                    committed, and watch as your body transform into powerhouse of
                  </p>
                  <p className="text-lg font-rubik text-charcoal dark:text-white">
                    strength and resilience. Start your journey today & truly capable of!
                  </p>
                </div>
              </div>
              {/* Stats */}
              <Stats />
              {/* Actions */}
              <Actions />
            </div>
          </div>
          <div className="w-full col-span-3 lg:col-span-1">
            <img src={Image} alt="man" className="object-cover" />
          </div>
        </section>
        {/* ToDo */}
        {/* <ScrollingTicker /> */}
      </section>
    </main>
  );
};
export default HeroSection;
