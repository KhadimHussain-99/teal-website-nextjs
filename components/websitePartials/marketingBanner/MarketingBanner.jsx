"use client";
import React, { useState } from "react";
import Modal from "../../ui/Modal";
import Image from "next/image";

const MarketingBanner = ({ img }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Image
        width={300}
        height={200}
        className="w-full h-[180px] lg:h-[220px] rounded-md cursor-pointer"
        onClick={() => setActive(true)}
        src={img}
        alt=""
      />
      <Modal
        title=""
        label="Banner"
        activeModal={active}
        onClose={() => setActive(false)}
        themeClass="bg-primary-800 p-2 xs:p-4"
        centered={true}
        noFade={false}
        className="max-w-xl md:max-w-3xl lg:max-w-5xl flex flex-col items-end justify-center my-20 "
      >
        <Image
          width={800}
          height={600}
          className="w-full h-full object-cover"
          src={img}
          alt=""
        />
        <h4 className="mt-2 md:mt-4 text-lg md:text-2xl">
          Where does it come from?
        </h4>
        <p className="text-[10px] md:text-sm md:mt-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur,
        </p>
      </Modal>
    </>
  );
};

export default MarketingBanner;
