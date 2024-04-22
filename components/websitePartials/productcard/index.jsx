import { Icon } from "@iconify/react";
import { Rating } from "primereact/rating";
import React from "react";
import product from "@/public/assets/images/all-img/watch.jpeg";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ index }) => {
  return (
    <div
      data-aos={index ? "fade-left" : ""}
      data-aos-delay={index ? index + "00" : ""}
      className={`col-span-1 relative overflow-hidden w-full h-[280px] sm:h-[300px] lg:h-[340px] bg-white rounded-lg shadow group `}
    >
      <div className="h-[30%] sm:h-[60%] absolute flex flex-col gap-2 xl:gap-4 group-hover:right-2 -right-10 top-2 sm:top-4  sm:group-hover:right-4 transition-all ease-out z-[999]">
        <button
          type="button"
          className="bg-main text-white p-1 sm:p-2 rounded-full "
        >
          <Icon className="w-full text-white" icon="ph:heart-fill" />
        </button>
      </div>

      <div className="flex flex-col justify-between w-full h-full px-2 py-4">
        <Link href="/product-detail" className=" w-full ">
          <Image
            width={300}
            height={300}
            className={`w-[50%] max-h-[130px] mx-auto object-contain`}
            src={product}
            alt=""
          />
        </Link>
        <div className="flex flex-col sm:px-2 gap-1 pt-2">
          <span className="text-[9px] truncate sm:text-sm font-inter font-semibold text-gray-400">
            Electronic{" "}
          </span>
          <p className="text-gray-800 text-[11px] sm:text-[13px] font-bold cursor-pointer truncate">
            Apple Watch Ultra 2
          </p>
          <Rating
            value={4}
            readOnly
            cancel={false}
            className="flex gap-[2px]"
            size={6}
            pt={{
              onIcon: {
                className: "!w-[10px] !h-[10px]",
              },
              offIcon: {
                className: "!w-[10px] !h-[10px]",
              },
            }}
          />
          <p className="flex items-center gap-2">
            {" "}
            <span className="text-[12px] sm:text-sm text-red-500 font-bold">
              Rs: 4000/=
            </span>
            {/* <span className="text-[11px] text-gray-500 font-semibold line-through">
                4562
              </span> */}
          </p>
          <button className="bg-primary-700 hover:bg-primary-600 text-white text-center text-sm sm:text-sm py-2 sm:py-1 px-2 rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
