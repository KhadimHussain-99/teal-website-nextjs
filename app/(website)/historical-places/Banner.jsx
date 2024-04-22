import Image from "next/image";

const Banner = ({ img, title, desc, className }) => {
  return (
    <div className={`w-[100%] h-[100%] relative ${className} `}>
      <Image
        width={800}
        height={400}
        className="w-full h-full  object-cover"
        src={img}
        alt="banner"
      />
      <div className="z-10 w-full h-full absolute top-0 bg-black-500 opacity-40"></div>

      <div className="z-10 w-full h-full flex flex-col justify-center items-center absolute top-0 text-white">
        <span className="text-xl lg:text-3xl font-semibold text-teal-500 font-seaweed">
          Discover th Planet...
        </span>
        {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white lg:mt-4 font-urbanist">
          Travel With <span className="home-text">Teal</span>
        </h1> */}
        <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white lg:mt-4 font-urbanist leading-10 font-normal text-center mt-4">
          {title}
        </h5>
        <p className="font-urbanist mt-1 lg:mt-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-center text-xs md:text-sm lg:text-xl text-ellipsis lg:text-clip line-clamp-2 lg:line-clamp-none px-6">
          {/* {desc} */}TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER <br />
          DON'T MISS THIS OPPORTUNITY FOR YOUR BUSINESS
        </p>
      </div>
    </div>
  );
};

export default Banner;
