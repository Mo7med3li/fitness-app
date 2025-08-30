// UI components
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

// Images
import fitImage from "../../../../public/assets/O15_36.png";
import logo from "../../../../public/assets/fit 1.png";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import { OTPSchema } from "@/lib/schemes/OTP.schema";
import type z from "zod";
import { Loader } from "lucide-react";

export default function OTP() {
  // Hook
  const navigate = useNavigate();
  const [loading, isLoading] = useState<boolean>(false);

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
          toast.success("The code has been verified successfully");
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
    <div className="w-full h-full text-white text-3xl grid grid-cols-1 lg:grid-cols-2">
      {/* left side */}
      <div className="col-span-1 hidden lg:flex flex-col items-center justify-center gap-20 my-36 ml-8  ">
        <img src={logo} alt="logo super fitness" className="w-44" />
        <img src={fitImage} alt="fit Image" className="w-[500px]" />
      </div>

      {/* right side */}
      <div className="col-span-1 flex flex-col items-center justify-center gap-20 my-36 ml-8">
        {/* form header */}
        <div className="text-center">
          <h3 className="text-5xl font-extrabold flex flex-col gap-3">OTP CODE</h3>
        </div>

        {/* form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2 p-10 border w-fit rounded-[50px] bg-black/30 "
          >
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-lg text-center font-normal">Enter the OTP you have received</h3>

              <FormField
                control={form.control}
                name="resetCode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP
                        {...field}
                        maxLength={8}
                        type="number"
                        className="max-w-xs w-full"
                        onChange={(value: string) => {
                          field.onChange(value);
                          // Update form value
                          form.setValue("resetCode", value);
                        }}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* btn Confirm */}
              <Button
                disabled={loading || form.watch("resetCode").length < 6}
                className="w-full disabled:bg-slate-600"
                type="submit"
              >
                {loading ? (
                  <span className="animate-spin">
                    <Loader />
                  </span>
                ) : (
                  "Confirm"
                )}
              </Button>

              {/* Resend Code  */}
              <div>
                <p className="text-base text-center">didn’t receive verification code?</p>
                <p className="text-main text-center underline text-base font-bold">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      axios
                        .post(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`, {
                          email: localStorage.getItem("email"),
                        })
                        // on Success
                        .then((data) => {
                          if ((data.data.message = "success")) {
                            isLoading(false);
                            toast.success("OTP has been sent to your email.");
                          }
                        })
                        // on Error
                        .catch((error) => {
                          isLoading(false);
                          toast.error(error?.response?.data?.error);
                        });
                    }}
                    href=""
                  >
                    Resend Code
                  </a>
                </p>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
