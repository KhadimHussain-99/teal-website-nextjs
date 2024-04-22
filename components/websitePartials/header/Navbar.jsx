"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ isScrolled }) => {
  const location = usePathname();
  const [menu, setMenu] = useState("");

  return (
    <div
      className={`flex items-center gap-6 xl:gap-10 ${
        isScrolled ? "text-gray-700" : "text-white"
      } ${location === "/" ? "" : "!text-gray-700"}`}
    >
      <div className="relative group">
        <Link
          href="/"
          className={`${
            location === "/" ? "text-teal-600" : ""
          } text-base font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
        >
          Home
        </Link>
      </div>
      <div className="relative group">
        <Link
          href="/about"
          className={`${
            location === "/about" ? "text-teal-600" : ""
          } text-base font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
        >
          About Us
        </Link>
      </div>
      <div className="relative group">
        <Link
          href="/forums"
          className={`${
            location === "/forums" ? "text-teal-600" : ""
          } text-base font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
        >
          Forums
        </Link>
      </div>
      <div className="relative group">
        <Link
          href="/buddy-matching"
          className={`${
            location === "/buddy-matching" ? "text-teal-600" : ""
          } text-base font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
        >
          Buddy Matching
        </Link>
      </div>
      <div className="relative group">
        <Link
          href="/blogs"
          className={`${
            location === "/blog" ? "text-teal-600" : ""
          } text-base font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
        >
          Blogs
        </Link>
      </div>
      <div
        onMouseEnter={() => setMenu("explore")}
        onMouseLeave={() => setMenu("")}
        className="relative group"
      >
        <h1
          className={`${isScrolled ? "" : "text-white"} ${
            location === "/" ? "" : "!text-gray-700"
          } text-base font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
        >
          Explore <Icon icon="ep:arrow-down-bold" />
        </h1>
        {menu === "explore" && (
          <div className="text-gray-700 absolute z-50 w-[180px] top-50 -left-10 flex flex-col justify-center px-4 transition-all duration-300 ease-in-out bg-white shadow-xl rounded-lg gap-2 py-4">
            <Link
              className="hover:pl-2 hover:text-primary-600 transition-all duration-300 ease-in-out"
              href="/feeds"
            >
              Social Media
            </Link>
            <Link
              className="hover:pl-2 hover:text-primary-600 transition-all duration-300 ease-in-out"
              href="/community"
            >
              Community
            </Link>
            <Link
              className="hover:pl-2 hover:text-primary-600 transition-all duration-300 ease-in-out"
              href="/hotels"
            >
              Hotels
            </Link>
            <Link
              className="hover:pl-2 hover:text-primary-600 transition-all duration-300 ease-in-out"
              href="/hotel-detail"
            >
              Hotel Detail
            </Link>
            <Link
              className="hover:pl-2 hover:text-primary-600 transition-all duration-300 ease-in-out"
              href="/historical-places"
            >
              Historical Places
            </Link>
            <Link
              className="hover:pl-2 hover:text-primary-600 transition-all duration-300 ease-in-out"
              href="/place"
            >
              Historical Place Detail
            </Link>
            <Link
              className="hover:pl-2 hover:text-primary-600 transition-all duration-300 ease-in-out"
              href="/shop"
            >
              Online Shopping
            </Link>
            <Link
              className="hover:pl-2 hover:text-primary-600 transition-all duration-300 ease-in-out"
              href="/product-detail"
            >
              Product Detail
            </Link>
            <Link
              className="hover:pl-2 hover:text-primary-600 transition-all duration-300 ease-in-out"
              href="/pricing-plans"
            >
              Pricing
            </Link>
          </div>
        )}
      </div>
      <button
        className={` bg-teal-700 hover:bg-teal-500 text-white text-base font-semibold  transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer rounded-md px-4 py-1`}
      >
        Login
      </button>
      <button
        className={` bg-teal-700 hover:bg-teal-500 text-white text-base font-semibold  transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer rounded-md px-4 py-1`}
      >
        Sigup
      </button>
    </div>
  );
};

export default Navbar;
