"use client";
import React from "react";
import AnnounceCard from "./AnnounceCard";
import image1 from "@/public/assets/images/all-img/summer.jpg";
import image2 from "@/public/assets/images/all-img/bali.jpg";
import image3 from "@/public/assets/images/all-img/hot-baloon.jpg";
import topBanner from "../../../public/assets/images/all-img/announce.avif";

import Image from "next/image";

function Announcementspage() {
  return (
    <>
      <div className="sm:container sm:mx-auto relative w-full h-[250px] sm:h-[300px] md:h-[450px]">
        <Image
          width={1100}
          height={500}
          className="w-full h-full object-cover object-center"
          src={topBanner}
          alt=""
        />
        <div className="absolute left-4 lg:left-36 bottom-8 lg:bottom-28 z-10 ">
          <h3 className="text-sm sm:text-2xl md:text-4xl inline-block bg-white opacity-80 text-[#D39058] px-2 sm:px-4 py-1">
            Explore the Latest Updates and Offers
          </h3>
          <p className="w-[90%] text-[10px] sm:text-lg md:text-xl bg-white opacity-80 text-[#D39058] px-2 sm:px-4 py-1 mt-[2px] line-clamp-1 text-ellipsis">
            Stay informed and take advantage of exclusive deals, travel
            advisories, and exciting new destinations.
          </p>
        </div>
      </div>
      <div className="sm:container mx-4 sm:mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Latest Announcements</h1>

        {/* Announcement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Announcement Card 1: Promotion */}
          <AnnounceCard
            title="Summer Sale: Save up to 50% on Vacation Packages!"
            description="Book now and enjoy exclusive discounts on hotels, flights, and tours to your favorite destinations."
            imageSrc={image1}
            link="/promotions"
          />

          {/* Example Announcement Card 2: New Destination */}
          <AnnounceCard
            title="Explore our Newest Destination: Bali, Indonesia!"
            description="Discover the beauty of Bali with our new travel packages featuring luxury resorts, cultural experiences, and breathtaking landscapes."
            imageSrc={image2}
            link="/destinations/bali"
          />

          {/* Example Announcement Card 3: Travel Alert */}
          <AnnounceCard
            title="COVID-19 Travel Update: Important Information for Travelers"
            description="Stay informed about the latest travel advisories, safety guidelines, and entry requirements for your upcoming trips."
            imageSrc={image3}
            link="/covid-19-updates"
          />

          {/* Add more Announcement Cards here as needed */}
        </div>
      </div>
    </>
  );
}

export default Announcementspage;
