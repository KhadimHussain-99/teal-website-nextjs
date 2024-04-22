import React from "react";
import exclusive from "@/public/assets/images/all-img/exclusive.png";
import { Icon } from "@iconify/react";
import Image from "next/image";

const PricingCard = () => {
  return (
    <div className=" flex flex-col p-4 pb-8 rounded-md bg-white shadow-lg">
      <div className="w-full h-[200px] p-4">
        <Image
          width={300}
          height={200}
          className="w-full h-full object-cover"
          src={exclusive}
          alt=""
        />
      </div>
      <ul className=" flex flex-col pl-5 gap-2">
        <li className="flex items-center gap-2">
          <Icon
            className="w-6 h-6 text-primary-600"
            icon="lets-icons:check-fill"
          />
          <span>Offline Access</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon
            className="w-6 h-6 text-primary-600"
            icon="lets-icons:check-fill"
          />
          <span>Optimize Your Route</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon
            className="w-6 h-6 text-primary-600"
            icon="lets-icons:check-fill"
          />
          <span>Unlimited attachments</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon
            className="w-6 h-6 text-primary-600"
            icon="lets-icons:check-fill"
          />
          <span>Flight and Car rental deals</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon
            className="w-6 h-6 text-primary-600"
            icon="lets-icons:check-fill"
          />
          <span>Export to Google Maps</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon
            className="w-6 h-6 text-primary-600"
            icon="lets-icons:check-fill"
          />
          <span>Auto Gmail scanning</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon
            className="w-6 h-6 text-primary-600"
            icon="lets-icons:check-fill"
          />
          <span>Add places from anywhere</span>
        </li>
      </ul>
      <button className="mx-auto w-[80%] font-medium bg-teal-600 px-2 py-2 rounded-md text-sm text-white inline-flex justify-center items-center gap-1 mt-4">
        Try For Free
      </button>
    </div>
  );
};

export default PricingCard;
