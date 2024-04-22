"use client";
import React from "react";
import profile from "../../../public/assets/images/all-img/thumb-5.png";
import Image from "next/image";

const FeedsCard = ({ tag, img }) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 text-gray-900 rounded-lg p-2 sm:p-3 bg-white shadow">
      <div className="relative w-full h-[150px] sm:h-[170px] md:h-[200px] overflow-hidden">
        <Image
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-lg"
          src={img}
          alt=""
        />
        <span className="absolute top-5 -left-3 bg-red-300 text-xs rounded-full py-1 text-gray-800 font-semibold pl-8 pr-4">
          {tag}
        </span>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Image
            width={100}
            height={100}
            className="w-9 sm:w-10 h-9 sm:h-10 object-cover rounded-full"
            src={profile}
            alt="profile image"
          />
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold">Zohaib Ali</h3>
            <span className="text-[11px] sm:ext-xs text-gray-500">
              1 hour ago
            </span>
          </div>
        </div>
        <button className="px-[10px] sm:px-3 py-[2px] sm:py-1 font-medium text-[10px] sm:text-xs rounded-full bg-teal-700 text-white">
          Follow
        </button>
      </div>
      <div className="">
        <h5 className="text-sm sm:text-lg font-semibold">
          Travel Inspiration Feed
        </h5>
        {/* <p className="leading-5 text-sm text-gray-600 mt-1">
          Explore the latest travel stories, tips, and destinations from fellow
          travelers around the globe.
        </p> */}
      </div>
    </div>
  );
};

export default FeedsCard;
