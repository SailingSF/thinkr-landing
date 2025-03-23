import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-600",
        destructive: "bg-red-700 text-white hover:bg-red-800 focus:ring-red-500",
        outline: "border-2 border-gray-600 bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900",
        secondary: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-700",
        ghost: "hover:bg-gray-200 text-gray-900 hover:text-black",
        link: "text-blue-700 underline-offset-4 hover:underline focus:ring-blue-500",
        outlineCustom: "border-2 border-primary-600 bg-white text-primary-700 hover:bg-primary-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  textColor?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, textColor, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const extraProps = asChild ? {} : { role: "button" as const }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={{ 
          ...style, 
          color: textColor ? textColor : undefined,
          borderColor: variant === 'outlineCustom' ? (textColor || 'hsl(var(--primary-600))') : undefined 
        }}
        {...extraProps}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

