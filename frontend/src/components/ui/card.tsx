import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[24px] border border-white/80 bg-white p-8 shadow-lg shadow-black/[0.08]",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card } 