import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import type { Control } from "react-hook-form";
import type { RegisterFieleds } from "@/lib/schemas/register.schema";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { Triangle } from "lucide-react";

interface Props {
  control: Control<RegisterFieleds>;
  name: "age" | "weight" | "height";
  label: string;
  range: number[];
}

export default function NumberPicker({ control, name, label, range }: Props) {
  // States
  const [mainCarouselAPI, setMainCarouselAPI] = useState<CarouselApi | null>(
    null
  );

  // Functions
  // Scroll to for the main carousel
  const scrollTo = useCallback(
    (index: number) => {
      if (!mainCarouselAPI) return;

      mainCarouselAPI.scrollTo(index);
      console.log(index);
    },
    [mainCarouselAPI]
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full flex flex-col items-center">
          {/* Msurment */}
          <FormLabel className="mb-4 text-base font-normal text-main">
            {label}
          </FormLabel>
          <FormControl>
            <div className="relative w-full max-w-sm">
              <Carousel
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
                    //there was a broplem with basis 1/7 so i hardcoded it
                    <CarouselItem key={num} className="flex-[0_0_14.28%]">
                      <div
                        onClick={() => {
                          field.onChange(num);
                          scrollTo(index - 3);
                        }}
                        className={cn(
                          "cursor-pointer transition-all duration-300 font-extrabold",
                          field.value === num &&
                            "text-3xl font-bold text-main scale-125",
                          Math.abs(index - range.indexOf(field.value)) === 1 &&
                            "text-xl scale-100",
                          Math.abs(index - range.indexOf(field.value)) === 2 &&
                            "text-base scale-95",
                          Math.abs(index - range.indexOf(field.value)) > 2 &&
                            "text-sm text-gray-400 scale-90",
                          num >= 100 && "text-2xl" // layout was breaking if number bigger than 100 or 3 degets
                        )}
                      >
                        {num}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <Triangle
                className="mx-auto text-main"
                fill="#FF4100"
                size={15}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
