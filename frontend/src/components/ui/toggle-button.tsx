import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

// Used to toggle the todo item
const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        variant="ghost"
        size="icon"
        type="button"
        className={cn(
          "h-5 w-5 p-0 rounded-full border-2 transition-all flex items-center justify-center shrink-0",
          "data-[state=checked]:bg-[#18C964]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
ToggleButton.displayName = "ToggleButton"

export { ToggleButton } 