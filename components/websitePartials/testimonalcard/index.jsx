"use client";
import React from "react";
import profile from "../../../public/assets/images/all-img/thumb-4.png";
import Image from "next/image";

import { Rating } from "primereact/rating";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col items-center bg-white rounded-md p-8 pt-16 md:pt-20 relative shadow">
      <div className="absolute -top-10">
        <Image
          width={40}
          height={40}
          className="w-24 h-24 rounded-full"
          src={profile}
          alt=""
        />
      </div>
      <h4 className="font-semibold text-2xl">Khadim Hussain</h4>
      <span className="text-base">Web Developer</span>
      <Rating
        value={3}
        readOnly
        cancel={false}
        className="my-1 md:my-2 flex gap-2"
        size={6}
        pt={{
          onIcon: {
            className: "!w-4 !h-4 !text-yellow-500",
          },
          offIcon: {
            className: "!w-4 !h-4 ",
          },
        }}
      />
      <p className="text-center mt-2 text-base text-gray-500 leading-5 sm:leading-6 lg:leading-7">
        “Fames gravid nulam lectus vivera placert utricies. Lorem ipsum dolor
        sit amet more vel turpis penabus. Fusce eleifend loremo suscipit teach
        or moeto”
      </p>
    </div>
  );
};

export default TestimonialCard;
