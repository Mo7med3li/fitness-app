import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Actions = () => {
  return (
    // Buttons
    <section className="flex justify-between lg:gap-16 lg:justify-normal">
      <Button variant="default" className=" text-white" icon={() => <ArrowRight />}>
        <Link to="/auth/login">Get Started</Link>
      </Button>
      <Button variant="ghost" className="text-main hover:text-white" icon={() => <ArrowRight />}>
        <Link to="/about">Explore More</Link>
      </Button>
    </section>
  );
};
export default Actions;
