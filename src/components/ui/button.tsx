import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CFF4A7] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#CFF4A7] text-[#11201D] hover:bg-[#bce691] shadow-sm font-bold active:scale-[0.98]",
        secondary:
          "bg-[#1D3130] text-white hover:bg-[#253E3B] border border-[#2B4543] active:scale-[0.98]",
        outline:
          "border border-[#2B4543] bg-transparent text-[#D6E3DE] hover:bg-[#1D3130] hover:text-white active:scale-[0.98]",
        ghost:
          "text-[#D6E3DE] hover:bg-[#1D3130] hover:text-white",
        destructive:
          "bg-red-900/40 text-red-200 border border-red-800 hover:bg-red-900/60",
        link:
          "text-[#CFF4A7] underline-offset-4 hover:underline p-0 h-auto",
        surface:
          "bg-white text-[#16211F] border border-[#E1E6E1] hover:border-[#1D3130]/40 shadow-sm active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-xl px-7 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
