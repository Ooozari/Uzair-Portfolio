import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

/* --- Headings --- */
const headingVariants = cva("", {
  variants: {
    level: {
      h1: "text-[36px] md:text-[40px] lg:text-[42px] xl:text-[44px] 2xl:text-[48px]",
      h3: "text-[22px] md:text-[24px]",
       // using
      lg: "text-[28px] md:text-[30px]",
      md: "text-[22px] md:text-[24px]",
      pageheading:
        "text-[28px] sm:text-[30px] md:text-[36px]",
        // using
      sectionheading:
        "text-[22px] sm:text-[24px] md:text-[30px]",
        // using
      sectionheadingmd:
        "text-[36px] sm:text-[40px] md:text-[48px]",
        // using
      sectionheadinglarge:
        "text-[22px] sm:text-[26px] md:text-[36px]",
    },
  },
  defaultVariants: { level: "h1" },
})

type HeadingLevel = NonNullable<VariantProps<typeof headingVariants>["level"]>


const headingTagMap: Record<HeadingLevel, keyof React.JSX.IntrinsicElements & keyof HTMLElementTagNameMap> = {
  h1: "h1",
  h3: "h3",
  lg: "h1",
  md: "h2",
  pageheading: "h1",
  sectionheading: "h3",
  sectionheadinglarge: "h2",
  sectionheadingmd: "h2",
}

interface HeadingProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headingVariants> {
  children: React.ReactNode
}


export function Heading({
  className,
  level = "h1",
  children,
  ...props
}: HeadingProps) {
  
  const Tag = headingTagMap[level as HeadingLevel] || "p"
  return (
    <Tag className={cn(headingVariants({ level }), className)} {...props}>
      {children}
    </Tag>
  )
}

/* --- Paragraph --- */
const paragraphVariants = cva("", {
  variants: {
    size: {
      xl3: "text-[18px] sm:text-[24px] md:text-[30px]",
      xxl: "text-[16px] sm:text-[18px] md:text-[20px]",
      xl: "text-[16px] md:text-[18px]", // using
      large: "text-[14px] md:text-[16px]", // using
      normal: "text-[12px] md:text-[14px]",
      n2: "text-[14px] md:text-[15px]",
      md: "text-[14px]",
      sm: "text-[12px]", // using
    },
  },
  defaultVariants: { size: "normal" },
})

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  children: React.ReactNode
}

export function Paragraph({
  className,
  size = "normal",
  children,
  ...props
}: ParagraphProps) {
  return (
    <p className={cn(paragraphVariants({ size }), className)} {...props}>
      {children}
    </p>
  )
}
