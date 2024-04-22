import React from "react";
import Image from "next/image";

const Testimonial = ({ img }) => {
  return (
    <div className="bg-teal-50 rounded-md flex flex-col items-center py-5 lg:py-7 px-3 lg:px-5">
      <p className="text-sm text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
        voluptates libero. Mollitia, obcaecati natus. Eius deserunt ut
        repellendus.
      </p>
      <div className="flex items-center gap-3 mt-4">
        <Image
          width={100}
          height={100}
          className="w-12 object-cover rounded-full border"
          src={img}
          alt=""
        />
        <div className="flex flex-col ">
          <h4 className="text-lg">Zohaib</h4>
          <p className="text-sm">Avid Travelor</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
