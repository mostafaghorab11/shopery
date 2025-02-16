import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";

type Props = {
  variant?: ButtonProps["variant"];
  className?: string;
  text?: string;
} & ButtonProps;

export default function ShopNowButton({
  variant = "default",
  className,
  text = "Shop Now",
}: Props & ButtonProps) {
  return (
    <Button
      size="lg"
      className={cn(
        {
          "rounded-full bg-white px-10 py-4 text-primary":
            variant === "default",
          "bg-transparent px-0 text-primary": variant === "ghost",
        },
        className,
      )}
      variant={variant}
    >
      <span className="text-base font-semibold leading-[19.2px]">{text}</span>
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
