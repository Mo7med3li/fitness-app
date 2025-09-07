// Ui components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

// lib
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import type z from "zod";
import { useTranslation } from "react-i18next";

// schemes & custom hook
import { ForgetPassSchema } from "@/lib/schemes/forget-password.schema";
import useForgetPassword from "./hooks/useForgetPassword";

export default function ForgetPasswordPage() {
  // Hook
  const { t } = useTranslation();

  // React hook form
  const form = useForm<z.infer<typeof ForgetPassSchema>>({
    resolver: zodResolver(ForgetPassSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutateAsync: forgetPassword, isPending } = useForgetPassword();
  // Submit function
  function onSubmit(values: z.infer<typeof ForgetPassSchema>) {
    // Send a POST request
    forgetPassword(values, {
      onSuccess() {
        localStorage.setItem("email", values.email);
      },
    });
  }

  return (
      <div className="flex flex-col items-center justify-center p-6 sm:p-12">
        {/* form header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl lg:text-5xl font-extrabold">{t("auth.forget-password")}</h3>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6 w-full max-w-md p-6 sm:p-10 border rounded-3xl bg-black/40 backdrop-blur-md shadow-xl"
          >
            <h3 className="text-sm sm:text-lg text-center font-normal text-gray-300">
              {t("auth.enter-your-email")}
            </h3>

            {/* Email Input */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder={t("auth.email")}
                      required
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              disabled={isPending || !form.watch("email")}
              className="w-full disabled:bg-slate-600"
              type="submit"
            >
              {isPending ? (
                <span className="animate-spin">
                  <Loader />
                </span>
              ) : (
                t("auth.sent-otp")
              )}
            </Button>
          </form>
        </Form>
      </div>
  );
}
