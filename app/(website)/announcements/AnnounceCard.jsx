import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnnounceCard = ({ title, description, imageSrc, link }) => {
  return (
    <Link
      href={link}
      className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    >
      <div className="relative">
        <Image
          width={800}
          height={400}
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
          {title}
        </div>
      </div>
      <div className="p-4">
        <p className="text-lg font-bold mb-2">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default AnnounceCard;
