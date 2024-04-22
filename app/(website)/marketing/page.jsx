"use client";
import React from "react";
import topBanner from "@/public/assets/images/all-img/marketing-banner.webp";
import Image from "next/image";
import Card from "./Card";
import marketing1 from "@/public/assets/images/all-img/explore.png";
import marketing2 from "@/public/assets/images/all-img/destination.jpeg";
import marketing3 from "@/public/assets/images/all-img/exclusive.png";

function MarketingPage() {
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
            Unlock Your Wanderlust
          </h3>
          <p className="w-[90%] text-[10px] sm:text-lg md:text-xl bg-white opacity-80 text-[#D39058] px-2 sm:px-4 py-1 mt-[2px] line-clamp-1 text-ellipsis">
            Embark on a journey of discovery with Teal Travel. Explore
            breathtaking destinations, seize exclusive deals, and create
            unforgettable memories.{" "}
          </p>
        </div>
      </div>
      <div className="sm:container px-4 sm:mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">
          Discover Your Next Adventure
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <Card
            title="Explore Exciting Destinations"
            desc="Discover a world of adventure with our curated selection of
              destinations. From bustling cities to serene beaches, there's
              something for every traveler."
            btn="Explore Now"
            img={marketing1}
          />
          <Card
            title="Book Your Dream Getaway"
            desc="Plan your perfect vacation with ease. Browse our selection of
              accommodations, flights, and activities, and book your trip
              hassle-free."
            btn="Book Now"
            img={marketing2}
          />
          <Card
            title="Unlock Exclusive Deals"
            desc="Save big on your next adventure with our exclusive deals and
              discounts. Don't miss out on limited-time offers!"
            btn="View Deals"
            img={marketing3}
          />
        </div>
      </div>
    </>
  );
}

export default MarketingPage;
