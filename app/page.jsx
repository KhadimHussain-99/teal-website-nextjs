"use client";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Hero from "../components/websitePartials/hero";
import AnnouncementCard from "../components/websitePartials/announcementcard";
import FeedsCard from "../components/websitePartials/feedscard";
import BlogCard from "../components/websitePartials/blogcard";
import Modal from "../components/ui/Modal";
import map from "@/public/assets/images/all-img/dotted-map.png";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  announce,
  banners,
  blogs,
  feeds,
  offers,
  services,
} from "../constant/data";
import MarketingBanner from "../components/websitepartials/marketingBanner";
import Image from "next/image";

function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-2 sm:right-5 top-[45%] w-6 sm:w-10 md:w-14 h-6 sm:h-9 md:h-12 flex justify-center items-center cursor-pointer bg-primary-600 active:bg-primary-800 rounded-md text-white transition-all duration-300 ease-in-out z-10"
    >
      <Icon
        className="w-5 md:w-8 h-5 md:h-8"
        icon="fluent:arrow-right-28-filled"
      />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute left-2 sm:left-5 top-[45%] w-6 sm:w-10 md:w-14 h-6 sm:h-9 md:h-12 flex justify-center items-center cursor-pointer bg-primary-600 active:bg-primary-800 rounded-md text-white transition-all duration-300 ease-in-out z-10"
    >
      <Icon
        className="w-5 md:w-8 h-5 md:h-8"
        icon="fluent:arrow-left-28-filled"
      />
    </div>
  );
}

