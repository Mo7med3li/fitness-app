import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import useChangePasswordSchema, {
  type ChangePasswordFields,
} from "@/lib/schemas/profile-change-password/change-password.schema";
const ChangePasswordForm = () => {
  // Translation
  const { t } = useTranslation();

  //   Schema
  const changePasswordSchema = useChangePasswordSchema();

  // Form
  const form = useForm<ChangePasswordFields>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });

  //  Submit handler
  function onSubmit(values: ChangePasswordFields) {
    console.log("Change password submitted:", values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full max-w-xl p-8 sm:p-12 border rounded-3xl bg-black/50 backdrop-blur-xl shadow-2xl"
      >
        {/* Current Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder={"Mohamed@123"}
                  required
                  className="h-12 text-base lg:text-lg bg-white/10 border-gray-600 placeholder:text-gray-400 focus-visible:ring-main"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  placeholder={"Mohamed@1234"}
                  required
                  className="h-12 text-base lg:text-lg bg-white/10 border-gray-600 placeholder:text-gray-400 focus-visible:ring-main"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-12 text-base lg:text-lg"
          disabled={!form.formState.isValid}
        >
          {t("change")}
        </Button>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
