import ScrollingTicker from "@/components/common/ScrollingTicker";
import logo from "../../../../public/assets/logo.webp";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div>
      {/* our scrolling ticker */}
      <ScrollingTicker />

      <div className="grid grid-cols-4 gap-10  justify-between pt-5 p-10">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <img src={logo} className="w-[87px]" alt="logo" />
          <p className="text-lg font-normal font-baloo">
            Push harder, go further. Your fitness journey starts today!
          </p>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-4 ">
          <h4 className="uppercase text-white font-semibold text-lg">contact us</h4>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-gray-600 p-2 bg-gray-800 flex items-center justify-center w-10 h-10">
              <Phone className="w-4 h-4 text-white" />
            </span>
            <span className="text-white">+91 123 456 789</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-gray-600 p-2 bg-gray-800 flex items-center justify-center w-10 h-10">
              <Mail className="w-4 h-4 text-white" />
            </span>
            <span className="text-white">info@gmail.com</span>
          </div>
        </div>

        {/* Our Gym Timing */}
        <div className="flex flex-col gap-4">
          <h4 className="uppercase font-bold text-lg flex items-center gap-2">Our Gym Timing</h4>

          <div className="space-y-3">
            <div>
              <p className="text-gray-300">
                <span className="font-medium">Mon - Fri:</span> 08:00 AM - 10:00 PM
              </p>
            </div>

            <div>
              <p className="text-gray-300">
                <span className="font-medium">Sat - Sun:</span> 08:00 AM - 09:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Our Location */}
        <div className="flex flex-col gap-4">
          <h4 className="uppercase font-bold text-lg flex items-center gap-2">Our Location</h4>

          <div>
            <p className="text-gray-300 leading-relaxed">
              2715 Ash Dr, San Jose, South
              <br />
              Dakota 83475
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
