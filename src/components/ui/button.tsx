import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...classes: Array<string | undefined | false>) {
  return twMerge(clsx(classes));
}

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md font-semibold transition focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        // Primary CTA (what you use now)
        primary:
          "bg-black text-white hover:bg-neutral-800 focus-visible:ring-[#1E9EB8]/40",

        // Teal solid (black text for contrast)
        accent:
          "bg-[#1E9EB8] text-black hover:bg-[#177E95] focus-visible:ring-[#177E95]/40",

        // Teal outline (nice secondary)
        outline:
          "border-2 border-[#1E9EB8] text-[#1E9EB8] hover:bg-[#1E9EB8] hover:text-black focus-visible:ring-[#1E9EB8]/40",

        ghost:
          "text-[#1E9EB8] hover:bg-[#1E9EB8]/10 focus-visible:ring-[#1E9EB8]/40",

        subtle:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-300",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
      },
      full: { true: "w-full", false: "" },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
      full: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, full, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonStyles({ intent, size, full }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
