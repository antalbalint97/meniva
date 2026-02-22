import * as React from "react";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────
   Input — Cyber-Enterprise form primitive
   Supports glow-ring focus via CSS variables
   ────────────────────────────────────────────── */

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-10 w-full rounded-lg border border-input bg-background px-4 py-2",
        "text-foreground text-sm placeholder:text-muted-foreground",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "glow-ring",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

/* ──────────────────────────────────────────────
   Textarea — matching form primitive
   ────────────────────────────────────────────── */

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-input bg-background px-4 py-3",
        "text-foreground text-sm placeholder:text-muted-foreground",
        "transition-all duration-200 resize-y",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "glow-ring",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

/* ──────────────────────────────────────────────
   Label — form label primitive
   ────────────────────────────────────────────── */

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "block text-sm font-medium text-foreground mb-1.5",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Input, Textarea, Label };
