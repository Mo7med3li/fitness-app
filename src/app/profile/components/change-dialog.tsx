import type { UserDataResponse } from "@/lib/constants/user-data";
import KYCChangeForm from "./kyc-change-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { useState } from "react";
const ChangeDialog = ({
  title,
  data,
  step,
  icon,
}: {
  title: string;
  data: UserDataResponse;
  step: number;
  icon?: boolean;
}) => {
  // State
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"link"} className="text-white underline hover:text-main">
          {icon ? (
            <RefreshCcw className="text-charcoal dark:text-white" size={24} />
          ) : (
            "Tab To Change"
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="dark:bg-charcoal bg-grayLight p-10 rounded-[40px]">
        <DialogHeader className="space-y-6">
          <DialogTitle className="text-2xl font-semibold text-main">Change {title}</DialogTitle>
          <DialogDescription></DialogDescription>
          <KYCChangeForm data={data} step={step} setOpen={setOpen} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeDialog;
