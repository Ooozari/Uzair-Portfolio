"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import {Moon, Sun} from '@/assets/index'
import Image from "next/image";

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
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-yellow-400",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center bg-white rounded-full shadow-md text-base",
          "h-4 w-4 transition-transform duration-300",
          "data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1"
        )}
      >
        {checked ? (
          <Image 
          src={Moon}
          alt="Moon"/>
        ) : (
          <Image 
          src={Sun}
          alt="Sun"/>
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
