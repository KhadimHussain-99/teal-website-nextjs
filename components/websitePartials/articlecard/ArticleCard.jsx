"use client";
import React from "react";
import Image from "next/image";

const ArticleCard = ({ title, image }) => {
  return (
    <div className=" flex items-center gap-4">
      <div className="w-60 md:w-80 h-32 xl:h-36 transition-all duration-300 ease-in-out hover:pb-2 cursor-pointer flex md:items-center xl:items-end">
        <Image
          width={200}
          height={200}
          className="w-full h-28 xl:h-32 object-cover rounded-md"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 xl:gap-2">
        <h6 className="font-semibold md:leading-5 xl:leading-6 text-sm sm:text-base xl:text-lg">
          {title}
        </h6>
        <span className="text-xs sm:text-sm md:text-base text-gray-500 font-medium">
          April 10, 2024
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
