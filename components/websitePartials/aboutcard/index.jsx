import { Icon } from "@iconify/react";
import React from "react";

const AboutCad = ({ icon, title, desc }) => {
  return (
    <div className="col-span-1 flex flex-col items-center bg-white rounded-md py-8 px-6 shadow">
      <Icon className="w-10 h-10 text-teal-600 mt-4" icon={icon} />
      <h5 className="text-xl font-bold mt-6 hover:text-teal-600 transition duration-200 ease-in-out cursor-pointer">
        {title}
      </h5>
      <p className="text-center text-gray-500 mt-3 ">{desc}</p>
    </div>
  );
};

export default AboutCad;
