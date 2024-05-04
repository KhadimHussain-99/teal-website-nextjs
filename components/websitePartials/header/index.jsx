"use client";
import { useEffect, useState } from "react";
import logo from "../../../public/assets/images/logo/logo.png";
import { Icon } from "@iconify/react";
import Navbar from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond a certain threshold (e.g., 100 pixels)
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="">
      {/* Desktop Header Start */}
      <nav
        className={`w-[100%] ${location === "/" ? "" : "bg-white shadow-lg"} ${
          isScrolled ? "bg-white shadow-lg navbar" : ""
        }  hidden py-2 lg:flex items-center justify-between fixed top-0 transition duration-300 ease-in-out z-[999999999999999]  px-8`}
      >
        <Link href="/">
          <Image
            width={100}
            height={120}
            className={` w-32 h-12 cursor-pointer object-contain`}
            src={logo}
            alt="Teal logo"
          />
        </Link>
        <Navbar isScrolled={isScrolled} />
      </nav>
      {/* Desktop Header Start */}

      {/* Responsive Header Start */}
      <nav
        className={`${location === "/" ? "" : "bg-white shadow-lg"} ${
          isScrolled ? "bg-white shadow-lg navbar" : ""
        } h-14 lg:hidden flex justify-between px-2 items-center w-full fixed top-0 bg-transparent z-[999999999999999]`}
      >
        <Link href="/" className="flex item items-center px-2">
          <img className="w-20" src={logo} alt="Teal logo" />
        </Link>

        <div
          className={`flex items-center px-2 gap-5 ${
            isScrolled ? "text-gray-700" : "text-white"
          } ${location === "/" ? "" : "!text-gray-700"}`}
        >
          <Icon
            onClick={() => setSidebar(true)}
            className=" w-6 h-6"
            icon="ion:menu-outline"
          />
        </div>
      </nav>
      {/* Responsive Header End*/}
      {/* Sidebar start */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen transition-transform z-[1000000000000] ${
          sidebar ? "-translate-x-0" : "-translate-x-full"
        }  `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h4 className="px-2 py-3 text-xl font-bold flex justify-end">
            {/* Categories{" "} */}
            <Icon
              icon={"charm:cross"}
              className="cursor-pointer"
              onClick={() => setSidebar(false)}
            />
          </h4>
          <div className="flex flex-col gap-4">
            <div className="relative group">
              <Link
                href="/"
                className={`${
                  location === "/" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-shadow-none group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Home
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/about"
                className={`${
                  location === "/about" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                About Us
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/forums"
                className={`${
                  location === "/forums" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Forums
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/feeds"
                className={`${
                  location === "/feed" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Social Media
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/buddy-matching"
                className={`${
                  location === "/buddy-matching" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Buddy Matching
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/buddy"
                className={`${
                  location === "/buddy-matching/:url" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Buddy Matching Detail
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/shop"
                className={`${
                  location === "/hotels" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Shop
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/productdetail"
                className={`${
                  location === "/hotels/:url" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Shop Detail
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/hotels"
                className={`${
                  location === "/hotels" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Hotels
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/hotel-detail"
                className={`${
                  location === "/hotels/:url" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Hotel Detail
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/historical-places"
                className={`${
                  location === "/historical-places" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Historical Places
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/historical-place-detail"
                className={`${
                  location === "/historical-places/:url" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Historical Places Detail
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/community"
                className={`${
                  location === "/community" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Community
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/pricing"
                className={`${
                  location === "/pricing" ? "text-teal-600" : ""
                } text-lg font-semibold group-hover:text-teal-600 transition duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </aside>
      {/* Sidebar end */}
    </header>
  );
};

export default Header;
