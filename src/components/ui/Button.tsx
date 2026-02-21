import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
export * from "./Button";

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-lg font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:opacity-50 disabled:pointer-events-none",
    "cursor-pointer select-none",
  ].join(" "),
  {
    variants: {
      intent: {
        /* Solid dark primary */
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",

        /* Brand teal solid */
        accent:
          "bg-brand text-brand-foreground hover:bg-brand/90 active:bg-brand/80 glow-ring",

        /* Brand outline with glow */
        outline:
          "border-2 border-brand text-brand hover:bg-brand hover:text-brand-foreground glow-ring",

        /* Ghost — transparent with brand hover */
        ghost:
          "text-brand hover:bg-brand-muted active:bg-brand-muted/80",

        /* Subtle muted background */
        subtle:
          "bg-muted text-muted-foreground hover:bg-muted/80 active:bg-muted/60",

        /* Destructive */
        destructive:
          "bg-destructive text-primary-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
        xl: "h-12 px-6 text-base",
      },
      full: {
        true: "w-full",
        false: "",
      },
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
  VariantProps<typeof buttonStyles> { }

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

export { buttonStyles };
