// Ui components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

// Images
import fitImage from "../../../../public/assets/O15_36.png";
import logo from "../../../../public/assets/fit 1.png";
import Apple from "../../../../public/assets/Apple.png";
import Google from "../../../../public/assets/Google.png";
import facebook from "../../../../public/assets/facebook.png";

// lib
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useContext, useState } from "react";
import { Loader } from "lucide-react";

// schemes
import { LoginSchema } from "@/lib/schemes/login.schema";

// context
import { UserContext } from "@/context/UserContext";

export default function Login() {
  // Hook
  const navigate = useNavigate();
  const [loading, isLoading] = useState<boolean>(false);

  // get setUserLogin to use on success Api
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error(
      "UserContext is undefined. Make sure you are using Login inside a UserContext.Provider.",
    );
  }
  const { setUserLogin } = userContext;

  // React hook form
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Submit function
  function onSubmit(values: z.infer<typeof LoginSchema>) {
    // Send a POST request
    isLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/signin`, values)
      // on Success
      .then((data) => {
        if ((data.data.message = "success")) {
          localStorage.setItem("userToken", data.data.token);
          setUserLogin(data.data.token);
          isLoading(false);
          toast.success(data.data.message);
          navigate("/");
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
          <h3 className="text-5xl font-extrabold flex flex-col gap-3">
            <span className="text-lg font-normal">Hey There,</span>
            WELCOME BACK!
          </h3>
        </div>

        {/* form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6 p-10 border w-3/4 rounded-[50px] bg-black/30"
          >
            <h3 className="text-2xl text-center font-extrabold">Login</h3>

            {/* Email */}
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

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Password" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Forget Password */}
            <Link
              to="/auth/forget-password"
              className="text-main text-right underline text-base font-bold block"
            >
              Forget Password ?
            </Link>

            {/* Or */}
            <div className="flex justify-center items-center gap-5 text-grayLight">
              <hr className="w-28" />
              <span className="text-sm">Or</span>
              <hr className="w-28" />
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4">
              <img src={facebook} alt="facebook login" />
              <img src={Google} alt="google login" />
              <img src={Apple} alt="apple login" />
            </div>

            {/* Login button */}
            <Button
              disabled={loading || !form.watch("email") || !form.watch("password")}
              className="w-full disabled:bg-slate-600"
              type="submit"
            >
              {loading ? (
                <span className="animate-spin">
                  <Loader />
                </span>
              ) : (
                "Login"
              )}
            </Button>

            {/* Register */}
            <div className="flex justify-center gap-4 text-base">
              <p>Dont have an account yet ?</p>
              <a href="#" className="text-main underline">
                Register
              </a>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
