import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-mono font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-[#CFF4A7]/15 border border-[#CFF4A7]/30 text-[#CFF4A7]",
        secondary:
          "bg-[#182C29] border border-[#2B4543] text-[#D6E3DE]",
        outline:
          "border border-[#2B4543] text-[#A4B8B2]",
        verified:
          "bg-emerald-950/50 border border-emerald-500/30 text-emerald-300",
        destructive:
          "bg-red-950/50 border border-red-500/30 text-red-300",
        warning:
          "bg-amber-950/50 border border-amber-500/30 text-amber-300",
        solidLime:
          "bg-[#CFF4A7] text-[#11201D] font-bold shadow-xs",
        paper:
          "bg-white border border-[#E1E6E1] text-[#16211F] font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
  key?: React.Key;
  className?: string;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
