// Ui components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Images
import fitImage from "../../../../public/assets/O15_36.png";
import logo from "../../../../public/assets/fit 1.png";
import Apple from "../../../../public/assets/Apple.png";
import Google from "../../../../public/assets/Google.png";
import facebook from "../../../../public/assets/facebook.png";

export default function Login() {
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
            <span className="text-lg font-normal ">Hey There,</span>
            WELCOME BACK!
          </h3>
        </div>

        {/* form */}
        <form className="flex flex-col gap-2 p-10 border w-3/4 rounded-[50px] bg-black/30">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl text-center font-extrabold">Login</h3>

            {/* Input */}
            <Input type="email" placeholder="Email" required autoFocus />
            <Input type="password" placeholder="Password" required />

            {/* Forget Password */}
            <a className="text-main text-right underline text-base font-bold">
              Forget Password ?
            </a>

            {/* Or */}
            <div className="flex justify-center items-center gap-5 text-grayLight">
              <hr className="w-28" />
              <span className="text-sm">Or</span>
              <hr className="w-28" />
            </div>

            {/* icon */}
            <div className="flex justify-center gap-4">
              <img src={facebook} alt="" />
              <img src={Google} alt="" />
              <img src={Apple} alt="" />
            </div>

            {/* btn Login */}
            <Button>Login</Button>
          </div>

          {/* Register */}
          <div className="flex justify-center gap-4 text-base ">
            <p>Dont have an account yet ?</p>
            <a href="#" className="text-main underline">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
