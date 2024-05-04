"use client";
import React from "react";
import { Icon } from "@iconify/react";
import AboutCad from "../../../components/websitepartials/aboutcard/index";
import TestimonialCard from "../../../components/websitepartials/testimonalcard/index";";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { aboutData } from "@/constant/data";
import topBanner from "../../../public/assets/images/all-img/about.jpg";
import Image from "next/image";

export default function About() {
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
            Welcome to Our Company
          </h3>
          <p className="w-[90%] text-[10px] sm:text-lg md:text-xl bg-white opacity-80 text-[#D39058] px-2 sm:px-4 py-1 mt-[2px] line-clamp-1 text-ellipsis">
            Learn more about our mission, values, and team.
          </p>
        </div>
      </div>
      <div className="font-urbanist">
        <div className="sm:container mx-4 sm:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-20 ">
          <div className="col-span-1 flex flex-col justify-center !font-urbanist py-8">
            <span className="text-3xl font-seaweed text-teal-600">
              about us
            </span>
            <h4 className="text-2xl lg:text-4xl font-bold mr-14 mt-4">
              Planning a trip should be very exciting adventure
            </h4>
            <p className="mt-4 sm:mt-6 leading-6 text-gray-500">
              We're dedicated to offering exceptional value for your travel
              investment. Our relationships with trusted travel partners
            </p>
            <div className="w-full flex gap-4 mt-6 sm:mt-8">
              <div className="w-20">
                <div className="w-16 h-16 flex justify-center items-center bg-teal-200 text-teal-600 rounded-full">
                  <Icon className="w-8 h-8" icon="vaadin:globe" />
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="text-lg font-semibold">International Tours</h5>
                <p className="mt-5 text-gray-500 lg:mr-20">
                  Our team of travel professional brings a wealth of knowledge
                  and expertise to the table.
                </p>
              </div>
            </div>
            <div className="w-full flex gap-4 mt-8">
              <div className="w-20">
                <div className="w-16 h-16 flex justify-center items-center bg-teal-200 text-teal-600 rounded-full">
                  <Icon className="w-8 h-8" icon="dashicons:screenoptions" />
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="text-lg font-semibold">
                  Multiple Options to Choose
                </h5>
                <p className="mt-5 text-gray-500 lg:mr-20">
                  OPlanning trip should be an exciting adventure, not stressful
                  ordeal. Let us handle the logistics
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex gap-2">
            <div className="flex items-center">
              <div className="w-full overflow-hidden rounded-md">
                <img
                  className="w-full rounded-md object-cover transition duration-300 ease-in-out hover:scale-[1.05]"
                  src="https://wp1.themevibrant.com/newwp/travic/wp-content/uploads/2023/12/about-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className=" flex flex-col md:justify-center gap-2">
              <div className="w-full overflow-hidden rounded-md">
                <img
                  className="w-full rounded-md object-cover transition duration-300 ease-in-out hover:scale-[1.05]"
                  src="https://wp1.themevibrant.com/newwp/travic/wp-content/uploads/2023/12/about-1.jpg"
                  alt=""
                />
              </div>
              <div className="w-[70%] overflow-hidden rounded-md">
                <img
                  className="w-full rounded-md object-cover transition duration-300 ease-in-out hover:scale-[1.05]"
                  src="https://wp1.themevibrant.com/newwp/travic/wp-content/uploads/2023/12/about-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={"w-full bg-teal-100 my-10 md:my-20 py-10 md:py-20"}>
          <div className="sm:container mx-4 sm:mx-auto">
            <div className="flex flex-col items-center">
              <span className="font-seaweed text-3xl text-teal-700">
                we are best
              </span>
              <h5 className=" text-4xl mt-5 font-semibold">Why Choose Teal</h5>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mg:mt-16">
              {aboutData.map((item, index) => (
                <AboutCad
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="sm:container mx-4 sm:mx-auto my-10 md:my-20 py-10 md:py-20">
          <div className="flex flex-col items-center">
            <span className="font-seaweed text-3xl text-teal-700">
              Testimonials
            </span>
            <h5 className="text-3xl lg:text-4xl mt-5 font-semibold">
              Love from our Clients
            </h5>
          </div>
          <div>
            <Swiper
              className=" w-full"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              loop
              breakpoints={{
                350: { slidesPerView: 1.2, spaceBetween: 5 },
                640: { slidesPerView: 2, spaceBetween: 5 },
                768: { slidesPerView: 2.5, spaceBetween: 5 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
                1280: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <SwiperSlide className="pt-16 pb-4" key={index}>
                  <TestimonialCard />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
