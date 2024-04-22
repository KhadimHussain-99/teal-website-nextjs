import React from "react";
import Link from "next/link";
import Image from "next/image";

const Places = ({ img }) => {
  return (
    <div className="w-full h-[205px] relative overflow-hidden group">
      <Image
        width={500}
        height={400}
        className="w-[100%] h-[100%] object-cover after:w-full after:h-full after:bg-black-500"
        src={img}
        alt=""
      />
      <div className="absolute w-full h-full top-0 -left-28 bg-gradient-to-r from-black-500 !bg-opacity-30" />
      <div className="absolute left-4 top-[170px] group-hover:top-14 transition-all duration-500 ease-in-out flex flex-col gap-3 capitalize text-white">
        <h4 className="text-white text-lg tracking-wide font-bold font-seaweed ">
          goa Tours
        </h4>
        <div className="flex items-center gap-6 text-sm ">
          <p className="flex flex-col items-start">
            <span>tours</span>
            <span className="tracking-wide font-bold font-seaweed mt-1">2</span>
          </p>
          <p className="flex flex-col items-start">
            <span>starting from</span>
            <span className="tracking-wide font-bold font-seaweed mt-1">
              $100
            </span>
          </p>
        </div>
        <Link
          href="/historical-places-detail"
          className="border border-white py-[6px]  px-3 hover:bg-primary-600 hover:border-primary-600 transition-all duration-300 ease-in-out"
        >
          view collections
        </Link>
      </div>
    </div>
  );
};

export default Places;
