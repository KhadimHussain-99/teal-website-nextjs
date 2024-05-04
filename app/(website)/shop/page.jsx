"use client";
import React, { useRef, useState } from "react";
import Textinput from "@/components/ui/Textinput";
import Select from "@/components/ui/Select";
import Checkbox from "@/components/ui/Checkbox";
import useWidth from "../../../hooks/useWidth";
import { Icon } from "@iconify/react";
import ProductCard from "@/components/websitepartials/productcard/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { shoppingCategories } from "@/constant/data";

export default function Shop() {
  const [filterMenu, setFilterMenu] = useState(false);
  const {
    width,
    breakpoints: { lg },
  } = useWidth();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="sm:container mx-2 sm:mx-auto my-5 sm:my-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="w-full col-span-1 bg-white h-max p-4 sm:py-5 lg:py-10 lg:px-6 rounded-md">
          <div className={`w-full flex justify-between items-center`}>
            <h6 className="text-base">Filter Products</h6>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 my-4">
                <div className="col-span-1">
                  <Textinput
                    label={"Keyword"}
                    placeholder="Write Keywords Here..."
                  />
                </div>
                <div className="col-span-1">
                  <Select label={"Category"} placeholder="Select Category" />
                </div>
                <div className="col-span-1">
                  <Select
                    label={"Sub Category"}
                    placeholder="Select Sub Category"
                  />
                </div>
                <div className="col-span-1">
                  <span className="form-label">Suggested For You</span>
                  <div className="flex flex-col gap-1 mt-4 ">
                    <Checkbox label={"Top Rated"} />
                    <Checkbox label={"Most Viewed"} />
                  </div>
                </div>
                <div>
                  <label className="form-label">Price Range</label>
                  <div className="flex items-center gap-1">
                    <Textinput type="number" placeholder="min" />
                    <span className="">To</span>
                    <Textinput type="number" placeholder="max" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1 lg:col-span-3 grid grid-cols-2 md:!grid-cols-3 xl:!grid-cols-4 gap-4 bg-white px-2 py-4 sm:px-4 sm:py-5 lg:py-10 lg:px-6 rounded-md">
          <div className="col-span-2 md:!col-span-3 xl:!col-span-4">
            <h6>Categories</h6>
            <div className="bg-white rounded-lg py-2 md:py-5">
              <Swiper
                className="w-full self-center"
                spaceBetween={5}
                loop="true"
                breakpoints={{
                  280: { slidesPerView: 1.5 },
                  425: { slidesPerView: 2 },
                  500: { slidesPerView: 2.5 },
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 3.2 },
                  1024: { slidesPerView: 3.5 },
                  1280: { slidesPerView: 4 },
                }}
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
              >
                {shoppingCategories.map((item, index) => (
                  <SwiperSlide
                    className="flex justify-center items-center"
                    key={index}
                  >
                    <div className="h-[100px] flex flex-col justify-center items-center gap-2 bg-black-100 ">
                      <Icon className="w-8 h-8" icon={item.iconClass} />
                      <span>{item.name}</span>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full z-50 px-1 flex justify-between items-center">
                  <div
                    ref={navigationPrevRef}
                    className="w-[30px] z-50 sm:w-[30px] h-[30px] sm:h-[60px] bg-primary-600 text-white cursor-pointer flex justify-center items-center rounded"
                  >
                    <Icon
                      className="w-[20px] h-[20px]"
                      icon="mingcute:left-fill"
                    />
                  </div>
                  <div
                    ref={navigationNextRef}
                    className="w-[30px] sm:w-[30px] h-[30px] sm:h-[60px] bg-primary-600 text-white cursor-pointer flex justify-center items-center rounded"
                  >
                    <Icon
                      className="w-[20px] h-[20px]"
                      icon="mingcute:right-fill"
                    />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
          <h6 className="col-span-2 md:!col-span-3 xl:!col-span-4">Products</h6>
          {Array.from({ length: 7 }).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
