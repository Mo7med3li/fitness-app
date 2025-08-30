// UI components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

// Images
import fitImage from "../../../../public/assets/O15_36.png";
import logo from "../../../../public/assets/fit 1.png";

// lib
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// schemes
import { ChangePasswordSchema } from "@/lib/schemes/change-password.schema";

export default function CreatePass() {
  // Hook
  const navigate = useNavigate();
  const [loading, isLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  // React hook form
  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      email: localStorage.getItem("email") || "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Submit function
  function onSubmit(values: z.infer<typeof ChangePasswordSchema>) {
    // Send a POST request
    isLoading(true);
    axios
      .put(`${import.meta.env.VITE_API_URL}/auth/resetPassword`, {
        email: values.email,
        newPassword: values.newPassword,
      })
      // on Success
      .then((data) => {
        if (data.data.message === "success") {
          isLoading(false);
          toast.success(t("auth.password-changed-successfully"));
          localStorage.removeItem("email");
          navigate("/auth/login");
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

      {/* right side */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12">
        {/* form header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl lg:text-5xl font-extrabold">{t("auth.create-new-password")}</h3>
        </div>

        {/* form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6 w-full max-w-md p-6 sm:p-10 border rounded-3xl bg-black/40 backdrop-blur-md shadow-xl"
          >
            <h3 className="text-sm sm:text-lg text-center font-normal text-gray-300">
              {t("auth.make-sure-to-create-a-strong-password")}
            </h3>

            {/* New Password */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder={t("auth.new-password")}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder={t("auth.confirm-new-password")}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Change Password Button */}
            <Button
              disabled={
                loading ||
                !form.watch("newPassword") ||
                !form.watch("confirmPassword") ||
                form.getValues("newPassword") !== form.getValues("confirmPassword")
              }
              className="w-full disabled:bg-slate-600"
              type="submit"
            >
              {loading ? (
                <span className="animate-spin">
                  <Loader />
                </span>
              ) : (
                t("change")
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
