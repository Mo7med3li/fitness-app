import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import { ModeToggle } from "@/components/common/mode-toggle";

export default function HomePAge() {
  return (
    <div className="container text-center space-y-5 bg-stone-700">
      <h1 className="text-3xl font-bold">Fitnes App</h1>
      <Button className="px-5" onClick={() => toast.success("hello")}>
        Button
      </Button>
      <ModeToggle />
      <Input type="password" placeholder="password" />
      <Input type="email" />
      <Input type="text" />
    </div>
  );
}
