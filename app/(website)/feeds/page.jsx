"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Card from "@/components/ui/Card";
import PostCard from "../../../components/websitepartials/postcard";
import Image from "next/image";
import { posts } from "@/constant/data";

export default function Feeds() {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);

  // data fetching
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://192.168.0.118:3000/api/posts");
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComment(res.data);
        setData(data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="sm:container mx-4 sm:mx-auto grid grid-cols-6 gap-6 my-8 relative">
      <div className="w-full col-span-6 lg:col-span-4 grid grid-cols-1 gap-8 h-full overflow-y-auto scrollbar">
        <div className="w-[100%] h-[150px] lg:h-[200px] col-span-1 flex items-center gap-3 overflow-x-scroll scrollbar rounded-md pl-4 pt-4 pb-6 bg-white shadow">
          {posts &&
            posts.map((item, index) => (
              <div
                key={index}
                className="relative min-w-[80px] lg:min-w-[100px] h-[80px] lg:h-[120px] rounded-md"
              >
                <Image
                  width={500}
                  height={400}
                  className="w-full h-full object-cover rounded-md"
                  src={item?.postImg}
                  alt=""
                />
                <Image
                  width={100}
                  height={100}
                  className="absolute -bottom-6 left-5 lg:left-6 w-10 lg:w-12 h-10 lg:h-12 rounded-full object-cover"
                  src={item?.author?.profileImg}
                  alt=""
                />
              </div>
            ))}
        </div>

        {posts &&
          posts.map((item, index) => (
            <PostCard key={index} data={item} comments={comment} />
          ))}
      </div>

      <div className="col-span-6 lg:col-span-2 flex flex-col gap-6 ">
        <Card noborder title="Active User">
          <p>There are no recently active members</p>
        </Card>

        <Card
          className="lg:sticky top-20 lg:h-[80vh] overflow-y-auto scrollbar"
          noborder
          title="Latest Activites"
          bodyClass="flex flex-col gap-4 p-4"
        >
          {posts &&
            posts.map((item, index) => (
              <div className="bg-white rounded-md flex flex-col ">
                <div key={index} className="w-full flex justify-between ">
                  <div className="flex gap-4 items-start">
                    <Image
                      width={100}
                      height={100}
                      className="w-14 xl:w-16 h-14 xl:h-16 rounded-full"
                      src={item?.author?.profileImg}
                      alt="no profile"
                    />
                    <div className="flex flex-col">
                      <h5 className="flex flex-col text-base xl:text-lg font-semibold ">
                        <div className="flex items-center gap-2">
                          {item?.author?.username}
                          <Icon
                            className="w-5 h-5 text-blue-500"
                            icon="material-symbols:verified"
                          />
                        </div>
                        <span className="flex  gap-2 text-sm text-black-400 font-normal">
                          posted an update
                        </span>
                      </h5>
                      <span className="text-sm text-black-400 mt-1 xl:mt-2">
                        {Math.round(Math.random() + 1) * 5} days ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Card>
      </div>
    </div>
  );
}
