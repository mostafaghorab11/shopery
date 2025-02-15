import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

const selectVariants = cva(
  "inline-flex items-center text-center transition-colors duration-200",
  {
    variants: {
      size: {
        sm: "text-xs leading-default font-normal gap-1.5 !text-gray-900 !hover:text-gray-600",
        lg: "navbar-text gap-1",
      },
      active: {
        true: "text-white hover:text-white",
        false: "text-gray-400 hover:text-white",
      },
    },
    defaultVariants: {
      size: "sm",
      active: false,
    },
  },
);

interface SelectDropdownProps extends VariantProps<typeof selectVariants> {
  value: string;
  options: string[];
  onChange?: (value: string) => void;
  className?: string;
  isActive?: boolean;
  hasArrow?: boolean;
}

export function SelectDropdown({
  value,
  options,
  // onChange,
  className,
  size,
  isActive = false,
  hasArrow = true,
}: SelectDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(selectVariants({ size, active: isActive }), className)}
          variant="ghost"
          size="none"
        >
          {value}
          {hasArrow && (
            <ChevronDown
              className={cn(size === "lg" ? "h-5 w-5" : "h-4 w-4")}
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn("bg-gray-200", size === "lg" && "min-w-[150px]")}
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            className={cn(
              "text-black dark:text-white",
              size === "lg" && "py-2 text-base",
            )}
            // onClick={() => onChange?.(option)}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
