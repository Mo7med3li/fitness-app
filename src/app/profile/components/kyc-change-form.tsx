import MultiRadio from "@/components/common/multi-radio";
import NumberPicker from "@/components/common/number-picker";
import { Button } from "@/components/ui/button";
import type { RegisterFieleds } from "@/lib/schemas/register.schema";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import useLevels from "@/lib/constants/KYC/levels.const";
import useGoals from "@/lib/constants/KYC/goals.const";
import useChangeKyc from "../hooks/use-change-kyc";
import type { UserDataResponse } from "@/lib/constants/user-data";

type KYCChangeFormProps = {
  activityLevel: string;
  goal: string;
  weight: number;
};

const KYCChangeForm = ({ data, title }: { data: UserDataResponse; title: string }) => {
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
    changeKycFn(values);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col items-center justify-center w-full"
      >
        {title === "Weight" && (
          <NumberPicker
            control={form.control}
            name="weight"
            label="Weight"
            range={Array.from({ length: 200 }, (_, i) => i + 10)}
            value={data?.user.weight}
          />
        )}
        {title === "Level" && (
          <MultiRadio
            control={form.control}
            fieldName="activityLevel"
            items={levels}
            value={data?.user.activityLevel}
          />
        )}
        {title === "Goal" && (
          <MultiRadio
            control={form.control}
            fieldName="goal"
            items={goals}
            value={data?.user.goal}
          />
        )}

        <Button type={"submit"} disabled={isPending}>
          Change
        </Button>
      </form>
    </FormProvider>
  );
};
export default KYCChangeForm;
