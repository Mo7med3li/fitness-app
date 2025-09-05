// UI components
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

// lib
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { Loader } from "lucide-react";
import { useTranslation } from "react-i18next";

// schemes
import { OTPSchema } from "@/lib/schemes/OTP.schema";
import useForgetPass from "@/hooks/auth/useForgetPassword";
import useOtp from "@/hooks/auth/useOtp";

export default function OtpPage() {
  // Hook
  const { t } = useTranslation();
  // React hook form
  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      resetCode: "",
    },
  });
  const { mutateAsync: resetCode, isPending } = useOtp();
  const { mutateAsync: forgetPassword } = useForgetPass();
  // Submit function
  function onSubmit(values: z.infer<typeof OTPSchema>) {
    // Send a POST request
    resetCode(values);
  }

  return (
    <div className="w-full min-h-screen text-white grid grid-cols-1 lg:grid-cols-2">
      {/* Right Side */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12">
        {/* Form Header */}
        <div className="text-center mb-8 space-y-2">
          <h3 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-md">
            {t("auth.otp-code")}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto">
            {t("auth.enter-the-otp-you-have-received")}
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6 w-full max-w-md p-6 sm:p-10
                 border border-white/20 rounded-3xl bg-black/40
                 backdrop-blur-lg shadow-2xl"
          >
            {/* OTP input */}
            <FormField
              control={form.control}
              name="resetCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP
                      {...field}
                      maxLength={6}
                      type="number"
                      className="flex justify-center gap-2 sm:gap-3"
                      onChange={(value: string) => {
                        field.onChange(value);
                        form.setValue("resetCode", value);
                      }}
                    >
                      <InputOTPGroup>
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                          <InputOTPSlot key={i} index={i} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm button */}
            <Button
              disabled={isPending || form.watch("resetCode").length < 6}
              className="w-full disabled:bg-slate-600 rounded-xl py-6 text-lg font-semibold"
              type="submit"
            >
              {isPending ? (
                <span className="animate-spin">
                  <Loader />
                </span>
              ) : (
                t("confirm")
              )}
            </Button>

            {/* Resend Code */}
            <div className="text-center space-y-1">
              <p className="text-sm sm:text-base text-gray-300">
                {t("auth.didnt-receive-verification-code")}
              </p>
              <button
                type="button"
                onClick={() => {
                  const x = localStorage.getItem("email");
                  forgetPassword({ email: x });
                }}
                className="text-main hover:text-main/80 underline font-bold text-sm sm:text-base mt-2 transition-colors"
              >
                {t("auth.resend-code")}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
