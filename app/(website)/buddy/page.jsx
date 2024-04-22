"use client";
import React, { useRef, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWidth from "../../../hooks/useWidth";
import { Icon } from "@iconify/react";
import { vehicles } from "@/constant/data";
import Image from "next/image";

export default function Buddy() {
  const {
    width,
    breakpoints: { sm, md },
  } = useWidth();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="sm:container mx-4 sm:mx-auto sm:pt-10 mt-5 sm:mt-8">
      <h1 className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] leading-none">
        User Information
      </h1>
      <div className="grid grid-cols-12 gap-y-2 sm:gap-y-4 p-2 sm:p-4 mt-1 mb-8">
        <p className="grid grid-cols-2 text-sm sm:text-base font-semibold pb-2 sm:pb-4 border-b col-span-12 md:col-span-6">
          <span className="col-span-1 flex items-center gap-1 md:gap-2">
            <Icon
              className="w-6 sm:w-9 h-6 sm:h-9 text-primary-600 bg-primary-200 p-[6px] sm:p-2 rounded-full"
              icon="mingcute:group-2-fill"
            />{" "}
            Peolpe:
          </span>{" "}
          <span className="flex items-center col-span-1 font-normal">
            Four Persons
          </span>
        </p>
        <p className="grid grid-cols-2 text-sm sm:text-base font-semibold pb-2 sm:pb-4 border-b col-span-12 md:col-span-6">
          <span className="col-span-1 flex items-center gap-1 md:gap-2">
            <Icon
              className="w-6 sm:w-9 h-6 sm:h-9 text-primary-600 bg-primary-200 p-[6px] sm:p-2 rounded-full"
              icon="ion:male-sharp"
            />
            Gender:
          </span>{" "}
          <span className="flex items-center col-span-1 font-normal">Male</span>
        </p>
        <p className="grid grid-cols-2 text-sm sm:text-base font-semibold pb-2 sm:pb-4 border-b col-span-12 md:col-span-6">
          <span className="col-span-1 flex items-center gap-1 md:gap-2">
            <Icon
              className="w-6 sm:w-9 h-6 sm:h-9 text-primary-600 bg-primary-200 p-[6px] sm:p-2 rounded-full"
              icon="ic:sharp-departure-board"
            />
            Departure:
          </span>{" "}
          <span className="flex items-center col-span-1 font-normal">
            Karachi
          </span>
        </p>
        <p className="grid grid-cols-2 text-sm sm:text-base font-semibold pb-2 sm:pb-4 border-b col-span-12 md:col-span-6">
          <span className="col-span-1 flex items-center gap-1 md:gap-2">
            <Icon
              className="w-6 sm:w-9 h-6 sm:h-9 text-primary-600 bg-primary-200 p-[6px] sm:p-2 rounded-full"
              icon="ic:sharp-share-arrival-time"
            />
            Arrival:
          </span>{" "}
          <span className="flex items-center col-span-1 font-normal">
            Lahore
          </span>
        </p>
        <p className="grid grid-cols-2 text-sm sm:text-base font-semibold pb-2 sm:pb-4 border-b col-span-12 md:col-span-6">
          <span className="col-span-1 flex items-center gap-1 md:gap-2">
            <Icon
              className="w-6 sm:w-9 h-6 sm:h-9 text-primary-600 bg-primary-200 p-[6px] sm:px-2 rounded-full"
              icon="ion:calendar"
            />
            Departure Date:
          </span>{" "}
          <span className="flex items-center col-span-1 font-normal">
            Mon, 1 April 2024
          </span>
        </p>
        <p className="grid grid-cols-2 text-sm sm:text-base font-semibold pb-2 sm:pb-4 border-b col-span-12 md:col-span-6">
          <span className="col-span-1 flex items-center gap-1 md:gap-2">
            <Icon
              className="w-6 sm:w-9 h-6 sm:h-9 text-primary-600 bg-primary-200 p-[6px] sm:px-2 rounded-full"
              icon="ion:calendar"
            />
            Arrival Date:
          </span>{" "}
          <span className="flex items-center col-span-1 font-normal">
            Wed, 3 April 2024
          </span>
        </p>
        <p className="grid grid-cols-2 text-sm sm:text-base font-semibold pb-2 sm:pb-4 border-b col-span-12 md:col-span-6">
          <span className="col-span-1 flex items-center gap-1 md:gap-2">
            <Icon
              className="w-6 sm:w-9 h-6 sm:h-9 text-primary-600 bg-primary-200 p-[6px] sm:p-2 rounded-full"
              icon="bx:dollar"
            />
            Expenses:
          </span>{" "}
          <span className="flex items-center col-span-1 font-normal">
            Rs: 9500/=
          </span>
        </p>
        <p className="grid grid-cols-2 gap-2 text-sm sm:text-base font-semibold pb-2 sm:pb-4 border-b col-span-12 md:col-span-6">
          <span className="col-span-1 flex items-center gap-1 md:gap-2 truncate">
            <Icon
              className="w-[16%] sm:w-9 h-6 sm:h-9 text-primary-600 bg-primary-200 p-[6px] sm:p-2 rounded-full"
              icon="icon-park-solid:people"
            />
            <span className="w-[70%] trunctae"> Per Person Expense:</span>
          </span>{" "}
          <span className="flex items-center col-span-1 font-normal">
            Rs: 2500/=
          </span>
        </p>
      </div>
      <h1 className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] leading-none">
        Vehicle Information & Pictures
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-1 mb-8 rounded-lg border">
        <div className="col-span-1 lg:col-span-12 grid grid-cols-2 lg:grid-cols-12 ">
          <div className="col-span-1 lg:col-span-3 flex px-2 md:justify-center items-center gap-2 border-b border-r py-5 sm:py-8">
            <div className="p-2 sm:p-3 rounded-full bg-black-200">
              <Icon
                className="w-3 sm:w-5 h-3 sm:h-5"
                icon="mdi:transportation"
              />
            </div>
            <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              <p className="text-sm lg:text-sm font-normal uppercase">
                Transport
              </p>
              {/* {data.vehicle?.year} */}YES
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 flex px-2 md:justify-center items-center gap-2 border-b border-r  py-5 sm:py-8">
            <div className="p-2 sm:p-3 rounded-full bg-black-200">
              <Icon className="w-3 sm:w-5 h-3 sm:h-5" icon="fontisto:car" />
            </div>
            <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              <p className="text-sm lg:text-sm font-normal uppercase">
                Vehicle
              </p>
              {/* {data.vehicle?.door} */}Cultus Vxr
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 flex px-2 md:justify-center items-center gap-2 border-b border-r py-5 sm:py-8">
            <div className="p-2 sm:p-3 rounded-full bg-black-200">
              <Icon className="w-3 sm:w-5 h-3 sm:h-5" icon="iconoir:calendar" />
            </div>
            <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              <p className="text-sm lg:text-sm font-normal uppercase">Model</p>
              2005
              {/* {new Intl.NumberFormat("en-PK", {
            style: "unit",
            unit: "kilometer",
          }).format(6000)} */}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 flex px-2 md:justify-center items-center gap-2 border-b  py-5 sm:py-8">
            <div className="p-2 sm:p-3 rounded-full bg-black-200">
              <Icon
                className="w-3 sm:w-5 h-3 sm:h-5"
                icon="material-symbols-light:build-outline-sharp"
              />
            </div>
            <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              <p className="text-sm lg:text-sm font-normal uppercase">
                Manufacturer
              </p>
              {/* {data.vehicle?.color} */}Suzuki
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-12 flex flex-col md:flex-row md:items-center p-3 sm:p-4 sm:px-8 gap-2 h-[300px]  md:h-[280px] lg:h-[420px] lg:py-8">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            direction={`${width < md ? "horizontal" : "vertical"}`}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-[100%] md:w-[75%] h-[200px] md:h-full"
          >
            {vehicles.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                  src={item}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            direction={`${width < md ? "horizontal" : "vertical"}`}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={`${width < sm ? 2.3 : 3.5}`}
            centeredSlides={false}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-[100%] md:w-[25%] h-[100px] md:h-[100%] relative"
          >
            {vehicles.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  src={item}
                  alt=""
                />
              </SwiperSlide>
            ))}
            <div
              ref={navigationPrevRef}
              className="absolute left-1 bottom-[2rem] sm:bottom-[3.5rem] md:top-1 md:left-[4rem] lg:left-[6rem] xl:left-[8.5rem] z-50 w-[25px] sm:w-[40px] h-[25px] sm:h-[40px] bg-black-100 text-black-500 cursor-pointer flex justify-center items-center rounded"
            >
              <Icon
                className="w-[14px] sm:w-[20px] h-[14px] sm:h-[20px]"
                icon={`${
                  width < md ? "ep:arrow-left-bold" : "ep:arrow-up-bold"
                }`}
              />
            </div>
            <div
              ref={navigationNextRef}
              className="absolute right-1 bottom-[2rem] sm:bottom-[3.5rem] md:bottom-1 md:right-[3.7rem] lg:right-[5.5rem] xl:right-[7.9rem] z-50 w-[25px] sm:w-[40px] h-[25px] sm:h-[40px] bg-black-100 text-black-500 cursor-pointer flex justify-center items-center rounded"
            >
              <Icon
                className="w-[14px] sm:w-[20px] h-[14px] sm:h-[20px]"
                icon={`${
                  width < md ? "ep:arrow-right-bold" : "ep:arrow-down-bold"
                }`}
              />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
