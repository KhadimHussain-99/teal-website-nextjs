"use client";
import React from "react";
import topBanner from "@/public/assets/images/all-img/blog-banner.png";
import Image from "next/image";
import Card from "./Card";
import { blogs } from "@/constant/data";

function BlogsPage() {
  return (
    <>
      <div className="sm:container sm:mx-auto relative w-full h-[250px] sm:h-[300px] md:h-[450px]">
        <Image
          width={1100}
          height={500}
          className="w-full h-full object-cover object-center"
          src={topBanner}
          alt=""
        />

        <div className="absolute left-4 lg:left-36 bottom-8 lg:bottom-28 z-10 ">
          <h3 className="text-sm sm:text-2xl md:text-4xl inline-block bg-white opacity-80 text-[#D39058] px-2 sm:px-4 py-1">
            Discover Inspiring Stories
          </h3>
          <p className="w-[90%] text-[10px] sm:text-lg md:text-xl bg-white opacity-80 text-[#D39058] px-2 sm:px-4 py-1 mt-[2px] line-clamp-1 text-ellipsis">
            Dive into a world of travel tales, tips, and adventures with Teal
            Travel's blog.
          </p>
        </div>
      </div>
      <div className="sm:container px-4 sm:mx-auto py-8 bg-white p-4 lg:px-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        <div className="grid grid-cols-4 gap-3">
          {blogs.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              desc={item.desc}
              img={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogsPage;
