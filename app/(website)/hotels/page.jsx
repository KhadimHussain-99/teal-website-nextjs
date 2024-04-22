"use client";
import React, { useState } from "react";
import HotelCard from "./HotelCard";
import useWidth from "../../../hooks/useWidth";
import Textinput from "@/components/ui/Textinput";
import { Icon } from "@iconify/react";

export default function Hotels() {
  const [filterMenu, setFilterMenu] = useState(false);
  const {
    width,
    breakpoints: { lg },
  } = useWidth();

  return (
    <div className="sm:container mx-4 sm:mx-auto my-5 sm:my-8  sm:px-0">
      <div className="grid grid-cols-12 gap-5">
        <div className="w-full col-span-12 bg-white h-max p-4 xs:py-5 lg:py-10 lg:px-6 rounded-md">
          <div className={`w-full flex justify-between items-center`}>
            <h6 className="text-base">Filter Hotels</h6>
            <button
              type="button"
              onClick={() => setFilterMenu((prev) => !prev)}
              className="block lg:hidden"
            >
              <Icon icon={"ic:baseline-menu"} />
            </button>
          </div>
          {(filterMenu || width >= lg) && (
            <div data-aos="fade-up" className="w-[100%] mt-5">
              <h6 className="text-base">Tell Us What You Want</h6>
              <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 my-4">
                <div className="col-span-1">
                  {" "}
                  <Textinput
                    id={"keyword"}
                    // onChange={handleInputChange}
                    label={"Keyword"}
                    placeholder="Write Keywords Here..."
                  />
                </div>
                <div className="col-span-1">
                  {" "}
                  <Textinput
                    label={"Check-in-date"}
                    placeholder="Check-in-date"
                    // icon="ion:calendar-outline"
                    type="date"
                  />
                </div>
                <div className="col-span-1">
                  {" "}
                  <Textinput
                    label={"Check-out-date"}
                    placeholder="Check-out-date"
                    // icon="ion:calendar-outline"
                    type="date"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 ">
          {Array.from({ length: 7 }).map((_, index) => (
            <HotelCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
