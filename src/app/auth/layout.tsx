import Logo from "/assets/logo.webp";
import Figure from "/assets/O15_36.webp";

import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function AuthLayout() {
  //   Translation
  const { i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div
        className={`absolute top-0 bottom-0 start-0 right-0 blur-xl bg-[url('/assets/auth-bg.webp')] bg-no-repeat bg-center bg-cover`}
      ></div>
      <div className="absolute top-0 bottom-0 start-0 right-0 bg-neutral-800 opacity-60"></div>

      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="z-10 grid grid-cols-2 justify-center max-w-[1440px]"
      >
        <div className="col-span-1 px-8 py-16 border-e-2 border-opacity-20 shadow-auth border-e-main">
          <img src={Logo} alt="" className="mx-auto mb-20" />
          <img src={Figure} alt="" className="mx-auto w-full" />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
