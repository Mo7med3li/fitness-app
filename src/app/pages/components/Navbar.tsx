import { useState } from "react";
import Figure from "./../../../../public/assets/logo.webp";
import { ArrowRight, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const userToken = localStorage.getItem("userToken");
  const { t } = useTranslation();

  return (
    <nav
      className={`static w-full z-50 top-0 start-0 py-8 transition-colors duration-300bg-transparent`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Figure} className="h-8" alt="Flowbite Logo" />
        </a>

        {/* Toggle button + Profile */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {userToken ? (
            <NavLink
              to="/profile"
              className="w-10 h-10 rounded-full bg-main flex justify-center items-center text-white"
            >
              <User />
            </NavLink>
          ) : (
            <div className="flex ">
              <Button
                variant="default"
                className="dark:text-white me-5 text-gray-700"
                icon={() => <ArrowRight />}
              >
                <Link className="uppercase" to="/auth/login">
                  {t("login")}
                </Link>
              </Button>

              <Button
                variant="default"
                className=" text-main bg-transparent border border-main hover:text-gray-700"
                icon={() => <ArrowRight />}
              >
                <Link className="uppercase" to="/auth/register">
                  {t("sign-up")}
                </Link>
              </Button>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <span className="sr-only">{t("open-main-menu")}</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0  ${
                    isActive
                      ? "text-main font-bold"
                      : "text-gray-700 dark:text-gray-200 hover:text-main"
                  }`
                }
              >
                {t("home-page")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "text-main font-bold"
                      : "text-gray-700 dark:text-gray-200 hover:text-main"
                  }`
                }
              >
                {t("toAbout")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "text-main font-bold"
                      : "text-gray-700 dark:text-gray-200 hover:text-main"
                  }`
                }
              >
                {t("classes")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/healthy"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "text-main font-bold"
                      : "text-gray-700 dark:text-gray-200 hover:text-main"
                  }`
                }
              >
                {t("toHealthy")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
