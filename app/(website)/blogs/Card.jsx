import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, desc, img }) => {
  return (
    <div className="col-span-1 flex flex-col gap-4 hover:shadow-xl rounded-md px-3 py-4">
      <Link href="/blog-detail">
        <Image
          width={300}
          height={250}
          className="w-full h-[150px] object-cover object-center rounded-t-md"
          src={img}
        />
      </Link>
      <div className="flex flex-col">
        <h6 className="text-sm sm:text-base md:text-xl text-ellipsis line-clamp-1">
          {title}
        </h6>
        <p className="text-[11px] sm:text-xs md:text-base md:leading-5 text-ellipsis line-clamp-4">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
