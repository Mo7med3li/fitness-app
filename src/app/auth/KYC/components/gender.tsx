import type { Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Mars, Venus } from "lucide-react";
import type { RegisterFieleds } from "@/lib/schemas/register.schema";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface Props {
  control: Control<RegisterFieleds>;
}

export default function Gender({ control }: Props) {
  // Translation
  const {t} = useTranslation();

  return (
    <div className="w-full bg-red-">
      <FormField
        control={control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel></FormLabel>
            <FormControl>
              <div className="flex gap-4 justify-center">
                <Button
                  type="button"
                  size="icon"
                  onClick={() => field.onChange("male")}
                  className={cn(
                    field.value === "male"
                      ? "border-main [&_svg]:text-main text-main"
                      : "border-white",
                    "bg-transparent border rounded-full size-22 [&_svg]:size-12 hover:bg-transparent hover:border-main flex flex-col"
                  )}
                >
                  <Mars strokeWidth="1" />
                  <span
                    className={cn(
                      field.value === "male" ? "text-main" : "text-white",
                      "font-semibold text-xs"
                    )}
                  >
                    {t('male')}
                  </span>
                </Button>

                <Button
                  type="button"
                  size="icon"
                  onClick={() => field.onChange("female")}
                  className={cn(
                    field.value === "female"
                      ? "border-main [&_svg]:text-main"
                      : "border-white",
                    "bg-transparent border rounded-full size-22 [&_svg]:size-12 hover:bg-transparent hover:border-main flex flex-col"
                  )}
                >
                  <Venus strokeWidth="1" />
                  <span
                    className={cn(
                      field.value === "female" ? "text-main" : "text-white",
                      "font-semibold text-xs"
                    )}
                  >
                    {t('female')}
                  </span>
                </Button>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
