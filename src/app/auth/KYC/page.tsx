import { useState } from "react";
import { StepRadialProgress } from "@/components/common/chart-radial";
import KycForm from "./components/kyc-form";
import { useTranslation } from "react-i18next";

export default function Page() {
  // Translation
  const { t } = useTranslation();

  // State
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col justify-center items-center w-full px-4">
      {/* Counter */}
      <div>
        <StepRadialProgress step={step} />
      </div>

      {/* Heading */}
      <h2 className="font-extrabold text-4xl capitalize text-center">
        {/* Step 1 Gender */}
        {step === 1 && t("auth-heading-gender")}
        {/* Step 2 Age */}
        {step === 2 && t('auth-header-age')}
        {/* Step 3 weight */}
        {step === 3 && t('auth-header-weight')}
        {/* Step 4 Height*/}
        {step === 4 && t('auth-header-height')}
        {/* Step 5 goal*/}
        {step === 5 && t('auth-header-goal')}
        {/* Step 6  activity level*/}
        {step === 6 && (
          <>
            {t('your-regular-physical')}
            <br /> {t('activity-level')}
          </>
        )}
      </h2>

      {/* Description */}
      <p className="text-center mb-8 capitalize">
        {step === 1
          ? t('gender-descreption')
          : t('rest-auth-descreption')}
      </p>

      {/* Form */}
      <KycForm step={step} setStep={setStep} />
    </div>
  );
}
