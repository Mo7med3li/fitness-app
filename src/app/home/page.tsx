import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";

export default function HomePAge() {
  return (
    <div className="container text-center space-y-5">
      <h1 className="text-3xl font-bold">Fitnes App</h1>
      <Button onClick={() => toast.success("hello")}>Button</Button>
      <Input />
    </div>
  );
}
