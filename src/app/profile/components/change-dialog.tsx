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
const ChangeDialog = ({
  title,
  data,
  step,
}: {
  title: string;
  data: UserDataResponse;
  step: number;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="text-white underline hover:text-main">
          Tab To Change
        </Button>
      </DialogTrigger>
      <DialogContent className="dark:bg-charcoal bg-grayLight p-10 rounded-[40px]">
        <DialogHeader className="space-y-6">
          <DialogTitle className="text-2xl font-semibold text-main">Change {title}</DialogTitle>
          <DialogDescription></DialogDescription>
          <KYCChangeForm data={data} step={step} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeDialog;
