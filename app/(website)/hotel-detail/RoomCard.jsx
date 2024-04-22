import React, { useRef } from "react";
import { room } from "@/constant/data";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const RoomCard = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="col-span-1 bg-white shadow-md rounded-md">
      <div className="w-full h-[180px]">
        <Swiper
          className=" w-full h-full"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Autoplay, Navigation]}
          loop
        >
          {room.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width={350}
                height={250}
                className="w-full h-full object-cover rounded-t-md"
                src={item}
                alt=""
              />
            </SwiperSlide>
          ))}

          <div className="absolute w-[100%] z-50 bottom-[40%] sm:bottom-[35%] left-0 flex  justify-between items-center gap-2 px-2 ">
            <div
              ref={navigationPrevRef}
              className="w-10 h-9 flex justify-center items-center cursor-pointer bg-primary-600  rounded-md text-white transition duration-300 ease-in-out"
            >
              <Icon className="w-5 h-5 " icon="fluent:arrow-left-28-filled" />
            </div>
            <div
              ref={navigationNextRef}
              className="w-10 h-9 flex justify-center items-center cursor-pointer bg-primary-600  rounded-md text-white transition duration-300 ease-in-out"
            >
              <Icon className="w-5 h-5" icon="fluent:arrow-right-28-filled" />
            </div>
          </div>
        </Swiper>
      </div>
      <div className="p-4">
        <h6 className="text-sm">Deluxe King</h6>
        <p className="text-xs w-[90%] mt-1">
          Deluxe King Room, 1 King Bed, Wireless internet for a fee
        </p>
        <div className="flex items-center gap-5 mt-2">
          <div className="flex flex-col items-center gap-1 justify-center">
            <Icon icon="mdi:bed" />
            <span className="text-sm">1 King Bed</span>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center">
            <Icon icon="bi:people-fill" />
            <span className="text-sm">2 Sleeps</span>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center">
            <Icon icon="heroicons:wifi-16-solid" />
            <span className="text-sm">free Wifi</span>
          </div>
        </div>
        <div className="w-full flex justify-between mt-2">
          <span className="flex items-end text-sm font-semibold gap-2">
            Rs: 25000/={" "}
            <span className="text-[10px] font-normal text-gray-500">
              per 24/h
            </span>
          </span>{" "}
          <button className="font-medium  bg-primary-700 hover:bg-primary-500 px-2 sm:px-3 py-1 sm:py-[6px] rounded-md text-[11px] xs:text-xs  text-white inline-flex justify-center items-center">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
