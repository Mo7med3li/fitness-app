import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import ChangePasswordForm from "./components/change-password-form";

const ChangePasswordPage = () => {
  // Translation
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-[url('/assets/traidmails.jpg')] bg-cover bg-center">
      <div className="backdrop-blur-[6px] min-h-screen w-full dark:bg-charcoal/50">
        <Navbar />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center p-6 sm:p-12">
            <div className="text-center mb-6">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-grayExtra">
                {t("auth.create-new-password")}
              </h2>
              <p className="text-gray-300 mt-3 text-sm sm:text-base">
                {t("auth.make-sure-to-create-a-strong-password")}
              </p>
            </div>

            <ChangePasswordForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePasswordPage;
