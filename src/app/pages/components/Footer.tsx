import ScrollingTicker from "@/components/common/ScrollingTicker";
import logo from "../../../../public/assets/logo.webp";
import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="container">
      {/* our scrolling ticker */}
      <ScrollingTicker />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  justify-between pt-5 p-10">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <img src={logo} className="w-[87px]" alt="logo" />
          <p className="text-lg font-normal font-baloo">{t("footer.header")}</p>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-4 ">
          <h4 className="uppercase text-white font-semibold text-lg">{t("contact-us")}</h4>

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
          <h4 className="uppercase font-bold text-lg flex items-center gap-2">
            {t("our-gym-timing")}
          </h4>

          <div className="space-y-3">
            <div>
              <p className="text-gray-300">
                <span className="font-medium">{t("mon-fri")}:</span> 08:00 AM - 10:00 PM
              </p>
            </div>

            <div>
              <p className="text-gray-300">
                <span className="font-medium">{t("sat-sun")}:</span> 08:00 AM - 09:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Our Location */}
        <div className="flex flex-col gap-4">
          <h4 className="uppercase font-bold text-lg flex items-center gap-2">
            {t("our-location")}
          </h4>

          <div>
            <p className="text-gray-300 leading-relaxed">
              {t("2715-ash-dr-san-jose-south")}
              <br />
              Dakota 83475
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
