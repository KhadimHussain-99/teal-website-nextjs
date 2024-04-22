import { Icon } from "@iconify/react";
import React from "react";

const Amenity = ({ icon, desc }) => {
  return (
    <div className="col-span-1 flex items-center justify-center gap-4 bg-white px-2 py-6 shadow rounded-md">
      <div className="">
        <Icon className="w-5 h-5" icon={icon} />
      </div>
      <span className="font-medium text-sm truncate">{desc}</span>
    </div>
  );
};

export default Amenity;
