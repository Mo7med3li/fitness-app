// Ui components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

// Images
import fitImage from "../../../../public/assets/O15_36.png";
import logo from "../../../../public/assets/fit 1.png";

// lib
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import type z from "zod";

// schemes
import { ForgetPassSchema } from "@/lib/schemes/forget-password.schema";

export default function ForgetPass() {
  // Hook
  const navigate = useNavigate();
  const [loading, isLoading] = useState<boolean>(false);

  // React hook form
  const form = useForm<z.infer<typeof ForgetPassSchema>>({
    resolver: zodResolver(ForgetPassSchema),
    defaultValues: {
      email: "",
    },
  });

  // Submit function
  function onSubmit(values: z.infer<typeof ForgetPassSchema>) {
    // Send a POST request
    isLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`, values)
      // on Success
      .then((data) => {
        if ((data.data.message = "success")) {
          isLoading(false);
          toast.success("OTP has been sent to your email.");
          localStorage.setItem("email", values.email);
          navigate("/auth/OTP");
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
          <h3 className="text-5xl font-extrabold flex flex-col gap-3">Forget password</h3>
        </div>

        <Form {...form}>
          {/* form */}
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2 p-10 border w-3/4 rounded-[50px] bg-black/30"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-lg text-center font-normal">Enter Your Email</h3>

              {/* Input */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="email" placeholder="Email" required autoFocus />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* btn Sent OTP */}
              <Button
                disabled={loading || !form.watch("email")}
                className="w-full disabled:bg-slate-600"
                type="submit"
              >
                {loading ? (
                  <span className="animate-spin">
                    <Loader />
                  </span>
                ) : (
                  "Sent OTP"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
