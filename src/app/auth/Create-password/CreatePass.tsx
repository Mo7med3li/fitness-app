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

// schemes
import { ChangePasswordSchema } from "@/lib/schemes/change-password.schema";

export default function CreatePass() {
  // Hook
  const navigate = useNavigate();
  const [loading, isLoading] = useState<boolean>(false);

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
          toast.success("Password changed successfully.");
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
    <div className="w-full h-full text-white text-3xl grid grid-cols-2">
      {/* left side */}
      <div className="col-span-1 flex flex-col items-center justify-center gap-20 my-36 ml-8">
        <img src={logo} alt="logo super fitness" className="w-44" />
        <img src={fitImage} alt="fit Image" className="w-[500px]" />
      </div>

      {/* right side */}
      <div className="col-span-1 flex flex-col items-center justify-center gap-20 my-36 ml-8">
        {/* form header */}
        <div className="text-center">
          <h3 className="text-5xl font-extrabold flex flex-col gap-3">create new password</h3>
        </div>

        {/* form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2 p-10 border w-3/4 rounded-[50px] bg-black/30"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-lg text-center font-normal">
                Make sure to create a strong password!
              </h3>

              {/* Input */}
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="password" placeholder="New password" required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Confirm New Password"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* btn change */}
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
                  "change"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
