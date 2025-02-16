import Image from "next/image";
import ShopNowButton from "./ShopNowButton";
import VerticalLine from "./VerticalLine";

interface HeroCardProps {
  image: string;
  titleTop?: string;
  titleBottom?: string;
}

export default function HeroCard({
  image,
  titleTop,
  titleBottom,
}: HeroCardProps) {
  return (
    <div className="group relative block h-full w-full overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={titleTop || ""}
          fill
          className="scale-125 object-cover transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-70" />

      {/* Content */}
      <div className="relative z-10 ml-[60px] flex h-full flex-col items-start justify-center gap-7">
        <h2 className="text-5xl font-semibold leading-[57.6px] text-white">
          {titleTop && <div>{titleTop}</div>}
          {titleBottom && <div>{titleBottom}</div>}
        </h2>
        <div className="flex gap-3">
          <VerticalLine color="bg-primary-soft" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="body-text-xl text-white">Sale up to</span>
              <span className="body-text-xl rounded bg-warning px-3 py-1 !font-semibold text-white">
                30% OFF
              </span>
            </div>
            <div className="body-text-md font-normal text-gray-300">
              Free shipping on all your orders
            </div>
          </div>
        </div>
        <ShopNowButton />
      </div>
    </div>
  );
}
