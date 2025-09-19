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
        "peer inline-flex h-[20px] w-[36px] md:h-6 md:w-12 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-colors",
        "data-[state=checked]:bg-[#000001] data-[state=unchecked]:bg-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center",
          "h-5 w-5 transition-transform duration-300 bg-none",
          // mobile (<md) translate shorter, md+ translate longer
          "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
          "md:data-[state=checked]:translate-x-6 md:data-[state=unchecked]:translate-x-[2px]"
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
