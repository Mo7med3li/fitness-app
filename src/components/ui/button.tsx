import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const buttonVariants = cva(
  "inline-flex relative py-2 px-5 items-center justify-center gap-2 whitespace-nowrap rounded-[20px] text-base font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-grayLight [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-main text-primary-foreground hover:bg-main/80 dark:text-white",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-main hover:text-accent-foreground border border-main",
        link: "text-primary underline-offset-4 hover:underline text-main",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  icon?: () => React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, icon, isLoading, asChild = false, children, disabled, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";

  const renderIcon = () => {
    if (isLoading) {
      return <LoaderCircle className="mt-[2px] size-[20px] animate-spin" />;
    }

    if (icon) {
      return (
        <div className="absolute bg-main rounded-full size-8 border-2 border-grayExtra text-grayExtra flex items-center justify-center -right-5 top-1/2 -translate-y-1/2 -rotate-45">
          {icon()}
        </div>
      );
    }

    return null;
  };

  const content = (
    <>
      {children}
      {renderIcon()}
    </>
  );

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={isLoading || disabled}
      {...props}
    >
      {asChild ? children : content}
    </Comp>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
