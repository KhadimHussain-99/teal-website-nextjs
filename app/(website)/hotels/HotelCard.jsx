import React from "react";
import hotelImg from "@/public/assets/images/all-img/marriot-hotel.jpeg";
import { Rating } from "primereact/rating";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const HotelCard = () => {
  return (
    <div className=" flex flex-col bg-white rounded-md shadow-md overflow-hidden group">
      <div className="h-[100px] sm:h-[180px] relative ">
        <Link href="/hotel-detail">
          <Image
            width={300}
            height={200}
            className="w-full h-full object-cover rounded-t-md"
            src={hotelImg}
            alt="hotel picture"
          />
        </Link>
        <button className="absolute top-5 -left-3 bg-red-300 hover:bg-red-200 text-xs rounded-full py-1 text-gray-800 font-semibold pl-8 pr-4">
          View Deal
        </button>
        <div className="h-[30%] xs:h-[60%] absolute flex flex-col gap-2 xl:gap-4 group-hover:right-2 -right-10 top-2 xs:top-4  xs:group-hover:right-4 transition-all ease-out z-[999]">
          <button
            type="button"
            className="bg-main bg-primary-600 text-white p-1 xs:p-2 rounded-full "
          >
            <Icon className="w-full " icon="ph:heart-fill" />
          </button>
        </div>
      </div>
      <div className="p-2 sm:p-4">
        <h4 className="font-semibold text-sm xs:text-base sm:text-xl">
          Marriot Hotel
        </h4>
        <span className="flex items-center gap-4 text-[11px] xs:text-xs sm:text-base">
          {" "}
          <Rating
            value={4}
            readOnly
            cancel={false}
            className="my-1 md:my-2 flex gap-1 sm:gap-2"
            size={6}
            pt={{
              onIcon: {
                className: "!w-3 sm:!w-4 !h-3 sm:!h-4 !text-yellow-500",
              },
              offIcon: {
                className: "!w-3 sm:!w-4 !h-3 sm:!h-4",
              },
            }}
          />{" "}
          (2,365)
        </span>
        <span className="flex gap-1 font-medium text-gray-500 text-[11px] xs:text-xs sm:text-sm">
          <Icon icon="mdi:location" />
          Islamabad
        </span>
        <div className="flex items-end justify-between mt-2 sm:mt-4">
          {" "}
          <p className="font-bold text-[11px] xs:text-xs sm:text-base ">
            Rs: 35500/=
          </p>{" "}
          <button className="font-medium sm:font-semibold bg-primary-700 hover:bg-primary-500 px-2 sm:px-3 py-1 sm:py-[6px] rounded-md text-[11px] xs:text-xs sm:text-sm text-white inline-flex justify-center items-center">
            Book Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
