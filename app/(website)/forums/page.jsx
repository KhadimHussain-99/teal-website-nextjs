"use client";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import ForumCard from "../../../components/websitePartials/forumcard/ForumCard";
import { featuredDestinations, travelDeals } from "../../../constant/data";
import topBanner from "../../../public/assets/images/all-img/top-banner.jpg";
import Image from "next/image";

export default function Forums() {
  const buttons = ["Featured Topics", "Most Recent", "Saved Topics"];

  return (
    <>
      <div className="sm:container sm:mx-auto relative w-full h-[250px] sm:h-[300px] md:h-[450px]">
        <Image
          width={900}
          height={500}
          className="w-full h-full object-cover object-center"
          src={topBanner}
          alt=""
        />
        <div className="absolute left-4 lg:left-36 bottom-8 lg:bottom-28 z-10 ">
          <h3 className="text-sm sm:text-2xl md:text-4xl inline-block bg-white opacity-80 text-[#D39058] px-2 sm:px-4 py-1">
            Discover the history that shaped us
          </h3>
          <p className="w-[90%] text-[10px] sm:text-lg md:text-xl bg-white opacity-80 text-[#D39058] px-2 sm:px-4 py-1 mt-[2px] line-clamp-1 text-ellipsis">
            Soulful experience with landmarks that have withstood the test of
            time. We walk the talk.
          </p>
        </div>
      </div>
      <div className="sm:container mx-4 sm:mx-auto mb-10">
        {/* Featured Destinations Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Deals Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Travel Deals</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {travelDeals.map((deal, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{deal.title}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                <a
                  href={deal.link}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  View Deal
                </a>
              </div>
            ))}
          </div>
        </section>
        <Tab.Group>
          <Tab.List>
            <div className="w-[100%] transition duration-300 ease-in-out flex overflow-x-scroll lg:overflow-x-clip scrollbar gap-1 rtl:space-x-reverse mb-2 p-1">
              {buttons.map((item, i) => (
                <Tab as={Fragment} key={i}>
                  {({ selected }) => (
                    <button
                      className={`min-w-[130px] truncate inline-flex justify-center rounded-full py-2 items-center text-sm font-medium capitalize ring-0 foucs:ring-0 focus:outline-none px-[6px] xs:px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-main before:-translate-x-1/2 ${
                        selected
                          ? "bg-teal-700 text-white"
                          : "bg-teal-100 text-slate-500 before:w-0 dark:text-slate-300"
                      }`}
                    >
                      {item}
                    </button>
                  )}
                </Tab>
              ))}
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <ForumCard key={index} />
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <ForumCard key={index} />
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 16 }).map((_, index) => (
                  <ForumCard key={index} />
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
