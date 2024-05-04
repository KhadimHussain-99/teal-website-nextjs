"use client";
import React from "react";
import profile from "../../../public/assets/images/all-img/user.png";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ title, desc, blog, type }) => {
  return (
    <div className=" flex flex-col bg-white rounded-md shadow">
      <Link href="/blog" className="w-full h-[150px] sm:h-[180px]">
        <Image
          width={250}
          height={250}
          className="w-full h-full object-cover rounded-t-md"
          src={blog}
          alt="blog picture"
        />
      </Link>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex flex-col gap-1 h-[100px] md:h-[130px]">
          <div>
            <span
              className={`text-white text-[10px] sm:text-xs py-1 px-3 rounded-full ${
                type === "Nature"
                  ? "bg-blue-700"
                  : type === "Food"
                  ? "bg-orange-500"
                  : "bg-red-300"
              }`}
            >
              {type}
            </span>
          </div>
          <h6 className="text-sm sm:text-base md:text-lg text-ellipsis line-clamp-1">
            {title}
          </h6>
          <p className="text-[11px] sm:text-xs md:text-sm md:leading-5 text-ellipsis line-clamp-3">
            {desc}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              width={40}
              height={40}
              className="w-9 sm:w-10 h-9 sm:h-10 object-cover rounded-full"
              src={profile}
              alt="profile image"
            />
            <div className="flex flex-col">
              <h3 className="text-[13px] sm:text-sm font-semibold leading-4">
                Khadim Hussain
              </h3>
              <span className="text-xs text-gray-500">2 days ago</span>
            </div>
          </div>
          <span className="text-[10px] sm:text-xs md:text-sm self-end flex items-center font-medium text-black-600 gap-1 before:w-1 before:h-1 before:mb[2px] before:bg-black-600 before:rounded-full">
            8763 views
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
