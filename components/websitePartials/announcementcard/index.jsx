"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const AnnouncementCard = ({ title, desc, vector, btn }) => {
  return (
    <div className="flex flex-col items-center rounded-md px-2 sm:px-4 relative pt-6 sm:pt-8 pb-4 sm:pb-6 bg-white shadow">
      <Link
        href="/pricing"
        className="absolute font-medium top-4 left-4 bg-teal-600 px-3 pt-[5px] pb-[2px] rounded-full text-white text-xs"
      >
        Pro Feature
      </Link>
      <div className="w-full flex justify-center items-center">
        <Image
          className="w-full object-cover"
          width={250}
          height={250}
          src={vector}
          alt=""
        />
      </div>
      <h3 className="text-base sm:text-xl font-semibold mt-1 sm:mt-2">
        {title}
      </h3>
      <p className="text-xs sm:text-base text-center sm:leading-5 mt-1 sm:mt-2 text-ellipsis line-clamp-3">
        {desc}
      </p>
      <button className="text-xs sm:text-sm font-semibold hover:text-primary-600 transition-all duration-200 ease-in-out inline-flex justify-center items-center mt-2 sm:mt-4 group">
        <span className="">{btn}</span>
        <Icon
          className="w-8 h-4 group-hover:pl-4 transition-all duration-200 ease-in-out"
          icon="maki:arrow"
        />
      </button>
    </div>
  );
};

export default AnnouncementCard;
