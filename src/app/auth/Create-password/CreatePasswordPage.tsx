// UI components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

// lib
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { useTranslation } from "react-i18next";

// schemes
import { ChangePasswordSchema } from "@/lib/schemes/change-password.schema";
import useNewPass from "./hooks/useNewPass";

export default function CreatePasswordPage() {
  // Hook
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

  const { mutate: createNewPss, isPending } = useNewPass();
  // Submit function
  function onSubmit(values: z.infer<typeof ChangePasswordSchema>) {
    createNewPss({ email: values.email, newPassword: values.newPassword });
  }

  return (
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
                isPending ||
                !form.watch("newPassword") ||
                !form.watch("confirmPassword") ||
                form.getValues("newPassword") !== form.getValues("confirmPassword")
              }
              className="w-full disabled:bg-slate-600"
              type="submit"
            >
              {isPending ? (
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
  );
}
