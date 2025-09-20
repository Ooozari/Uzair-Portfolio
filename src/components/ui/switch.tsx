"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "@/svgs/Icons";


function Switch({
  className,
  checked,
  onCheckedChange,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={cn(
        "peer inline-flex h-[16px] w-[30px] md:h-[20px] md:w-[36px] shrink-0 items-center rounded-full border border-transparent shadow-xs transition-colors",
        "bg-page-bg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center",
          "h-4 w-4 transition-transform duration-300 bg-none",
          "data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0",
          "md:data-[state=checked]:translate-x-[18px] md:data-[state=unchecked]:translate-x-[1px]"
        )}
      >
        {checked ? (
          <Moon /> 
        ) : (
          <Sun /> 
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
