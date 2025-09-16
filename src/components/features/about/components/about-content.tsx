import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutUsContent() {
  return (
    <div className="content lg:col-span-1 p-4 sm:p-6 md:p-8 lg:p-10 col-span-1 text-white flex flex-col gap-8 sm:gap-12 md:gap-16 w-full">
      {/*  Header title  */}
      <div className="w-full flex flex-col gap-4 sm:gap-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          EMPOWERING YOU TO ACHIEVE <span className="text-main block sm:inline">YOUR FITNESS</span>{" "}
          <span className="block sm:inline">GOALS</span>
        </h3>
        <p className="text-base sm:text-lg md:text-xl font-rubik leading-relaxed text-gray-200">
          We believe fitness is more than just a workout—it's a lifestyle. With top-of-the-line
          facilities, certified trainers, and a supportive community, we're here to inspire and
          guide you every step of the way.
        </p>
      </div>

      {/*  content  */}
      <div className="text-white w-full max-w-4xl">
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Personal Trainer */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="text-main mt-1 flex-shrink-0">
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                Personal Trainer
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Achieve your fitness goals with the guidance of our certified trainers.
              </p>
            </div>
          </div>

          {/* Cardio Programs */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="text-main mt-1 flex-shrink-0">
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                Cardio Programs
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                From steady-state runs to interval sprints, our treadmill programs.
              </p>
            </div>
          </div>

          {/* Quality Equipment */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="text-main mt-1 flex-shrink-0">
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                Quality Equipment
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Our gym is equipped with the latest cardio & strength machines.
              </p>
            </div>
          </div>

          {/* Healthy Nutritions */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="text-main mt-1 flex-shrink-0">
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                Healthy Nutritions
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Fuel your fitness journey with customized meal plans for you.
              </p>
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-start">
          <Button className="bg-main hover:bg-orange-600 relative text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full flex items-center space-x-2 sm:space-x-3 transition-colors shadow-lg group w-full sm:w-auto justify-center sm:justify-start max-w-xs">
            <span className="text-sm sm:text-base ">Get Started</span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all flex-shrink-0">
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
