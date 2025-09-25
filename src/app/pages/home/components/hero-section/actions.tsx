import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Actions = () => {
  // Translation
  const { t } = useTranslation();
  return (
    <section className="flex justify-between lg:gap-16 lg:justify-normal">
      <Button variant="default" className=" text-white" icon={() => <ArrowRight />}>
        <Link to="/auth/login">{t("get-started")}</Link>
      </Button>
      <Button variant="ghost" className="text-main hover:text-white" icon={() => <ArrowRight />}>
        <Link to="/about">{t("explore-more")}</Link>
      </Button>
    </section>
  );
};
export default Actions;
