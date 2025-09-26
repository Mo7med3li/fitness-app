import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import type { Control } from "react-hook-form";
import type { RegisterFields } from "@/lib/schemas/auth/register.schema";
import { useCallback, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Triangle } from "lucide-react";

interface Props {
  control: Control<RegisterFields>;
  name: "age" | "weight" | "height";
  label: string;
  range: number[];
  value?: number;
}

export default function NumberPicker({ control, name, label, range, value }: Props) {
  const [mainCarouselAPI, setMainCarouselAPI] = useState<CarouselApi | null>(null);

  const scrollTo = useCallback(
    (index: number, smooth = true) => {
      if (!mainCarouselAPI) return;
      mainCarouselAPI.scrollTo(index, smooth);
    },
    [mainCarouselAPI],
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedValue = field.value ?? value ?? range[0];
        const selectedIndex = range.indexOf(selectedValue);

        useEffect(() => {
          if (mainCarouselAPI && selectedIndex >= 0) {
            const centerIndex = Math.max(selectedIndex - 3, 0);
            mainCarouselAPI.scrollTo(centerIndex, false);

            if (!field.value) {
              field.onChange(selectedValue);
            }
          }
        }, [mainCarouselAPI, selectedIndex, selectedValue]);

        return (
          <FormItem className="w-full flex flex-col items-center">
            <FormLabel className="mb-4 text-base font-normal text-main">{label}</FormLabel>
            <FormControl>
              <div className="relative w-full max-w-sm">
                <Carousel
                  dir="ltr"
                  setApi={setMainCarouselAPI}
                  opts={{
                    align: "center",
                    watchDrag: true,
                    containScroll: "trimSnaps",
                    dragFree: true,
                  }}
                  className="w-full h-14"
                >
                  <CarouselContent className="flex items-center">
                    {range.map((num, index) => (
                      <CarouselItem key={num} className="flex-[0_0_14.28%]">
                        <div
                          onClick={() => {
                            field.onChange(num);
                            scrollTo(index);
                          }}
                          className={cn(
                            "cursor-pointer transition-all duration-300 font-extrabold",
                            selectedValue === num && "text-3xl font-bold text-main scale-125",
                            Math.abs(index - selectedIndex) === 1 && "text-xl scale-100",
                            Math.abs(index - selectedIndex) === 2 && "text-base scale-95",
                            Math.abs(index - selectedIndex) > 2 && "text-sm text-gray-400 scale-90",
                            num >= 100 && "text-2xl",
                          )}
                        >
                          {num}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <Triangle className="mx-auto text-main" fill="#FF4100" size={15} />
              </div>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
}
