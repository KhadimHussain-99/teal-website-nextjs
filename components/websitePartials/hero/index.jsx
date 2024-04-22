"use client";
import Image from "next/image";

const Hero = ({ img, title, desc, className }) => {
  return (
    <div className={`w-[100%] h-[100%] relative ${className} `}>
      <Image
        width={900}
        height={600}
        className="w-full h-full  object-cover"
        src={img}
        alt="Hero"
      />
      <div className="z-10 w-full h-full absolute top-0 bg-black-500 opacity-40"></div>

      <div className="absolute top-0 w-full h-full flex flex-col sm:gap-3 justify-center items-center  text-white z-10 ">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-inter font-bold ">
          Travel With <span className="home-text">Teal</span>
        </h1>
        <h3 className="text-lg sm:text-3xl md:text-4xl lg:text-4xl text-white font-urbanist">
          {title}
        </h3>
        <h5 className="text-xs text-white font-normal text-center">{desc}</h5>
        <button className="px-3 md:px-6 py-1 md:py-2 rounded-full bg-primary-600 text-white capitalize text-xs sm:text-sm md:text-xl mt-2">
          Buy now at 54 $ *
        </button>
        <span className="text-[9px] sm:text-xs mt-1 md::mt-2 capitalize">
          * best price guaranteed!
        </span>
      </div>
    </div>
  );
};

export default Hero;
