"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { ChartContainer } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

const TOTAL_STEPS = 6;

interface StepProgressProps {
  step: number;
}

const chartConfig = {
  progress: {
    label: "Progress",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function StepRadialProgress({ step }: StepProgressProps) {
  const chartData = [{ name: "progress", value: step, fill: "var(--chart-1)" }];

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square h-16">
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={90 - (360 * step) / TOTAL_STEPS}
        innerRadius={27}
        outerRadius={22}
      >
        <RadialBar dataKey="value" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-base font-bold"
                    >
                      {step}/{TOTAL_STEPS}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
