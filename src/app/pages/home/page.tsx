import { Input } from "@/components/ui/input";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import { ModeToggle } from "@/components/common/mode-toggle";
import { ArrowUp } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function HomePAge() {
  return (
    <div className="container text-center space-y-5 space-x-5">
      <h1 className="text-3xl font-bold">Fitnes App</h1>
      <Button className="px-5" onClick={() => toast.success("hello")}>
        Get Started
      </Button>
      <Button
        variant={"link"}
        className="px-5"
        onClick={() => toast.success("hello")}
      >
        Exlore more
      </Button>
      <Button variant={"ghost"} icon={() => <ArrowUp />} className="p-4">
        ghost
      </Button>

      <Input type="password" placeholder="password" />
      <Input type="email" />
      <Input type="text" />
      <ModeToggle />
      <div className="p-6 bg-grayExtra flex items-center justify-center">
        <InputOTP maxLength={6} type="number">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}
