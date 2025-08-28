import { Input } from "@/components/ui/input";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import { ModeToggle } from "@/components/common/mode-toggle";
import { ArrowUp } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useTranslation } from "react-i18next";
import { TranslationToggle } from "@/components/common/translation-toggle";

export default function HomePage() {
  // Translation
  const { t } = useTranslation();
  return (
    <div className="container text-center space-y-5 font-rubik space-x-5 dark:bg-gray-700">
      <TranslationToggle />
      <h1 className="text-3xl font-bold ">{t("fitnes-app")}</h1>
      <Button className="px-5" onClick={() => toast.success(t("hello"))}>
        {t("get-started")}
      </Button>
      <Button variant={"link"} className="px-5">
        {t("explore-more")}
      </Button>
      <Button variant={"ghost"} icon={() => <ArrowUp />} className="p-4">
        {t("ghost")}
      </Button>
      <Input type="password" placeholder={t("password")} />
      <Input type="email" />
      <Input type="text" />
      <div className="flex items-center justify-center bg-gray-400 ">
        <ModeToggle />
      </div>
      <div className="p-6 bg-grayExtra flex items-center justify-center">
        <InputOTP maxLength={6} type="number">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}
