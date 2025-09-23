import MultiRadio from "@/components/common/multi-radio";
import NumberPicker from "@/components/common/number-picker";
import { Button } from "@/components/ui/button";
import type { RegisterFieleds } from "@/lib/schemas/register.schema";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useLevels from "@/lib/constants/KYC/levels.const";
import useGoals from "@/lib/constants/KYC/goals.const";
import useChangeKyc from "../hooks/use-change-kyc";
import type { UserDataResponse } from "@/lib/constants/user-data";

type KYCChangeFormProps = {
  activityLevel: string;
  goal: string;
  weight: number;
};

const KYCChangeForm = ({ data, step }: { data: UserDataResponse; step: number }) => {
  // States
  const [currentStep, setCurrentStep] = useState(step);

  // Levels
  const levels = useLevels();
  // Goals
  const goals = useGoals();

  // Form
  const form = useForm<RegisterFieleds>({
    defaultValues: {
      activityLevel: "level1",
      goal: undefined,
      weight: undefined,
    },
  });

  // Effects
  useEffect(() => {
    if (data) {
      form.reset({
        activityLevel: data.user.activityLevel as RegisterFieleds["activityLevel"],
        goal: data.user.goal as RegisterFieleds["goal"],
        weight: data.user.weight as RegisterFieleds["weight"],
      });
    }
  }, [data, form]);

  // Change KYC
  const changeKyc = useChangeKyc();
  if (!changeKyc) return null;
  const { isPending, changeKycFn } = changeKyc;

  // Submit
  const onSubmit = (values: KYCChangeFormProps) => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
    else changeKycFn(values);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col items-center justify-center w-full"
      >
        {currentStep === 3 && (
          <NumberPicker
            control={form.control}
            name="weight"
            label="Weight"
            range={Array.from({ length: 200 }, (_, i) => i + 10)}
            value={data?.user.weight}
          />
        )}
        {currentStep === 2 && (
          <MultiRadio
            control={form.control}
            fieldName="activityLevel"
            items={levels}
            value={data?.user.activityLevel}
          />
        )}
        {currentStep === 1 && (
          <MultiRadio
            control={form.control}
            fieldName="goal"
            items={goals}
            value={data?.user.goal}
          />
        )}

        <div className="flex gap-2 w-full">
          <Button
            type={"button"}
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 1}
            className="w-full"
          >
            Previous
          </Button>
          <Button type={"submit"} disabled={isPending} isLoading={isPending} className="w-full">
            {currentStep < 3 ? "Next" : "Change"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
export default KYCChangeForm;
