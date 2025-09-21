import type { Control } from "react-hook-form";
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import type { RegisterFields } from "@/lib/schemas/register.schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface Props {
  control: Control<RegisterFields>;
  fieldName: "activityLevel" | "goal";
  items: {
    key: string;
    label: string;
  }[];
}

export default function MultiRadio({ fieldName, control, items }: Props) {
  //   Translation
  const { i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <div className="w-64 mx-auto">
      <FormField
        control={control}
        name={fieldName}
        render={({ field }) => (
          <FormItem>
            <FormLabel></FormLabel>
            <FormControl>
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex flex-col gap-4"
              >
                {items.map((item) => (
                  <FormItem key={item.key} className="w-full">
                    <FormLabel
                      className={cn(
                        field.value === item.key ? "border-main text-main" : "border-neutral-300",
                        locale === "ar" ? "flex-row" : "flex-row-reverse",
                        "flex w-full items-center justify-between gap-2 border rounded-2xl py-4 px-4 cursor-pointer bg-[#d3d3d31a]",
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem
                          value={item.key}
                          className={cn(
                            field.value === item.key && "text-main",
                            "border-neutral-300",
                          )}
                        />
                      </FormControl>
                      <span className="font-bold">{item.label}</span>
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
