"use client";
import React from "react";
import clock from "@/public/assets/images/all-img/clock.webp";
import chair from "@/public/assets/images/all-img/chair.jpg";
import time from "@/public/assets/images/all-img/time.jpg";
import profile from "@/public/assets/images/all-img/thumb-6.png";
import { Icon } from "@iconify/react";
import ArticleCard from "@/components/websitePartials/articlecard/index";
import { blogDetails } from "@/constant/data";
import Image from "next/image";

export default function BlogDetailPage() {
  return (
    <div className="sm:container mx-2 sm:mx-auto my-8 font-vietnam text-gray-900">
      <div className="grid grid-cols-12 gap-5 xl:gap-8">
        <div className="col-span-12 lg:!col-span-8 py-4 lg:py-6 px-2 sm:px-4 xl:px-8 bg-white rounded-md">
          <div className="flex flex-col-reverse gap-5 md:grid md:grid-cols-12">
            <div className="md:col-span-5">
              <Image
                width={600}
                height={500}
                className="w-full object-cover rounded-md shadow-md"
                src={clock}
                alt=""
              />
            </div>
            <div className="md:col-span-7 flex flex-col md:justify-center md:pl-10">
              <h1 className="text-[26px] font-bold">
                More effective schedules in remote work
              </h1>
              <div className="flex flex-col mt-6 text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <img className="w-9 h-9 rounded-full" src={profile} alt="" />
                  <p className="text-base flex items-center gap-2 truncate">
                    By
                    <span className="font-bold hover:text-primary-600 truncate">
                      Adriana Martins
                    </span>
                    - October 21, 2023
                  </p>
                </div>
                <p className="flex items-center gap-2 mt-1 pl-10 ml-1">
                  <Icon className="w-6 h-6" icon="system-uicons:book-text" />1
                  min read
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 md:mt-20 gap-2">
            <p className="text-black-500 text-xs sm:text-sm md:text-base">
              Remote work has become increasingly prevalent, requiring
              individuals to adapt and develop more efficient schedules to
              maintain productivity and work-life balance.
            </p>
            <h4 className="mt-5 md:mt-8 font-bold text-lg sm:text-xl md:text-3xl">
              The Challenges of Remote Work Schedules
            </h4>
            <Image
              width={600}
              height={500}
              className="w-[100%] mt-2 md:mt-6 object-cover shadow-md rounded-md"
              src={chair}
              alt=""
            />
            <h5 className="mt-5 md:mt-8 font-bold text-lg sm:text-xl md:text-3xl">
              Flexibility vs. Structure
            </h5>
            <p className="text-black-500 text-xs sm:text-sm md:text-base mt-0 md:mt-5">
              Remote work offers flexibility, but without a structured schedule,
              it can be challenging to stay on track. Balancing work and
              personal life becomes vital.
            </p>
            <h5 className="mt-5 md:mt-8 font-bold text-lg sm:text-xl md:text-3xl">
              The Blurred Boundaries
            </h5>
            <p className="text-black-500 text-xs sm:text-sm md:text-base mt-0 md:mt-5">
              The boundaries between work and personal life can blur in remote
              work, making it essential to set clear expectations and time
              management strategies.
            </p>
            <h4 className="mt-5 md:mt-8 font-bold text-lg sm:text-xl md:text-3xl">
              Strategies for Effective Schedules
            </h4>
            <Image
              width={600}
              height={500}
              className="w-[100%] mt-6 object-cover shadow-md rounded-md"
              src={time}
              alt=""
            />
            <h5 className="mt-5 md:mt-8 font-bold text-lg sm:text-xl md:text-3xl">
              Time Blocking
            </h5>
            <p className="text-black-500 text-xs sm:text-sm md:text-base mt-0 md:mt-5">
              Time blocking involves scheduling specific periods for focused
              work, meetings, and breaks. This approach helps manage time
              effectively.
            </p>
            <h5 className="mt-5 md:mt-8 font-bold text-lg sm:text-xl md:text-3xl">
              Prioritization
            </h5>
            <p className="text-black-500 text-xs sm:text-sm md:text-base mt-0 md:mt-5">
              Identifying and prioritizing tasks allows remote workers to focus
              on essential activities, enhancing productivity.
            </p>
            <h4 className="mt-5 md:mt-8 font-bold text-lg sm:text-xl md:text-3xl">
              Achieving Work-Life Harmony
            </h4>
            <ol className="text-black-500 text-xs sm:text-sm md:text-base mt-0 md:mt-5 list-decimal pl-4 md:pl-8">
              <li className="mt-2">
                “Establish clear boundaries between work and personal life.
                Communicate your working hours to colleagues and family.” –
                Emily Roberts, Productivity Coach
              </li>
              <li className="mt-2">
                Waking regular breaks is essential for mental and physical
                well-being. Short breaks can boost productivity and creativity.
              </li>
              <li className="mt-2">
                “Identify your peak productivity hours and schedule demanding
                tasks during that time for optimal results.” – John Davis,
                Remote Worker
              </li>
            </ol>
            <p className="text-black-500 text-xs sm:text-sm md:text-base mt-0 md:mt-5">
              By implementing time blocking, prioritization, setting boundaries,
              taking breaks, and adapting to peak hours, remote workers can
              achieve more effective and fulfilling schedules in the digital
              age.
            </p>
            <div className=" border-t-2 border-gray-500 mt-5 lg:mt-16 pt-5 lg:pt-16 flex justify-between items-center">
              <button className="bg-primary-600 hover:bg-primary-500 transition-all duration-300 ease-in-out py-2 px-3 rounded-md text-xs sm:text-sm md:text-base text-white font-medium">
                Previous Article
              </button>
              <button className="bg-primary-600 hover:bg-primary-500 transition-all duration-300 ease-in-out py-2 px-3 rounded-md text-xs sm:text-sm md:text-base text-white font-medium">
                Next Article
              </button>
            </div>
          </div>
          <h5 className="xl:mt-12 mt-5 md:mt-8 font-bold text-lg sm:text-xl md:text-3xl">
            About the Author
          </h5>
          <div className="grid grid-cols-12 md:p-6">
            <div className="col-span-12 py-8 px-16 md:p-0 md:col-span-4">
              <Image
                width={600}
                height={500}
                className="w-full rounded-full object-cover"
                src={profile}
                alt=""
              />
            </div>
            <div className="col-span-12 md:col-span-8 flex flex-col justify-center md:pl-10">
              <h6 className="flex md:gap-4 justify-between md:justify-start font-bold">
                Adriana Martins
                <span className="text-xs rounded-md border border-primary-300 bg-primary-50 px-2 p-1 font-medium">
                  Founder and Ceo
                </span>
              </h6>
              <p className="text-black-500 text-xs sm:text-sm md:text-base mt-3 md:mt-5">
                Hello! My name is Adriana Martins working from Chile. I create
                some Ghost and Wordpress themes for differents markets, also, i
                offer live support via our ticket system.
              </p>
              <div className="flex items-center gap-5 mt-4 text-xs sm:text-sm md:text-base ">
                <button className="flex items-center gap-2">
                  <Icon
                    className="w-3 md:w-4 h-3 md:h-4"
                    icon="devicon:twitter"
                  />
                  Twitter
                </button>
                <button className="flex items-center gap-2">
                  <Icon className="w-4 h-4" icon="logos:facebook" />
                  Facebook
                </button>
                <button className="flex items-center gap-2">
                  <Icon
                    className="w-4 h-4 text-primary-600"
                    icon="la:globe-europe"
                  />
                  Website
                </button>
              </div>
              <div className="mt-5">
                <button className="bg-primary-600 hover:bg-primary-500 transition-all duration-300 ease-in-out py-2 px-3 rounded-md text-xs sm:text-sm md:text-base text-white font-medium">
                  View All Post
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:!col-span-4 flex flex-col gap-10 ">
          <div className="md:!sticky top-20 flex flex-col gap-8">
            <div className="bg-white rounded-md py-6 px-2 md:px-4 xl:px-8  flex flex-col gap-5 ">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Popular Articles
              </h4>
              <div className="flex flex-col gap-5 md:gap-8">
                {blogDetails.map((item, index) => (
                  <ArticleCard
                    key={index}
                    title={item.title}
                    image={item.img}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-md py-6 px-4 xl:px-8 flex flex-col gap-2">
              <h4 className="text-2xl font-semibold  mb-5">Follow Me!</h4>
              <div className="grid grid-cols-3 gap-2 px-4">
                <button className="col-span-1 flex flex-col items-center justify-center gap-2 p-4 border rounded-md text-sm">
                  <Icon className="w-6 h-6" icon="devicon:twitter" />
                  Twitter
                </button>
                <button className="col-span-1 flex flex-col items-center justify-center gap-2 p-4 border rounded-md text-sm">
                  <Icon className="w-6 h-6" icon="logos:facebook" />
                  Facebook
                </button>
                <button className="col-span-1 flex flex-col items-center justify-center gap-2 p-4 border rounded-md text-sm">
                  <Icon className="w-6 h-6" icon="skill-icons:instagram" />
                  Instagram
                </button>
                <button className="col-span-1 flex flex-col items-center justify-center gap-2 p-4 border rounded-md text-sm">
                  <Icon className="w-6 h-6" icon="logos:twitch" />
                  Twitch
                </button>
                <button className="col-span-1 flex flex-col items-center justify-center gap-2 p-4 border rounded-md text-sm">
                  <Icon className="w-6 h-6" icon="logos:whatsapp-icon" />
                  whatsapp
                </button>
                <button className="col-span-1 flex flex-col items-center justify-center gap-2 p-4 border rounded-md text-sm">
                  <Icon className="w-6 h-6" icon="logos:discord-icon" />
                  Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
