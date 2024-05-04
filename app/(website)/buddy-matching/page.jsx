"use client";
import { Icon } from "@iconify/react";
import React, { useRef } from "react";
import Radio from "@/components/ui/Radio";
import Textinput from "@/components/ui/Textinput";
import Select from "@/components/ui/Select";
import BuddyCard from "../../../components/websitePartials/buddycard/BuddyCard";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BuddyMatching() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="sm:container mx-4 sm:mx-auto my-10 ">
      <form className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto bg-white rounded-md grid grid-cols-3 gap-4 p-6">
        <div className="col-span-3 flex flex-col ">
          <label htmlFor="gender" className="text-sm">
            Gender
          </label>
          <div className="flex items-center gap-8 mt-4">
            <Radio name={"gender"} label="Male" icon="ion:male-sharp" />
            <Radio name={"gender"} label="Female" icon="ion:female-sharp" />
          </div>
        </div>
        <div className="col-span-3 ">
          <Textinput label={"Name"} placeholder="Enter your name..." />
        </div>
        <div className="col-span-3 ">
          <Select label={"City"} placeholder="Select City" />
        </div>{" "}
        <div className="col-span-3 ">
          <Select label={"Persons"} placeholder="Select Persons" />
        </div>
        <div className="col-span-3 ">
          <Select label={"Want Vehicle?"} />
        </div>
        <div className="w-full col-span-3 flex justify-end mt-4">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="w-full flex justify-center items-center py-5 lg:py-14 my-5 lg:my-8">
        <Swiper
          className=" w-full h-full !py-5 lg:!pt-14"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            280: { slidesPerView: 1 },
            350: { slidesPerView: 1.1, spaceBetween: 10 },
            400: { slidesPerView: 1.3, spaceBetween: 10 },
            640: { slidesPerView: 1.8, spaceBetween: 10 },
            768: { slidesPerView: 2.3, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
            1280: { slidesPerView: 4, spaceBetween: 15 },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          // pagination={pagination}
          modules={[Pagination, Autoplay, Navigation]}
          loop
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <SwiperSlide key={index}>
              <BuddyCard />
            </SwiperSlide>
          ))}
          <div className="absolute w-[100%] z-50 bottom-[40%] sm:bottom-[45%] left-0 flex  justify-between items-center gap-2 px-2 lg:px-4">
            <button
              ref={navigationPrevRef}
              className="w-10 md:w-12 h-9 md:h-10 flex justify-center items-center bg-primary-600  rounded-md text-white transition duration-300 ease-in-out"
            >
              <Icon
                className="w-5 md:w-6 h-5 md:h-6"
                icon="fluent:arrow-left-28-filled"
              />
            </button>
            <button
              ref={navigationNextRef}
              className="w-10 md:w-12 h-9 md:h-10 flex justify-center items-center bg-primary-600  rounded-md text-white transition duration-300 ease-in-out"
            >
              <Icon
                className="w-5 md:w-6 h-5 md:h-6"
                icon="fluent:arrow-right-28-filled"
              />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
