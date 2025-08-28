// Ui components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Images
import fitImage from "../../../../public/assets/O15_36.png";
import logo from "../../../../public/assets/fit 1.png";

export default function ForgetPass() {
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
            Forget password
          </h3>
        </div>

        {/* form */}
        <form className="flex flex-col gap-2 p-10 border w-3/4 rounded-[50px] bg-black/30">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg text-center font-normal">
              Enter Your Email
            </h3>

            {/* Input */}
            <Input type="email" placeholder="Email" required autoFocus />

            {/* btn Sent OTP */}
            <Button>Sent OTP</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
