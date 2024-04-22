import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Card = ({ title, desc, btn, img }) => {
  return (
    <div className="col-span-1 w-full flex flex-col bg-white rounded-lg shadow-md mb-8">
      <Image
        width={400}
        height={300}
        src={img}
        alt="marketing banner"
        className="w-full h-56 object-cover rounded-t-lg"
      />
      <div className=" p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-base text-gray-700 line-clamp-3 text-ellipsis">
          {desc}
        </p>
        <Link
          href="#"
          className="hover:text-primary-600 transition-all duration-300 ease-in-out inline-flex items-center justify-end group font-semibold "
        >
          {btn}{" "}
          <Icon
            className="group-hover:pl-3 w-7 h-3 transition-all duration-300 ease-in-out"
            icon={"maki:arrow"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Card;
