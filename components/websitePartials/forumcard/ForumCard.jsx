"use client";
import React from "react";
import profile from "../../../public/assets/images/all-img/user.png";
import { Icon } from "@iconify/react";
import Image from "next/image";

const ForumCard = () => {
  return (
    <div className="col-span-1 flex flex-col bg-black-100 p-4 rounded-md">
      <div className="w-full flex items-center gap-2">
        <Image
          width={100}
          height={100}
          className="w-10 h-10 object-cover object-center"
          src={profile}
          alt=""
        />
        <div className="flex flex-col">
          <h3 className="text-base">User Name</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm">dummy user</span>
            <span
              className={`text-[8px] sm:text-[10px] flex items-center text-black-600 gap-1 before:w-1 before:h-1 before:mb[2px] before:bg-black-600 before:rounded-full`}
            >
              1 hour ago
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-black-400 leading-5 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quam
        deleniti, nisi sunt at explicabo minima .
      </p>
      <div className="flex items-center justify-between text-sm mt-2">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" icon="uiw:like-o" />
          120 votes
        </div>
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5" icon="fluent:comment-20-regular" />
          70 comments
        </div>
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" icon="gravity-ui:eye" />
          120 views
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
