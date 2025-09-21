import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegisterValuesSchema, type RegisterValues } from "@/lib/schemas/register.schema";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import KycForm from "../../KYC/components/kyc-form";

const RegisterForm = () => {
  // States
  const [registerValues, setRegisterValues] = useState<RegisterValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [isKYC, setIsKYC] = useState(false);
  const [step, setStep] = useState(1);

  //   Schema
  const registerSchema = useRegisterValuesSchema();

  // Form
  const form = useForm<RegisterValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    },
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });

  //   Submit Handler
  const onSubmit = (Values: RegisterValues) => {
    console.log(Values);
    setRegisterValues(Values);
    setIsKYC(true);
  };

  return (
    <section className="flex justify-center flex-col items-center w-full font-baloo gap-2">
      {!isKYC && (
        <>
          <div className="flex flex-col gap-2 items-center py-2 px-4">
            <h3 className="text-lg">Hey there</h3>
            <h2 className="font-bold text-5xl capitalize">Create an account</h2>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-[500px] p-10 border rounded-[50px] border-grayLight flex flex-col gap-3 items-center"
            >
              <h2 className="text-2xl font-extrabold">Register</h2>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* Label */}
                    <FormLabel className="sr-only">First Name</FormLabel>
                    {/* Input */}
                    <Input {...field} type="text" placeholder="First Name" />
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* Label */}
                    <FormLabel className="sr-only">Last Name</FormLabel>
                    {/* Input */}
                    <Input {...field} type="text" placeholder="Last Name" />
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* Label */}
                    <FormLabel className="sr-only">Email</FormLabel>
                    {/* Input */}
                    <Input {...field} type="email" placeholder="Email" />
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* Label */}
                    <FormLabel className="sr-only">Password</FormLabel>
                    {/* Input */}
                    <Input {...field} type="password" placeholder="Password" />
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rePassword"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {/* Label */}
                    <FormLabel className="sr-only">Re Password</FormLabel>
                    {/* Input */}
                    <Input {...field} type="password" placeholder="Re Password" />
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link to="/auth/forget-password" className="text-main underline self-end">
                Forgot Password ?
              </Link>
              {form.formState.errors && <p>{form.formState.errors.firstName?.message}</p>}
              <Button
                className="w-full"
                disabled={
                  form.formState.isSubmitting ||
                  form.formState.isSubmitSuccessful ||
                  !form.formState.isValid
                }
              >
                Register
              </Button>
            </form>
          </Form>
        </>
      )}
      {isKYC && <KycForm step={step} setStep={setStep} registerValues={registerValues} />}
    </section>
  );
};

export default RegisterForm;
