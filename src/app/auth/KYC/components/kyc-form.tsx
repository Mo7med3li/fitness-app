import { Form } from "@/components/ui/form";
import useRegister from "../hooks/use-register";
import {
  type RegisterFields,
  type RegisterValues,
  useRegisterSchema,
} from "@/lib/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Gender from "./gender";
import NumberPicker from "@/components/common/number-picker";
import { Button } from "@/components/ui/button";
import MultiRadio from "@/components/common/multi-radio";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import useLevels from "@/lib/constants/KYC/levels.const";
import useGoals from "@/lib/constants/KYC/goals.const";

interface FormSteps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  registerValues: RegisterValues;
}

export default function KycForm({ step, setStep, registerValues }: FormSteps) {
  // Translation
  const { t } = useTranslation();

  // Hooks
  const { register: submitRegister, isPending, error } = useRegister();
  const registerSchema = useRegisterSchema();

  // Form
  const form = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: registerValues.firstName,
      lastName: registerValues.lastName,
      email: registerValues.email,
      password: registerValues.password,
      rePassword: registerValues.rePassword,
      height: 53,
      weight: 23,
      goal: undefined,
      activityLevel: undefined,
      gender: undefined,
      age: 13,
    },
    mode: "onSubmit",
  });

  // Functions
  const onSubmit = (values: RegisterFields) => {
    submitRegister(values);
  };

  // Variables
  const gender = form.watch("gender");
  const goal = form.watch("goal");
  const activityLevel = form.watch("activityLevel");
  const age = form.watch("age");
  const height = form.watch("height");
  const weight = form.watch("weight");
  const levels = useLevels();
  const goals = useGoals();

  // Statements
  const disableNext = () => {
    switch (step) {
      case 1: // gender step
        return !gender;
      case 2: // goal step
        return !age;
      case 3: // activity level step
        return !weight;
      case 4: // age step
        return !height;
      case 5: // height step
        return !goal;
      case 6: // weight step
        return !activityLevel;
      default:
        return false; // other steps always enabled
    }
  };

  return (
    <div className="w-full text-center">
      <Form {...form}>
        <form
          onSubmit={step === 6 ? form.handleSubmit(onSubmit) : (e) => e.preventDefault()}
          className="space-y-9"
        >
          {/* Steps */}
          {/* Step 1 Gender */}
          {step === 1 && <Gender control={form.control} />}

          {/* Step 2 Age */}
          {step === 2 && (
            <NumberPicker
              control={form.control}
              name="age"
              label={t("years-old")}
              range={[...Array(91)].map((_, i) => i + 10)}
            />
          )}

          {/* Step 3 weight */}
          {step === 3 && (
            <NumberPicker
              control={form.control}
              name="weight"
              label={t("weight-kg")}
              range={[...Array(300)].map((_, i) => i + 20)}
            />
          )}

          {/* Step 4 Height*/}
          {step === 4 && (
            <NumberPicker
              control={form.control}
              name="height"
              label={t("height-cm")}
              range={[...Array(151)].map((_, i) => i + 50)}
            />
          )}

          {/* Step 5 goal*/}
          {step === 5 && <MultiRadio control={form.control} fieldName="goal" items={goals} />}

          {/* Step 6  activity level*/}
          {step === 6 && (
            <MultiRadio control={form.control} fieldName="activityLevel" items={levels} />
          )}

          {/* Error handling */}
          {error && <p className="font-medium text-main text-sm mt-2">{error.message}</p>}

          {/* Next / Submit button */}
          <div className="mt-6 flex w-full gap-4">
            {step > 1 && (
              <Button
                type="button"
                className="w-full bg-zinc-700 hover:bg-zinc-600"
                onClick={() => setStep(step - 1)}
                disabled={isPending}
              >
                {t("previos")}
              </Button>
            )}

            <Button
              type={step === 6 ? "button" : "submit"}
              className={cn(step === 1 ? "w-1/2 mx-auto" : "w-full")}
              disabled={disableNext() || isPending}
              onClick={() => {
                if (step < 6) {
                  setStep(step + 1);
                } else {
                  onSubmit(form.getValues());
                }
              }}
            >
              {step === 6 ? t("submit") : t("next")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
