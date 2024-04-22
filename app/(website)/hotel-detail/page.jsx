"use client";
import React, { Fragment } from "react";
import { amenities, hotels } from "@/constant/data";
import { Rating } from "primereact/rating";
import { Icon } from "@iconify/react";
import Textinput from "@/components/ui/Textinput";
import { Tab } from "@headlessui/react";
import Amenity from "./Amenity";
import RoomCard from "./RoomCard";
import Image from "next/image";

const buttons = ["All Rooms", "1 Bed", "2 Bed"];

export default function HotelDetail() {
  return (
    <div className="sm:container mx-4 sm:mx-auto my-8">
      <div className="w-full h-[250px] lg:h-[600px] grid grid-cols-6 grid-rows-5 gap-2 lg:gap-4">
        <Image
          width={900}
          height={600}
          className="w-full h-full col-span-4 row-span-4 object-cover rounded-lg"
          src={hotels[0]}
          alt=""
        />
        <Image
          width={600}
          height={300}
          className="w-full h-full col-span-2 row-span-2 object-cover rounded-lg"
          src={hotels[1]}
          alt=""
        />
        <Image
          width={600}
          height={300}
          className="w-full h-full col-span-2 row-span-2 object-cover rounded-lg"
          src={hotels[2]}
          alt=""
        />
        <Image
          width={600}
          height={300}
          className="w-full h-full col-span-1 row-span-1 object-cover rounded-lg"
          src={hotels[0]}
          alt=""
        />
        <Image
          width={600}
          height={300}
          className="w-full h-full col-span-1 row-span-1 object-cover rounded-lg"
          src={hotels[1]}
          alt=""
        />
        <Image
          width={600}
          height={300}
          className="w-full h-full col-span-1 row-span-1 object-cover rounded-lg"
          src={hotels[2]}
          alt=""
        />
        <Image
          width={600}
          height={300}
          className="w-full h-full col-span-1 row-span-1 object-cover rounded-lg"
          src={hotels[0]}
          alt=""
        />
        <Image
          width={600}
          height={300}
          className="w-full h-full col-span-1 row-span-1 object-cover rounded-lg"
          src={hotels[1]}
          alt=""
        />
        <Image
          width={600}
          height={300}
          className="w-full h-full col-span-1 row-span-1 object-cover rounded-lg"
          src={hotels[2]}
          alt=""
        />
      </div>

      <div className="grid grid-cols-12 gap-5 mt-8">
        <div className="col-span-12 md:col-span-8 ">
          <h4 className="font-semibold text-lg sm:text-3xl">
            Islamabad Marriot Hotel
          </h4>
          <span className="flex items-center gap-4 text-[11px] xs:text-xs sm:text-base">
            {" "}
            <Rating
              value={4}
              readOnly
              cancel={false}
              className="my-1 md:my-2 flex gap-1 sm:gap-2"
              size={6}
              pt={{
                onIcon: {
                  className:
                    "!w-3 sm:!w-[14px] !h-3 sm:!h-[14px] !text-yellow-500",
                },
                offIcon: {
                  className: "!w-3 sm:!w-[14px] !h-3 sm:!h-[14px]",
                },
              }}
            />{" "}
            (2,365)
          </span>
          <span className="flex gap-1 font-medium text-gray-500 text-[11px] xs:text-xs sm:text-sm">
            <Icon icon="mdi:location" />
            Islamabad
          </span>
          <p className="md:w-[80%] mt-4 text-sm">
            The Islamabad Marriott Hotel is a five-star international hotel
            located at the foothills of the famous Margalla Hills in Islamabad,
            Pakistan. It is conveniently close to several key landmarks,
            including Rawal Lake, the town center, President & Prime Minister
            Houses, the Ministry of Foreign Affairs, the Senate, Parliament
            House, foreign missions, the World Bank, government offices,
            corporate sectors, and media offices. it’s definitely worth a visit!
            🌟🏨
          </p>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h5 className="text-base sm:text-2xl font-semibold">Address</h5>
          <iframe
            className="w-full h-[220px] mt-2 shadow rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180197.67515568525!2d73.19080310631506!3d33.780344973396645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff8b29e34cd%3A0x7f48885ae1392638!2sIslamabad%20Marriott%20Hotel!5e0!3m2!1sen!2s!4v1711655751706!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:gap-5 mt-8">
        <h5 className="text-base sm:text-2xl font-semibold">
          Popular Amenities
        </h5>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
          {amenities.map((item, index) => (
            <Amenity icon={item.icon} desc={item.desc} key={index} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-8">
        <h5 className="text-base sm:text-2xl font-semibold">
          Choose Your Room
        </h5>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-[30%] shadow py-2 px-4 rounded-md bg-white">
            <Textinput
              label="Check-in-date"
              type="date"
              placeholder="Check-in-date"
            />
          </div>
          <div className="w-full md:w-[30%] shadow py-2 px-4 rounded-md bg-white">
            <Textinput
              label="Check-out-date"
              type="date"
              placeholder="Check-out-date"
            />
          </div>
          <div className="w-full md:w-[40%] flex py-6 px-4 bg-white rounded-md shadow gap-2">
            <Icon className="w-8 h-8" icon="mingcute:group-3-fill" />
            <p className="flex flex-col">
              <span className="text-xs">Travelers</span>
              <span>1 Room, 2 Travelers</span>
            </p>
          </div>
        </div>
        <div>
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
                <div className="grid grid-cols-1 md:!grid-cols-3 xl:!grid-cols-4 gap-4">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <RoomCard key={i} />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-1 md:!grid-cols-3 xl:!grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <RoomCard key={i} />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-1 md:!grid-cols-3 xl:!grid-cols-4 gap-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <RoomCard key={i} />
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
