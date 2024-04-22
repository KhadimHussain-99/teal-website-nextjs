import React from "react";
import profile from "../../../public/assets/images/all-img/thumb-4.png";
import Image from "next/image";

const GroupCard = ({ join, displaySec }) => {
  return (
    <div className="flex flex-col gap-4 px-2 sm:px-4 lg:px-3 xl:px-4 py-3 sm:py-6 lg:py-4 xl:py-6 bg-white rounded-md">
      <div className="flex items-center justify-between ">
        <div onClick={displaySec} className="flex items-center gap-2 ">
          <div className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              className="w-6 md:w-10 h-6 md:h-10 object-cover rounded-full"
              src={profile}
              alt="profile image"
            />
            <div className="flex flex-col">
              <h3
                id="group"
                className="text-sm md:text-lg lg:text-base xl:text-lg font-semibold cursor-pointer truncate"
              >
                Digital Elliptical
              </h3>
              <span className="text-[10px] md:text-xs text-gray-500">
                103k members
              </span>
            </div>
          </div>
        </div>
        <button
          className={`px-2 md:px-3 py-[2px] md:py-1 font-semibold text-xs md:text-xs rounded-full ${
            join
              ? "bg-teal-700 text-white"
              : "border border-primary-600 text-primary-600"
          } `}
        >
          {join ? "join" : "joined"}{" "}
        </button>
      </div>
      <p className="text-xs md:text-sm text-gray-500">
        Digital Elliptical specializing in software development, offering a
        range of services such as custom software solutions, web and mobile app
        development, and IT consulting.
      </p>
    </div>
  );
};

export default GroupCard;
