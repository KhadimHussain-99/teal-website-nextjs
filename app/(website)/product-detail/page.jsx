"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Rating } from "primereact/rating";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWidth from "../../../hooks/useWidth";
import Image from "next/image";
import productImg from "@/public/assets/images/all-img/watch.jpeg";
import ProductCard from "@/components/websitePartials/productcard/ProductCard";

export default function ProductDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { width } = useWidth();

  return (
    <div className="sm:container mx-4 sm:mx-auto my-8">
      <div className="relative">
        <div className="grid gap-4 lg:gap-12 grid-cols-1 lg:grid-cols-2">
          <div className="relative " data-aos="fade-right">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className=" md:h-[400px] h-[250px] rounded-md ">
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Thumbs, Navigation]}
                  className="h-full flex "
                >
                  {Array.from({ length: 8 }).map((_, index) => (
                    <SwiperSlide className="w-full" key={index}>
                      <Image
                        width={400}
                        height={300}
                        src={productImg}
                        className="w-full  h-full block rounded object-contain border p-2  border-slate-200"
                        alt={""}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="h-[30%]">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={width < 575 ? 4 : 5}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs, Autoplay]}
                >
                  {Array.from({ length: 8 }).map((_, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        width={600}
                        height={400}
                        src={productImg}
                        className="w-full p-2 border border-gray-300 md:h-[100px] h-[70px] rounded-md object-contain"
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <span
              className={`badge badge-primary absolute right-0 top-[5.2rem] sm:top-[4rem] md:top-[5rem] lg:top-28 badge-primary`}
            >
              In Stock
            </span>
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="text-xs md:text-base text-gray-400">Apple</p>
              <p className="text-xs md:text-base text-gray-400"> Electronics</p>
              <h5 className="text-lg md:text-2xl font-bold">
                Apple Watch Ultra 2
              </h5>
              <div className="flex items-center gap-2 md:gap-4">
                <Rating
                  value={4}
                  readOnly
                  cancel={false}
                  pt={{
                    offIcon: { className: "!w-5 !h-4" },
                    onIcon: { className: "!w-5 !h-4 !text-yellow-400" },
                    root: { className: "!gap-0" },
                  }}
                />
                <span className="text-xs md:text-base text-gray-400">
                  23034 reviews
                </span>
              </div>
              <div className="flex items-end gap-4">
                {/* <span className="text-gray-400 line-through ">
              PKR 40000
            </span> */}
                <span className="text-red-500 text-lg md:text-2xl  font-semibold">
                  Rs: 56500/=
                </span>
              </div>
              <div className="text-xs md:text-base text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium reprehenderit voluptatum quia ducimus vitae molestiae
                sunt blanditiis quasi, commodi odio cupiditate a quas quo quae
                earum omnis. Amet, possimus distinctio.
              </div>
              <div className="flex items-start gap-10">
                <div className="flex flex-col gap-1 md:gap-4">
                  <h6 className="text-xs md:text-base text-gray-600">Colors</h6>
                  <div className="flex gap-2 md:gap-3 items-center">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className={`md:w-6 w-6 h-6 md:h-6 rounded-full transition-all ease-in cursor-pointer bg-primary-${
                          4 + index
                        }00`}
                      ></div>
                    ))}
                  </div>
                </div>
                {/* {product?.size && (
                  <div className="flex flex-col gap-2 md:gap-4">
                    <h6 className="text-xs md:text-base text-gray-600">Size</h6>
                    <div className="flex gap-2 md:gap-4 items-center">
                      {JSON.parse(product.size).map((item, index) => (
                        <div
                          key={index}
                          // onClick={() => handleFieldChange("size", item)}
                          className={`border text-[10px] xs:text-xs md:text-base border-gray-400 py-[6px] px-[12px] rounded-md cursor-pointer transition-all ease-in ${
                            selectedFields.size === item
                              ? "bg-black-800 text-white "
                              : ""
                          } `}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}
                <div className="flex items-center box-border self-end">
                  <button
                    className="btn btn-outline-primary py-2 px-3 rounded-none "
                    type="button"
                    // onClick={() =>
                    //   handleFieldChange(
                    //     "count",
                    //     selectedFields.count == 1
                    //       ? selectedFields.count
                    //       : selectedFields.count - 1
                    //   )
                    // }
                  >
                    -
                  </button>
                  <div className="py-2 px-4 flex w-[50px] items-center justify-center  border-t border-b border-primary-600 cursor-default">
                    {/* {selectedFields.count} */}12
                  </div>
                  <button
                    className="btn btn-outline-primary py-2 px-3 rounded-none"
                    type="button"
                    // onClick={() =>
                    //   handleFieldChange("count", selectedFields.count + 1)
                    // }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex gap-2 xs:gap-4 mt-4 md:mt-0">
                <button
                  className={`btn py-1 px-3 btn-primary`}
                  type="button"
                  // onClick={handleWishlist}
                >
                  <Icon height={16} icon={"ph:heart"} />
                </button>

                <button
                  className="btn btn-primary text-xs xs:text-sm py-2"
                  type="button"
                  // disabled={!stock}
                  // onClick={addToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h6 className="w-[98%] text-gray-700 flex flex-wrap text-xl mb-8 leading-none">
          Related Products
        </h6>
        <Swiper
          className="!pb-2"
          breakpoints={{
            280: { slidesPerView: 1.5 },
            350: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          data-aos="fade-up"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
