import { Heart, MapPin, PhoneCall, Search } from "lucide-react";
import Link from "next/link";
import VerticalLine from "./VerticalLine";

import Image from "next/image";
import { SlHandbag } from "react-icons/sl";
import { SelectDropdown } from "./SelectDropDown";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NavBar() {
  return (
    <div>
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <MapPin className="text-gray-600" width={15} height={18} />
          <span className="text-xs font-normal leading-default text-gray-600">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
        </div>

        <div className="flex items-center gap-5">
          <SelectDropdown value="Eng" options={["Eng", "Ar"]} size="sm" />

          <SelectDropdown
            value="USD"
            options={["USD", "EUR", "GBP"]}
            size="sm"
          />

          <VerticalLine />
          <Link href="/sign-in">
            <p className="text-xs font-normal leading-default text-gray-600">
              Sign In / Sign Up
            </p>
          </Link>
        </div>
      </div>

      <hr className="h-px border-0 bg-gray-200 dark:bg-gray-700" />

      {/* Second Bar */}
      <div className="container flex h-[93px] items-center justify-between py-0">
        {/* Logo */}
        <Link href="/">
          <Image src="/Logo.png" alt="logo" width={183} height={38} />
        </Link>

        {/* Search Bar */}
        <div className="flex">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              height={15}
              width={15}
            />
            <Input
              placeholder="Search"
              className="w-[400px] rounded-l-lg rounded-r-none border border-gray-300 pl-10 text-gray-500 focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button className="rounded-l-none rounded-r-lg bg-primary text-white">
            Search
          </Button>
        </div>

        {/* Favorites and Cart icons */}
        <div className="flex items-center gap-4">
          <Link className="text-gray-900" href="/favorites">
            <Heart className="h-8 w-8 text-gray-900" />
          </Link>
          <VerticalLine />
          <Link className="relative" href="/cart">
            <SlHandbag className="h-8 w-8 text-gray-900" />
            <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-hard text-xs font-medium text-white">
              3
            </span>
          </Link>
          <div className="flex flex-col">
            <p className="text-xs font-normal leading-3">Shopping Cart:</p>
            <p className="leading-3.5 text-sm font-medium">$ 57.00</p>
          </div>
        </div>
      </div>

      {/* Third Bar */}
      <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
          <div className="flex gap-8">
            <SelectDropdown
              value="Home"
              options={["Home", "About", "Contact"]}
              size="lg"
              isActive
            />
            <SelectDropdown
              value="Shop"
              options={["Shop", "Sale", "New Arrivals"]}
              size="lg"
            />

            <SelectDropdown
              value="Pages"
              options={["Pages", "Services", "Blog"]}
              size="lg"
            />
            <Link
              href="/about"
              className="text-sm font-medium leading-[21px] text-gray-400 hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium leading-[21px] text-gray-400 hover:text-white"
            >
              Contact Us
            </Link>
          </div>

          {/* Phone Number */}
          <div className="flex gap-2">
            <PhoneCall className="text-white" width={20} height={20} />
            <p className="navbar-text text-white">(219) 555-0114</p>
          </div>
        </div>
      </div>
    </div>
  );
}
