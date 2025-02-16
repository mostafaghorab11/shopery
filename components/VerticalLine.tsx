import { cn } from "@/lib/utils";

interface VerticalLineProps {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
}

export default function VerticalLine({
  color = "bg-gray-100",
  height = "min-h-[1em]",
  width = "w-0.5",
  className,
}: VerticalLineProps) {
  return (
    <div
      className={cn(
        "dark:bg-white/10 inline-block self-stretch",
        height,
        width,
        color,
        className,
      )}
    />
  );
}
