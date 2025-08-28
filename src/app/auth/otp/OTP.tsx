// UI components
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

// Images
import fitImage from "../../../../public/assets/O15_36.png";
import logo from "../../../../public/assets/fit 1.png";

export default function OTP() {
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
            OTP CODE
          </h3>
        </div>

        {/* form */}
        <form className="flex flex-col gap-2 p-10 border w-3/4 rounded-[50px] bg-black/30">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg text-center font-normal">
              Enter the OTP you have received
            </h3>

            {/* Input */}
            <div className="flex justify-center">
              <InputOTP maxLength={6} type="number">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* btn Login */}
            <Button>Login</Button>

            {/* Forget Password */}
            <div>
              <p className="text-base text-center">
                didn’t receive verification code?
              </p>
              <p className="text-main text-center underline text-base font-bold">
                <a href="">Resend Code</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
