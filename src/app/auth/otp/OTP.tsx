// UI components
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

// Images
import fitImage from "../../../../public/assets/O15_36.png";
import logo from "../../../../public/assets/fit 1.png";

// lib
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import type z from "zod";
import { Loader } from "lucide-react";
import { useTranslation } from "react-i18next";

// schemes
import { OTPSchema } from "@/lib/schemes/OTP.schema";

export default function OTP() {
  // Hook
  const navigate = useNavigate();
  const [loading, isLoading] = useState<boolean>(false);
  const { t } = useTranslation();
  // React hook form
  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      resetCode: "",
    },
  });

  // Submit function
  function onSubmit(values: z.infer<typeof OTPSchema>) {
    // Send a POST request
    isLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/verifyResetCode`, values)
      // on Success
      .then((data) => {
        if ((data.data.message = "success")) {
          isLoading(false);
          toast.success(t("auth.the-code-has-been-verified-successfully"));
          navigate("/auth/create-password");
        }
      })
      // on Error
      .catch((error) => {
        isLoading(false);
        toast.error(error?.response?.data?.error);
      });
  }

  return (
    <div className="w-full min-h-screen text-white grid grid-cols-1 lg:grid-cols-2">
      {/* left side */}
      <div className="hidden lg:flex flex-col items-center justify-center gap-16 p-8">
        <img src={logo} alt="logo super fitness" className="w-32 lg:w-44" />
        <img src={fitImage} alt="fit Image" className="w-72 lg:w-[500px]" />
      </div>

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
              disabled={loading || form.watch("resetCode").length < 6}
              className="w-full disabled:bg-slate-600 rounded-xl py-6 text-lg font-semibold"
              type="submit"
            >
              {loading ? (
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
                  axios
                    .post(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`, {
                      email: localStorage.getItem("email"),
                    })
                    .then((data) => {
                      if (data.data.message === "success") {
                        isLoading(false);
                        toast.success(t("auth.otp-has-been-sent-to-your-email"));
                      }
                    })
                    .catch((error) => {
                      isLoading(false);
                      toast.error(error?.response?.data?.error);
                    });
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
