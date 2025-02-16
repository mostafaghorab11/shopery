import Image from "next/image";
import ShopNowButton from "./ShopNowButton";
import { cn } from "@/lib/utils";

type Variant = "light" | "dark";

interface SmallCardProps {
  image: string;
  variant?: Variant;
  label?: string;
  title: string;
  subtitle?: string;
  imageFlip?: boolean;
  className?: string;
}

const variants = {
  light: {
    container: "items-start",
    label: "text-gray-900",
    title: "text-gray-900",
    subtitle: "text-gray-600",
    overlay: "bg-transparent",
  },
  dark: {
    container: "items-center text-center",
    label: "text-white",
    title: "text-white",
    subtitle: "text-white/80",
    overlay: "bg-[#002603]/80",
  },
};

export default function SmallCard({
  image,
  variant = "light",
  label,
  title,
  subtitle,
  imageFlip = false,
  className,
}: SmallCardProps) {
  return (
    <div className="group relative block h-full w-full overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            "scale-125 object-cover transition-transform duration-300",
            imageFlip && "scale-x-[-1]"
          )}
          priority
        />
      </div>

      {/* Overlay */}
      <div className={cn("absolute inset-0", variants[variant].overlay)} />

      {/* Content */}
      <div className={cn(
        "relative z-10 flex h-full flex-col justify-center gap-3 p-8",
        variants[variant].container,
        className
      )}>
        {label && (
          <p className={cn(
            "body-text-md uppercase leading-[14px]",
            variants[variant].label
          )}>
            {label}
          </p>
        )}
        <p className={cn(
          "text-[32px] font-semibold leading-[38.4px]",
          variants[variant].title
        )}>
          {title}
        </p>
        {subtitle && (
          <p className={cn(
            "body-text-md font-normal",
            variants[variant].subtitle
          )}>
            {subtitle}
          </p>
        )}
        <ShopNowButton variant="ghost" />
      </div>
    </div>
  );
}