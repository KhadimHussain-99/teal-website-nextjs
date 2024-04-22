"use client";
import React from "react";
import profile from "../../../public/assets/images/all-img/user-big.png";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BuddyCard = () => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-md shadow flex flex-col gap-2 px-5 py-6 group relative overflow-hidden">
      <div className="h-[30%] xs:h-[60%] absolute flex flex-col gap-2 xl:gap-4 right-4 top-4 transition-all ease-out z-[999]">
        <button
          type="button"
          className="bg-primary-600 text-white w-7 h-7 p-[6px] rounded-full "
          // onClick={() => setQuickView(true)}
        >
          <Icon className=" w-full h-full" icon="entypo:check" />
        </button>
      </div>
      <div className="w-full bg-transparent">
        <Image
          width={200}
          height={200}
          className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-white"
          src={profile}
          alt=""
        />
      </div>
      <p className="flex items-center text-sm gap-1">
        <Icon
          className="w-8 h-8 p-1 rounded-full text-primary-700"
          icon="mingcute:group-3-fill"
        />
        <span className="font-semibold">People:</span>{" "}
        {Math.round(Math.random() * 10)} persons
      </p>
      <p className="flex items-center text-sm gap-1">
        <Icon
          className="w-8 h-8 p-1 rounded-full text-primary-700"
          icon="ph:gender-male-bold"
        />
        <span className="font-semibold">Gender:</span> Male
      </p>
      <p className="flex items-center text-sm gap-1">
        <Icon
          className="w-8 h-8 p-1 rounded-full text-primary-700"
          icon="fontisto:car"
        />
        <span className="font-semibold">Vehicle:</span> Honda Civic
      </p>
      <p className="flex items-center text-sm gap-1">
        <Icon
          className="w-8 h-8 p-1 rounded-full text-primary-700"
          icon="mdi:departure-board"
        />
        <span className="font-semibold">Departure:</span> Karachi
      </p>
      <p className="flex items-center text-sm gap-1">
        <Icon
          className="w-8 h-8 p-1 rounded-full text-primary-700"
          icon="ic:sharp-share-arrival-time"
        />
        <span className="font-semibold">Arrival:</span> Lahore
      </p>
      <p className="flex items-center text-sm gap-1">
        <Icon
          className="w-8 h-8 p-1 rounded-full text-primary-700"
          icon="bx:dollar"
        />
        <span className="font-semibold">Expenses:</span> Rs:{" "}
        {Math.round(Math.random() * 10000) + 10000}/=
      </p>
      <p className="flex items-center text-sm gap-1">
        <Icon
          className="w-8 h-8 p-1 rounded-full text-primary-700"
          icon="ic:baseline-person"
        />
        <span className="font-semibold truncate">Per Person Expenses:</span> Rs:
        {Math.round(Math.random() * 20000) + 10000}/=
      </p>
      <div>
        <button
          onClick={() => router.push("/buddy")}
          className="w-full flex justify-center items-center py-2 bg-primary-700 hover:bg-primary-600 transition duration-300 ease-in-out font-medium text-white rounded-md"
        >
          View Full Details
        </button>
      </div>
    </div>
  );
};

export default BuddyCard;
