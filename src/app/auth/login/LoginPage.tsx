// Ui components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

// Images
import Apple from "../../../../public/assets/Apple.webp";
import Google from "../../../../public/assets/Google.webp";
import facebook from "../../../../public/assets/facebook.webp";

// lib
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";
import { useTranslation } from "react-i18next";

// schemes & custom hook
import { LoginSchema } from "@/lib/schemes/login.schema";
import useLogin from "./hooks/uselogin";

export default function LoginPage() {
  // Hook
  const { t } = useTranslation();

  // React hook form
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Submit function
  const { mutate: login, isPending } = useLogin();
  function onSubmit(values: z.infer<typeof LoginSchema>) {
    login(values);
  }

  return (
    <div className="w-full min-h-screen text-white text-3xl grid grid-cols-1 lg:grid-cols-2">
      {/* right side */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12">
        {/* form header */}
        <div className="text-center mb-10">
          <h3 className="text-3xl lg:text-5xl font-extrabold flex flex-col gap-2">
            <span className="text-base lg:text-lg font-normal">{t("auth.hey-there")}</span>
            {t("auth.welcome-back")}
          </h3>
        </div>

        {/* form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6 w-full max-w-md p-6 sm:p-10 border rounded-3xl bg-black/40 backdrop-blur-md shadow-xl"
          >
            <h3 className="text-xl lg:text-2xl text-center font-extrabold">{t("auth.login")}</h3>

            {/* Email */}
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

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="password" placeholder={t("password")} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Forget Password */}
            <Link
              to="/auth/forget-password"
              className="text-main text-right underline text-sm font-bold block"
            >
              {t("auth.forget-password")}
            </Link>

            {/* Or */}
            <div className="flex justify-center items-center gap-4 text-gray-400">
              <hr className="w-20 border-gray-600" />
              <span className="text-xs">{t("or")}</span>
              <hr className="w-20 border-gray-600" />
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4">
              <img src={facebook} alt="facebook login" className="w-8 cursor-pointer" />
              <img src={Google} alt="google login" className="w-8 cursor-pointer" />
              <img src={Apple} alt="apple login" className="w-8 cursor-pointer" />
            </div>

            {/* Login button */}
            <Button
              disabled={isPending || !form.watch("email") || !form.watch("password")}
              className="w-full disabled:bg-slate-600"
              type="submit"
            >
              {isPending ? (
                <span className="animate-spin">
                  <Loader />
                </span>
              ) : (
                t("auth.login")
              )}
            </Button>

            {/* Register */}
            <div className="flex justify-center gap-2 text-sm sm:text-base">
              <p>{t("auth.dont-have-an-account-yet")}</p>
              <a href="#" className="text-main underline">
                {t("auth.register")}
              </a>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
