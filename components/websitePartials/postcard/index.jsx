import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Image from "next/image";

const PostCard = ({ data, comments }) => {
  const [comment, setComment] = useState(false);

  return (
    <div className="bg-white rounded-md flex flex-col p-4 lg:p-6 shadow-md">
      <div className="w-full flex justify-between items-start lg:items-center ">
        <div className="flex gap-4 items-start">
          <Image
            width={100}
            height={100}
            className="w-14 lg:w-16 h-14 lg:h-16 rounded-full"
            src={data?.author?.profileImg}
            alt="no profile"
          />
          <div className="flex flex-col">
            <div className="flex flex-col text-base lg:text-lg font-semibold ">
              <div className="w-[80%] sm:w-full flex items-center gap-2">
                <span className="text-ellipsis line-clamp-1">
                  {data?.author?.username}
                </span>
                <Icon
                  className="w-5 h-5 text-blue-500"
                  icon="material-symbols:verified"
                />
              </div>
              <span className="flex gap-2 text-sm text-black-400 font-normal">
                posted an update
              </span>
            </div>
            <span className="text-sm text-black-400 mt-1 lg:mt-2">
              {Math.round(Math.random() + 1) * 5} days ago
            </span>
          </div>
        </div>
        <div className="flex gap-4 lg:items-center">
          <button className="pb-2 text-blue-500">
            <Icon icon="bi:pin" />
          </button>
          <button>
            <Icon icon="entypo:dots-three-horizontal" />
          </button>
        </div>
      </div>
      <div className="w-full h-[250px] sm:h-[350px] md:h-[480px] lg:h-[420px] my-4 lg:my-6 ">
        <Image
          width={500}
          height={400}
          className="w-full h-full object-cover"
          src={data?.postImg}
          alt=""
        />
      </div>
      <hr />
      <div className="w-full flex justify-between items-center mt-4 lg:mt-6 text-black-400">
        <button className="flex items-center gap-1">
          <Icon className="w-4 h-4 sm:w-6 sm:h-6 " icon="subway:like" />
          Like
        </button>
        <button
          onClick={() => setComment((prev) => !prev)}
          className="flex items-center gap-1 !self-start"
        >
          <Icon
            className="w-4 h-4 sm:w-6 sm:h-6 "
            icon="iconamoon:comment-dots-light"
          />
          comment
        </button>
        <button className="flex items-center gap-1">
          <Icon className="w-4 h-4 sm:w-6 sm:h-6 " icon="ooui:share" />
          Share
        </button>
      </div>
      {comment && (
        <>
          <div className="flex flex-col mt-4 lg:mt-6 rounded-md bg-black-100 shadow">
            <div className="flex justify-between items-center px-2 lg:px-4 py-1 lg:py-2">
              <input
                className="w-[95%] outline-none p-2 bg-transparent"
                placeholder="type comment here..."
                type="text"
              />{" "}
              <button className="w-6 lg:w-8 h-6 lg:h-8 mr-1">
                <Icon className="w-full h-full" icon="iconoir:send" />
              </button>
            </div>
          </div>
          <div className="w-full  h-[120px] lg:h-[250px] overflow-y-auto scrollbar flex flex-col gap-4 mt-4">
            {Array.from({ length: 4 }).map((item, index) => (
              <>
                <div className="flex gap-2">
                  <Image
                    width={100}
                    height={100}
                    className="w-10 h-10 rounded-full object-cover shadow"
                    src={data?.author?.profileImg}
                    alt="profile"
                  />
                  <div className="flex flex-col bg-black-100 rounded-3xl p-4 shadow">
                    <h6 className="text-sm sm:text-base font-semibold">
                      {data?.author?.username}
                    </h6>
                    <p className="text-xs sm:text-sm">it sounds amazing!!! </p>
                  </div>
                </div>
                <div className="flex flex-row-reverse gap-2">
                  <Image
                    width={100}
                    height={100}
                    className="w-10 h-10 rounded-full object-cover shadow"
                    src={data?.author?.profileImg}
                    alt="profile"
                  />
                  <div className="flex flex-col bg-teal-100 rounded-3xl p-4 shadow">
                    <h6 className="text-sm sm:text-base font-semibold">
                      {data?.author?.username}
                    </h6>
                    <p className="text-xs sm:text-sm">it sounds amazing!!! </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PostCard;
