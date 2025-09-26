import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegisterValuesSchema, type RegisterValues } from "@/lib/schemas/auth/register.schema";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import KycForm from "../../KYC/components/kyc-form";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  // Translation
  const { t } = useTranslation();

  // States
  const [registerValues, setRegisterValues] = useState<RegisterValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [isKYC, setIsKYC] = useState(false);
  const [step, setStep] = useState(1);

  //   Schema
  const registerSchema = useRegisterValuesSchema();

  // Form
  const form = useForm<RegisterValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    },
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });

  //   Submit Handler
  const onSubmit = (Values: RegisterValues) => {
    console.log(Values);
    setRegisterValues(Values);
    setIsKYC(true);
  };

  return (
    <section className="flex justify-center flex-col items-center w-full font-baloo gap-2">
      {!isKYC && (
        <>
          <div className="flex flex-col gap-2 items-center py-2 px-4">
            <h3 className="text-lg text-charcoal dark:text-white">{t("hey-there")}</h3>
            <h2 className="font-bold text-5xl capitalize text-charcoal dark:text-white">
              {t("create-an-account")}
            </h2>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-[500px] p-10 border rounded-[50px] dark:border-grayLight border-charcoal flex flex-col gap-3 items-center"
            >
              <h2 className="text-2xl font-extrabold text-charcoal dark:text-white">
                {t("register")}
              </h2>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* Label */}
                    <FormLabel className="sr-only">{t("first-name")}</FormLabel>
                    {/* Input */}
                    <Input {...field} type="text" placeholder={t("first-name")} />
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* Label */}
                    <FormLabel className="sr-only">{t("last-name")}</FormLabel>
                    {/* Input */}
                    <Input {...field} type="text" placeholder={t("last-name")} />
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* Label */}
                    <FormLabel className="sr-only">{t("email")}</FormLabel>
                    {/* Input */}
                    <Input {...field} type="email" placeholder={t("email")} />
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* Label */}
                    <FormLabel className="sr-only">{t("password")}</FormLabel>
                    {/* Input */}
                    <Input {...field} type="password" placeholder={t("password")} />
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rePassword"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* Label */}
                    <FormLabel className="sr-only">{t("re-password")}</FormLabel>
                    {/* Input */}
                    <Input {...field} type="password" placeholder={t("re-password")} />
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link
                to="/auth/forget-password"
                className="text-main underline self-end rtl:self-start"
              >
                {t("forgot-password")}
              </Link>
              {form.formState.errors && <p>{form.formState.errors.firstName?.message}</p>}
              <Button className="w-full" disabled={!form.formState.isValid}>
                {t("register")}
              </Button>
            </form>
          </Form>
        </>
      )}
      {isKYC && (
        <KycForm
          step={step}
          setStep={setStep}
          registerValues={registerValues}
          setIsKYC={setIsKYC}
        />
      )}
    </section>
  );
};

export default RegisterForm;
