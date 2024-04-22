"use client";
import React, { Fragment, useState } from "react";
import { Icon } from "@iconify/react";
import { Tab } from "@headlessui/react";
import GroupCard from "./GroupCard";
import EventCard from "./EventCard";
import profile from "@/public/assets/images/all-img/thumb-4.png";
import eventImg from "@/public/assets/images/all-img/event.jpg";
import useWidth from "@/hooks/useWidth";
import Image from "next/image";

const community = ["Groups", "Events"];
const groups = ["Joined Groups", "Groups"];
const events = ["Top Events", "All Events"];

export default function Community() {
  const [display, setDisplay] = useState("group");
  const [filterMenu, setFilterMenu] = useState(false);
  const {
    width,
    breakpoints: { lg },
  } = useWidth();

  const displaySec = (event) => {
    const { id } = event.target;
    setDisplay(id);
  };

  return (
    <div className="sm:container mx-4 sm:mx-auto my-5 lg:my-8 flex flex-col-reverse lg:grid grid-cols-12 gap-5 ">
      <div className="col-span-8 bg-white rounded-md shadow p-2 sm:p-4 lg:p-6 ">
        {display === "group" && (
          <div className="w-full flex flex-col relative h-[100vh] pt-24 pb-16">
            <div className="absolute top-0 bg-secondary-100 w-full flex items-center justify-between p-4 rounded-t-md">
              <div className="flex items-center gap-5 ">
                <Image
                  width={100}
                  height={100}
                  className="w-10 sm:w-16 h-10 sm:h-16 object-cover rounded-full"
                  src={profile}
                  alt="profile image"
                />
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold cursor-pointer truncate">
                    Digital Elliptical
                  </h3>
                  <span className="text-[10px] sm:text-xs lg:text-sm text-gray-500">
                    103k members
                  </span>
                  <span className="text-[10px] sm:text-xs lg:text-sm text-gray-500 before:w-3 before:h-3 before:mb[2px] before:bg-green-600 before:rounded-full">
                    89 online
                  </span>
                </div>
              </div>
              <button
                className={`px-2 py-[2px] md:py-1 sm:px-3 lg:px-4 sm:py-1 lg:py-2 font-semibold text-xs lg:text-sm rounded-full border border-primary-600 text-primary-600`}
              >
                joined
              </button>
            </div>
            <div className="w-full h-full overflow-y-auto scrollbar flex flex-col gap-4 mt-4">
              {Array.from({ length: 14 }).map((_, index) => (
                <>
                  <div className="flex gap-2">
                    <Image
                      width={100}
                      height={100}
                      className="w-6 sm:w-10 h-6 sm:h-10 rounded-full"
                      src={profile}
                      alt="profile"
                    />
                    <div className="flex flex-col bg-black-100 rounded-3xl p-4 shadow">
                      <h6 className="text-sm sm:text-base font-semibold">
                        Khadim Hussain
                      </h6>
                      <p className="text-xs sm:text-sm">
                        it sounds amazing!!!{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse gap-2">
                    <Image
                      width={100}
                      height={100}
                      className="w-6 sm:w-10 h-6 sm:h-10 rounded-full shadow"
                      src={profile}
                      alt="profile"
                    />
                    <div className="flex flex-col bg-teal-100 rounded-3xl p-4 shadow">
                      <h6 className="text-sm sm:text-base font-semibold">
                        Waleed Ali
                      </h6>
                      <p className="text-xs sm:text-sm">
                        i am excited buddy!!!{" "}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="absolute bottom-0 w-full flex flex-col mt-4 lg:mt-6 rounded-md bg-black-100">
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
          </div>
        )}
        {display === "event" && (
          <div className="w-full flex flex-col">
            <div className="w-full grid grid-cols-12">
              <div className="col-span-12">
                <div className="w-full h-[200px] lg:h-[300px]">
                  <Image
                    width={600}
                    height={350}
                    className="w-full h-full object-cover rounded-t-md"
                    src={eventImg}
                    alt=""
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 justify-between mt-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                      Annual Dinner{" "}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base">
                      <span className="font-bold">120</span> people are going
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      width={100}
                      height={100}
                      className="w-12 h-12 object-cover rounded-full"
                      src={profile}
                      alt="profile image"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm md:text-base">
                        Organized by{" "}
                        <span className="text-primary-600 font-bold">
                          Digital Elliptical
                        </span>
                      </p>
                      <span className="text-xs text-gray-500">
                        Thur, 10 April 2024 at 10:30 pm
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-2">
                  <p className="text-xs sm:text-sm md:text-base">
                    Join us for a night of celebration and camaraderie at
                    Digital Elliptical Company's Annual Dinner, hosted at the
                    elegant Deshut Restaurant. As the year comes to a close, we
                    gather to reflect on our achievements, recognize the hard
                    work of our team members, and celebrate our successes
                    together.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base mt-2 md:mt-4">
                    <span className="font-bold">
                      Gourmet Dining Experience:
                    </span>{" "}
                    Indulge in a sumptuous feast prepared by Deshut Restaurant's
                    renowned chefs, featuring a delectable selection of
                    appetizers, entrees, and desserts inspired by both local and
                    international cuisines.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base mt-2 md:mt-4">
                    <span className="font-bold">Entertainment:</span> Enjoy live
                    music and entertainment throughout the evening, with
                    performances by talented musicians and performers to set the
                    mood and keep the festivities lively.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base mt-2 md:mt-4">
                    <span className="font-bold">Recognition and Awards:</span>{" "}
                    Celebrate the contributions of our team members with special
                    recognition and awards presented to outstanding individuals
                    who have demonstrated exceptional dedication, creativity,
                    and leadership.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-12 mt-5">
                <h5 className="text-xl sm:text-2xl font-semibold">
                  About Venue
                </h5>
                <p className="text-xs sm:text-sm mb-2">
                  <span className="font-bold">1.5km</span> from your location
                </p>
                <iframe
                  className="w-full h-[200px] lg:h-[300px] rounded-md outline-none border-none"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.8248792650697!2d68.33099531061303!3d25.377184977502043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7bc33b1e4e55%3A0xb39a3f159f228de3!2sDesihut%20Restaurant!5e0!3m2!1sen!2s!4v1711831949887!5m2!1sen!2s"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="col-span-4">
        <div className="flex flex-col gap-6 p-2 md:p-4 lg:py-6 bg-white rounded-md">
          <div className="w-full flex items-center justify-between ">
            <h6 className="text-base">Communities</h6>
            <button
              type="button"
              onClick={() => setFilterMenu((prev) => !prev)}
              className="block lg:hidden"
            >
              <Icon icon={"ic:baseline-menu"} />
            </button>
          </div>
          {(filterMenu || width >= lg) && (
            <Tab.Group>
              <Tab.List>
                <div className="w-[100%] bg-secondary-100 rounded-md transition duration-300 ease-in-out flex overflow-x-scroll lg:overflow-x-clip scrollbar gap-1 rtl:space-x-reverse mb-2 p-1">
                  {community.map((item, i) => (
                    <Tab as={Fragment} key={i}>
                      {({ selected }) => (
                        <button
                          className={`w-[50%] truncate inline-flex justify-center rounded-full py-2 items-center text-xs md:text-sm font-medium capitalize ring-0 foucs:ring-0 focus:outline-none px-[6px] xs:px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-primary-600 before:-translate-x-1/2 ${
                            selected
                              ? "bg-teal-700 text-white"
                              : "bg-white text-slate-500 before:w-0 dark:text-slate-300"
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
                  <Tab.Group>
                    <Tab.List>
                      <div className="flex items-center gap-2 md:gap-4 lg:gap-8 mt-4 mb-2">
                        {groups.map((item, i) => (
                          <Tab as={Fragment} key={i}>
                            {({ selected }) => (
                              <button
                                className={`w-[50%] text-sm pb-2 lg:text-base font-semibold mb-0 capitalize dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-0 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-1px] before:h-[1.5px] before:bg-primary-600 before:-translate-x-1/2 ${
                                  selected
                                    ? "text-primary-600 before:w-full"
                                    : "text-slate-500 before:w-0 dark:text-slate-300"
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
                        <div className="p-2 md:py-4 bg-secondary-50 flex flex-col gap-5 h-[450px] overflow-y-auto scrollbar">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <GroupCard displaySec={displaySec} key={i} />
                          ))}
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        {" "}
                        <div className="p-2 md:py-4 bg-secondary-50 flex flex-col gap-5 h-[450px] overflow-y-auto scrollbar">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <GroupCard displaySec={displaySec} join key={i} />
                          ))}
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </Tab.Panel>
                <Tab.Panel>
                  <Tab.Group>
                    <Tab.List>
                      <div className="flex items-center gap-2 md:gap-4 lg:gap-8 mt-4 mb-2">
                        {events.map((item, i) => (
                          <Tab as={Fragment} key={i}>
                            {({ selected }) => (
                              <button
                                className={`w-[50%] text-sm pb-2 lg:text-base font-semibold mb-2 capitalize dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-0 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-1px] before:h-[1.5px] before:bg-primary-600 before:-translate-x-1/2  ${
                                  selected
                                    ? "text-primary-600 before:w-full"
                                    : "text-slate-500 before:w-0 dark:text-slate-300"
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
                        <div className="p-2 sm:p-4 bg-secondary-50 flex flex-col gap-5 h-[450px] overflow-y-auto scrollbar">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <EventCard key={i} displaySec={displaySec} />
                          ))}
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className="p-2 sm:p-4 bg-secondary-50 flex flex-col gap-5 h-[450px] overflow-y-auto scrollbar">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <EventCard key={i} displaySec={displaySec} />
                          ))}
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          )}
        </div>
      </div>
    </div>
  );
}
