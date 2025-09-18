"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

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
        "peer inline-flex h-6 w-12 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-colors",
        "data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-yellow-400",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center bg-white rounded-full shadow-md text-base",
          "h-5 w-5 transition-transform duration-300",
          "data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1"
        )}
      >
        {checked ? "🌙" : "🌞"}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
