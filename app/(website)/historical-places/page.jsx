"use client";
import React, { useRef } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import { avatars, banners, placesImages } from "@/constant/data";
import { Autoplay, Navigation, Pagination } from "swiper";
import Banner from "./Banner";
import Places from "./Places";
import Testimonial from "./Testimonial";

export default function HistoricalPlaces() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <main className="w-[100%] ">
      <div className="w-[100%] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]">
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
          modules={[Pagination, Autoplay, Navigation]}
          loop
        >
          {banners.historicalPlaces.map((item, index) => (
            <SwiperSlide key={index}>
              <Banner img={item.banner} title={item.title} desc={item.desc} />
            </SwiperSlide>
          ))}

          <div className="absolute w-[100%] z-50 bottom-[45%] sm:bottom-[50%] left-0 flex  justify-between items-center gap-2 px-2 lg:px-8">
            <div
              ref={navigationPrevRef}
              className="w-8 sm:w-10 md:w-14 h-7 sm:h-9 md:h-12 flex justify-center items-center cursor-pointer bg-primary-600 active:bg-primary-800  rounded-md text-white transition-all duration-300 ease-in-out"
            >
              <Icon
                className="w-4 sm:w-5 md:w-8 h-4 sm:h-5 md:h-8"
                icon="fluent:arrow-left-28-filled"
              />
            </div>
            <div
              ref={navigationNextRef}
              className="w-8 sm:w-10 md:w-14 h-7 sm:h-9 md:h-12 flex justify-center items-center cursor-pointer bg-primary-600 active:bg-primary-800  rounded-md text-white transition-all duration-300 ease-in-out"
            >
              <Icon
                className="w-4 sm:w-5 md:w-8 h-4 sm:h-5 md:h-8"
                icon="fluent:arrow-right-28-filled"
              />
            </div>
          </div>
        </Swiper>
      </div>
      <div className="sm:container mx-4 sm:mx-auto my-5 lg:my-8">
        <Breadcrumbs />
        <div className="mt-8">
          <h1 className="text-gray-700 text-lg xs:text-xl md:text-2xl lg:text-3xl leading-none capitalize">
            places
          </h1>{" "}
          <Swiper
            className="!py-2 w-full"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            // pagination={{
            //   clickable: true,
            //   // type: "custom",
            //   // renderCustom: () => {},
            // }}
            loop
            breakpoints={{
              350: { slidesPerView: 1.2, spaceBetween: 5 },
              420: { slidesPerView: 1.4, spaceBetween: 5 },
              550: { slidesPerView: 1.6, spaceBetween: 5 },
              580: { slidesPerView: 1.8, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 10 },
              700: { slidesPerView: 2.5, spaceBetween: 10 },
              768: { slidesPerView: 2.5, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 15 },
              1280: { slidesPerView: 4, spaceBetween: 15 },
            }}
          >
            {placesImages.map((item, index) => (
              <SwiperSlide key={index}>
                <Places img={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={"w-full bg-teal-100 mt-10 py-4 sm:py-6 md:py-8 lg:py-10"}>
        <div className="container mx-auto text-black-900">
          <div className="flex flex-col items-center">
            {/* <span className="font-seaweed text-3xl text-teal-700">
              we are best
            </span> */}
            <h5 className=" text-2xl md:text-3xl lg:text-4xl font-semibold font-urbanist">
              Testimonials
            </h5>
          </div>
          <div className=" mt-4 lg:mt-8">
            <Swiper
              className="!py-2 w-full"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              // pagination={{
              //   clickable: true,
              //   // type: "custom",
              //   // renderCustom: () => {},
              // }}
              loop
              breakpoints={{
                350: { slidesPerView: 1.2, spaceBetween: 5 },
                420: { slidesPerView: 1.4, spaceBetween: 5 },
                550: { slidesPerView: 1.6, spaceBetween: 5 },
                580: { slidesPerView: 1.8, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 10 },
                700: { slidesPerView: 2.5, spaceBetween: 10 },
                768: { slidesPerView: 2.5, spaceBetween: 10 },
                1024: { slidesPerView: 3, spaceBetween: 15 },
                1280: { slidesPerView: 4, spaceBetween: 15 },
              }}
            >
              {avatars.map((item, index) => (
                <SwiperSlide key={index}>
                  <Testimonial img={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="sm:container mx-4 sm:mx-auto flex flex-col my-10">
        <h1 className="text-gray-700 text-xl md:text-2xl lg:text-3xl leading-none capitalize">
          who we are
        </h1>
        <p className="text-xs sm:text-sm md:text-base mt-4 text-gray-900">
          Teal Tours aim to be the leader in bringing value and a great
          experience for Teal Tours & Attractions to travellers.
        </p>
        <p className="text-xs sm:text-sm md:text-base mt-2 text-gray-900 ">
          We are confident that our tour packages can meet all travellers
          sightseeing experience, unique transportation and hospitality needs.
          Your experienced guide shares informative commentary throughout the
          day as you hop off the bus to see the sights and get great photos. We
          will hold you and the members of your travelling party jointly and
          individually liable for any damage to the accommodation, furniture,
          apparatus or other materials located within the accommodation,
          together with any legal costs we incur in pursuing a claim. It is your
          duty to report any breakages, defects or damage to an appropriate
          person immediately.
        </p>
      </div>
    </main>
  );
}
