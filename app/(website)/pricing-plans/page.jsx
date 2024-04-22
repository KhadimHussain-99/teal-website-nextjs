"use client";
import { Icon } from "@iconify/react";
import React from "react";
import PricingCard from "./PricingCard";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import useWidth from "../../../hooks/useWidth";

const plans = [
  {
    name: "Monthly",
    desc: "1999/= Pkr/month",
  },
  {
    name: "Quaterly",
    desc: "11999/= Pkr/month",
  },
  {
    name: "Early",
    desc: "22999/= Pkr/month",
  },
];

export default function Pricing() {
  const {
    width,
    breakpoints: { sm },
  } = useWidth();
  const [selected, setSelected] = useState(plans[0]);
  return (
    <div className="sm:container mx-4 sm:mx-auto my-8">
      <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl col-span-12">
        Unlock Pro to acces all features
      </h3>
      <div className="mt-2 lg:mt-5">
        <Swiper
          className="!py-5 lg:!py-8"
          effect={"coverflow"}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          centeredSlides={width < sm ? true : false}
          breakpoints={{
            // Add breakpoints for different screen sizes
            350: {
              slidesPerView: 1.1,
            },
            400: {
              slidesPerView: 1.2,
            },
            430: {
              slidesPerView: 1.3,
            },
            450: {
              slidesPerView: 1.4,
            },
            500: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.1,
            },
            1024: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 2.8,
              spaceBetween: 10,
            },
          }}
          modules={[EffectCoverflow]}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index}>
              <PricingCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-4 lg:mt-8">
        <RadioGroup
          className="col-span-3"
          value={selected}
          onChange={setSelected}
        >
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "w-full md:w-[33%] ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                      : "w-full md:w-[33%]"
                  }
                  ${
                    checked
                      ? "w-full md:w-[33%] bg-primary-600 text-white"
                      : "w-full md:w-[33%] bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex  w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-semibold  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span>{plan.desc}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <Icon
                            className="w-6 h-6 text-primary-800"
                            icon="lets-icons:check-fill"
                          />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>{" "}
    </div>
  );
}