export default function Home() {
  const [modal, setModal] = useState(false);

  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <main className="">
      {/* Hero section start */}
      <div className="w-[100%]  relative">
        <Slider
          className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[750px]"
          {...settings}
        >
          {banners.home.map((item, index) => (
            <Hero
              key={index}
              img={item.banner}
              title={item.title}
              desc={item.desc}
              className={"h-[250px] sm:h-[350px] md:h-[450px] lg:h-[750px]"}
            />
          ))}
        </Slider>
      </div>

      {/* Marketing section start */}
      <div className="mx-4 sm:container sm:mx-auto my-5 lg:my-8 pt-4 lg:pt-8 relative">
        <div className="flex justify-between items-center mb-2 font-semibold font-seaweed">
          <h1 className="text-gray-700 text-lg xs:text-xl md:text-2xl lg:text-3xl leading-none">
            Offer to Inspire You
          </h1>
          <Link
            href="/"
            className="mb-0 pt-1 text-main text-xs xs:text-sm hover:text-primary-600 transition-all duration-300 ease-in-out inline-flex items-center justify-end group"
          >
            See All{" "}
            <Icon
              className="group-hover:pl-3 w-7 h-3 transition-all duration-300 ease-in-out"
              icon={"maki:arrow"}
            />
          </Link>
        </div>
        <Swiper
          className="!pb-10 w-full"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} !bg-teal-500"> </span>`;
            },
          }}
          modules={[Pagination, Autoplay]}
          loop
          breakpoints={{
            350: { slidesPerView: 1.2, spaceBetween: 5 },
            640: { slidesPerView: 2, spaceBetween: 5 },
            768: { slidesPerView: 2.5, spaceBetween: 5 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {offers.map((item, index) => (
            <SwiperSlide key={index}>
              <MarketingBanner img={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Ammouncements section start */}
      <div className="mx-4 sm:container sm:mx-auto my-5 lg:my-8 pt-4 lg:pt-8">
        <div className="flex justify-between items-center mb-2 font-semibold font-seaweed">
          <h1 className="text-gray-700 text-lg xs:text-xl md:text-2xl lg:text-3xl leading-none">
            Announcements
          </h1>
          <Link
            href="/announcements"
            className="mb-0 pt-1 text-main text-xs xs:text-sm hover:text-primary-600 transition-all duration-300 ease-in-out inline-flex items-center justify-end group"
          >
            See All{" "}
            <Icon
              className="group-hover:pl-3 w-7 h-3 transition-all duration-300 ease-in-out"
              icon={"maki:arrow"}
            />
          </Link>
        </div>
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
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2.5, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {announce.map((item, index) => (
            <SwiperSlide key={index}>
              <AnnouncementCard
                title={item.title}
                desc={item.desc}
                btn={item.btn}
                vector={item.vector}
                // icon={item.icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Blogs section start */}
      <div className="mx-4 sm:container sm:mx-auto my-5 lg:my-8 pt-4 lg:pt-8">
        <div className="flex justify-between items-center mb-2 font-semibold font-seaweed">
          <h1 className="text-gray-700 text-lg xs:text-xl md:text-2xl lg:text-3xl leading-none">
            Featured guide from users
          </h1>
          <Link
            href="/"
            className="mb-0 pt-1 text-main text-xs xs:text-sm hover:text-primary-600 transition-all duration-300 ease-in-out inline-flex items-center justify-end group"
          >
            See All{" "}
            <Icon
              className="group-hover:pl-3 w-7 h-3 transition-all duration-300 ease-in-out"
              icon={"maki:arrow"}
            />
          </Link>
        </div>
        <div>
          {" "}
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
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 2.5, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {blogs.map((item, index) => (
              <SwiperSlide key={index}>
                <BlogCard
                  title={item.title}
                  desc={item.desc}
                  blog={item.image}
                  type={item.type}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Map section start */}
      <div className="mx-4 sm:container sm:mx-auto my-5 lg:my-8 h-[250px] sm:h-[320px] md:h-[400px] relative">
        <Image
          className="w-full h-full object-cover"
          height={500}
          width={800}
          src={map}
          alt=""
        />
        <div className="w-full h-full absolute bottom-0 left-0 bg-black-500 bg-opacity-25 flex flex-col justify-end p-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium lg:w-[400px]">
            Get inspired for your trip to the World
          </h3>
          <div className="mt-2">
            <button className="text-sm md:text-base bg-orange-500 text-white px-3 py-1 rounded-full">
              Explore guides
            </button>
          </div>
        </div>
      </div>

      {/* Feeds section start */}
      <div className="mx-4 sm:container sm:mx-auto my-5 lg:my-8 pt-4 lg:pt-8">
        <div className="flex justify-between items-center mb-2 font-semibold font-seaweed">
          <h1 className="text-gray-700 text-lg xs:text-xl md:text-2xl lg:text-3xl leading-none">
            Feeds
          </h1>
          <Link
            href="/feeds"
            className="mb-0 pt-1 text-main text-xs xs:text-sm hover:text-primary-600 transition-all duration-300 ease-in-out inline-flex items-center justify-end group"
          >
            See All{" "}
            <Icon
              className="group-hover:pl-3 w-7 h-3 transition-all duration-300 ease-in-out"
              icon={"maki:arrow"}
            />
          </Link>
        </div>
        <Swiper
          className="!py-2 w-full"
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
            1024: { slidesPerView: 3, spaceBetween: 10 },
            1280: { slidesPerView: 4, spaceBetween: 10 },
          }}
        >
          {feeds.map((item, index) => (
            <SwiperSlide key={index}>
              <FeedsCard tag={item.tag} img={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Explore section start */}
      <div className="mx-4 sm:container sm:mx-auto my-5 lg:my-8 pt-4 lg:pt-8">
        <div className="flex justify-between items-center mb-2 font-semibold font-seaweed">
          <h1 className="text-gray-700 text-lg xs:text-xl md:text-2xl lg:text-3xl leading-none">
            Explore
          </h1>
        </div>
        <div
          // data-aos="fade-up"
          className="best-services w-full grid grid-cols-2  lg:grid-cols-5 gap-y-2 gap-x-2 lg:gap-x-4 lg:space-y-0 lg:justify-between lg:items-center lg:h-[110px] px-2 xs:px-10 lg:py-0 lg:px-0 py-5 xs:py-10"
        >
          {services.map((service) => (
            <Link
              href={service.link}
              key={service.id}
              className="item col-span-1 bg-white py-6 lg:py-8 rounded-lg flex justify-center items-center shadow"
            >
              <div className="flex space-x-[2px] xs:space-x-5 rtl:space-x-reverse items-center">
                <div>
                  <span className="w-5 sm:w-7 lg:w-10 h-5 sm:h-7 lg:h-10 text-main">
                    <Icon
                      className="w-6 sm:w-8 lg:w-12 h-5 sm:h-7 lg:h-10 text-teal-700"
                      icon={service.icon}
                    />
                  </span>
                </div>
                <div>
                  <p className="text-black-500 text-[10px] sm:text-sm lg:text-base font-bold xs:tracking-wide ">
                    {service.title}
                  </p>
                  {/* <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 line-clamp-1">
                    {service.desc}
                  </p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button
        onClick={() => setModal(true)}
        className="w-8 h-8 rounded-full transition duration-300 bg-teal-700 hover:bg-teal-500 text-white fixed bottom-5 right-5 flex justify-center items-center "
      >
        <Icon className="w-5 h-5" icon="ph:plus-bold" />
      </button>
      <Modal
        title=""
        centered={true}
        activeModal={modal}
        onClose={() => setModal(false)}
      >
        <div className="flex items-center gap-4">
          <button className="bg-teal-700 text-white px-4 py-2 flex items-center gap-2 rounded-full">
            <Icon icon="mdi:location" />
            Trip Plan
          </button>
          <button className="bg-teal-700 text-white px-4 py-2 flex items-center gap-2 rounded-full">
            <Icon icon="octicon:search-16" /> Find Buddy
          </button>
        </div>
      </Modal>
    </main>
  );
}
