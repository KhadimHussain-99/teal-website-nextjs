"use client";
import footerlogo from "../../../public/assets/images/logo/logo-white.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="text-white px-2 bg-main body-font bg-teal-700">
        {/* {/  Container start /} */}

        <div className="container  lg:px-5 md:px-3 px-2 py-10 mx-auto flex items-center lg:items-start flex-col  ">
          <div className="grid xl:grid-cols-12 w-full lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-6 grid-cols-1  gap-5 gap-y-10">
            {/* {/  shipping details start /} */}

            <div className="md:col-span-3 col-span-12 w-full md:text-left space-y-4 ">
              <div className="w-full flex justify-center sm:justify-start">
                <Link className="rounded-lg px-2 py-1 bg-white" href="/">
                  <Image
                    width={140}
                    height={140}
                    className="w-40 object-contain"
                    src={footerlogo}
                    alt=""
                  />
                </Link>
              </div>
              <h1 className="text-xl font-semibold text-white text-center sm:text-start">
                Connect with Us
              </h1>

              <p className="mt-2 w-[100%] text-center sm:text-justify text-[13px] font-semibold text-[#d4d4d4] ">
                Stay updated with our latest offers, news, and events. Follow us
                on social media for exclusive deals and exciting updates!
              </p>
            </div>

            {/* {/  shipping details end /} */}

            {/* {/  Costomer Support start /} */}

            <div className="md:col-span-2 sm:col-span-3 col-span-12 flex flex-col items-center sm:items-start gap-3">
              <h1 className="text-xl font-semibold text-white">
                Customer Care
              </h1>

              <ul className="flex flex-col items-center sm:items-start gap-1">
                <Link href="/contact-us">
                  <li className="footer-link">Contact Us</li>
                </Link>
                <Link href="/help-center">
                  <li className="footer-link">Help Center</li>
                </Link>

                <Link href="/terms-and-conditions">
                  <li className="footer-link">Terms & Conditions</li>
                </Link>
                <Link href="">
                  <li className="footer-link">Privacy Policy</li>
                </Link>
              </ul>
            </div>

            {/* {/  Costomer Support end /} */}

            {/* {/  Teal start /} */}

            <div className="md:col-span-2 sm:col-span-3 col-span-12 flex flex-col items-center sm:items-start gap-3">
              <h1 className="text-xl font-semibold text-white ">Teal</h1>
              <ul className="flex flex-col items-center sm:items-start gap-1">
                <Link href="/about">
                  <li className="footer-link">About Us</li>
                </Link>
                <Link href="/hotels">
                  <li className="footer-link">Hotels</li>
                </Link>
                <Link href="/hotel-places">
                  <li className="footer-link">Hotel Detail</li>
                </Link>

                <Link href="/feeds">
                  <li className="footer-link">Social Media</li>
                </Link>
                <Link href="/blog">
                  <li className="footer-link">Blog</li>
                </Link>
              </ul>
            </div>

            {/* Important Links */}
            <div className="md:col-span-2 sm:col-span-3 col-span-12 flex flex-col items-center sm:items-start gap-3">
              <h1 className="text-xl font-semibold text-white ">
                Important Links
              </h1>
              <ul className="flex flex-col items-center sm:items-start gap-1">
                <Link href="/buddy-matching">
                  <li className="footer-link">Buddy Matching</li>
                </Link>
                <Link href="/buddy-matching">
                  <li className="footer-link">Buddy</li>
                </Link>
                <Link href="/forums">
                  <li className="footer-link">Forums</li>
                </Link>{" "}
                <Link href="/pricing">
                  <li className="footer-link">Pricing</li>
                </Link>
                <Link href="">
                  <li className="footer-link">Explore</li>
                </Link>
              </ul>
            </div>

            {/* Social Media Start */}
            <div className="md:col-span-2 sm:col-span-6 col-span-12 flex flex-col items-center sm:items-start gap-3">
              <h1 className="text-xl font-semibold text-white ">
                Social Media
              </h1>

              <div className="flex items-center flex-wrap gap-4">
                <Icon className="w-8 h-8 flex-grow-0" icon="devicon:facebook" />
                <Icon
                  className="w-8 h-8 flex-grow-0"
                  icon="skill-icons:instagram"
                />
                <Icon
                  className="w-8 h-8 flex-grow-0"
                  icon="logos:whatsapp-icon"
                />{" "}
                <Icon
                  className="w-8 h-8 flex-grow-0"
                  icon="skill-icons:twitter"
                />
              </div>
            </div>
            {/* Social Media End */}
          </div>
        </div>
        {/* {/ Container  end /} */}

        {/* {/ Copyright  start /} */}

        <div className=" flex justify-center items-center border-t  py-3">
          <div className=" flex   ">
            <p className="text-white text-sm my-5 sm:text-start text-center ">
              Copyright © 2024 - 2025 Teal®. All rights reserved.
            </p>
          </div>
        </div>
        {/* {/ Copyright  end /} */}
      </footer>
    </>
  );
}

export default Footer;
