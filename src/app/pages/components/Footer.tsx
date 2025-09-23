import ScrollingTicker from "@/components/common/ScrollingTicker";
import logo from "../../../../public/assets/logo.webp";
import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div>
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
          <h4 className="uppercase dark:text-white text-charcoal font-bold text-lg">
            {t("contact-us")}
          </h4>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-gray-600 p-2 dark:bg-charcoal flex items-center justify-center w-10 h-10">
              <Phone className="w-4 h-4 text-charcoal dark:text-white" />
            </span>
            <span className="dark:text-gray-300 text-charcoal">+91 123 456 789</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-gray-600 p-2 dark:bg-charcoal flex items-center justify-center w-10 h-10">
              <Mail className="w-4 h-4 text-charcoal dark:text-white" />
            </span>
            <span className="dark:text-gray-300 text-charcoal">info@gmail.com</span>
          </div>
        </div>

        {/* Our Gym Timing */}
        <div className="flex flex-col gap-4">
          <h4 className="uppercase font-bold text-lg flex items-center gap-2">
            {t("our-gym-timing")}
          </h4>

          <div className="space-y-3">
            <div>
              <p className="dark:text-gray-300 text-charcoal">
                <span className="font-medium">{t("mon-fri")}:</span> 08:00 AM - 10:00 PM
              </p>
            </div>

            <div>
              <p className="dark:text-gray-300 text-charcoal">
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
            <p className="dark:text-gray-300 text-charcoal leading-relaxed">
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
