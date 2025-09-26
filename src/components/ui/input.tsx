"use client";

import { cn } from "@/lib/utils";
import { Eye, EyeOff, Lock, Mail, Search, User } from "lucide-react";
import * as React from "react";

const baseClasses =
  "flex w-full bg-transparent rounded-[20px] border border-grayNeutral py-2 py-4 text-base dark:text-grayLight text-charcoal shadow-xs transition-colors placeholder:text-sm placeholder:dark:text-grayLight placeholder:text-charcoal placeholder:capitalize hover:border-main focus-visible:border-main focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-100 md:text-sm";
const iconClassBasses =
  "absolute top-1/2 z-50 size-5 -translate-y-1/2 cursor-pointer dark:text-grayLight text-charcoal";
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  // state
  const [hide, setHide] = React.useState(true);

  // Functions
  const toggleType = () => {
    setHide(!hide);
  };
  // Input type search
  if (type === "search") {
    return (
      <div className="relative">
        <input
          type={type}
          data-slot="input"
          className={cn(baseClasses, "relative ps-10", className)}
          {...props}
        />
        <Search className={cn(iconClassBasses, "start-3", props.disabled)} />
      </div>
    );
  }
  if (type === "text") {
    return (
      <div className="relative">
        <input
          type={type}
          data-slot="input"
          className={cn(baseClasses, "relative ps-10", className)}
          {...props}
        />
        <User className={cn(iconClassBasses, "start-3", props.disabled)} />
      </div>
    );
  }

  // Input type password
  if (type === "password") {
    return (
      <div className="relative">
        <Lock className={cn(iconClassBasses, "start-3", props.disabled)} />
        <input
          type={hide ? "password" : "text"}
          data-slot="input"
          className={cn(baseClasses, "relative ps-10", className)}
          {...props}
        />
        {hide ? (
          <Eye className={cn(iconClassBasses, "end-4", props.disabled)} onClick={toggleType} />
        ) : (
          <EyeOff className={cn(iconClassBasses, "end-4", props.disabled)} onClick={toggleType} />
        )}
      </div>
    );
  }

  // Input type email
  if (type === "email") {
    return (
      <div className="relative">
        <input
          type={type}
          data-slot="input"
          className={cn(baseClasses, "relative ps-10", className)}
          {...props}
        />
        <Mail className={cn(iconClassBasses, "start-3", props.disabled)} />
      </div>
    );
  }
  return <input type={type} className={cn(baseClasses, className)} {...props} />;
}

export { Input };
