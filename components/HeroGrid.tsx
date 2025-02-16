import HeroCard from "./HeroCard";
import SmallCard from "./SmallCard";

export default function HeroGrid() {
  return (
    <div className="container m-6 grid h-[600px] grid-cols-3 gap-6">
      {/* Left Large Card */}
      <div className="col-span-2 h-full">
        <HeroCard
          image="/cards/hero_card.jpeg"
          titleTop="Fresh & Healthy"
          titleBottom="Organic Food"
        />
      </div>

      {/* Right Column Cards */}
      <div className="col-span-1 flex h-full flex-col gap-6">
        <div className="h-1/2">
          <SmallCard
            variant="light"
            image="/cards/topright_card.jpeg"
            label="Summer Sale"
            title="75% Off"
            subtitle="Only Fruits & Vegetables"
            imageFlip={true}
          />
        </div>
        <div className="h-1/2">
          <SmallCard
            variant="dark"
            image="/cards/bottomright_card.jpeg"
            label="Best Deal"
            title="Special Products Deal of the Month"
            className="hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
