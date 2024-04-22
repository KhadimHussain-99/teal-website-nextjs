import React, { useEffect, useState } from "react";
import eventImg from "../../../public/assets/images/all-img/event.jpg";
import profile from "../../../public/assets/images/all-img/thumb-4.png";
import Image from "next/image";

const EventCard = ({ displaySec }) => {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 40,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Decrease seconds by 1
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        seconds--;

        // Adjust minutes and hours accordingly
        if (seconds < 0) {
          seconds = 59;
          minutes--;

          if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
              // Timer has reached 0, clear interval
              clearInterval(timer);
              return { hours: 0, minutes: 0, seconds: 0 };
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000); // Update every second

    // Clean up timer on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time to display with leading zeros
  const formatTime = (value) => {
    return value < 10 ? "0" + value : value;
  };

  return (
    <div className="flex flex-col bg-white rounded-md">
      <div onClick={displaySec} className="w-full h-[120px] lg:h-[180px]">
        <Image
          width={400}
          height={200}
          id="event"
          className="w-full h-full object-cover rounded-t-md"
          src={eventImg}
          alt="Event picture"
        />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex items-center gap-2">
          <Image
            width={100}
            height={100}
            className="w-6 h-6 object-cover rounded-full"
            src={profile}
            alt="profile image"
          />
          <h3 className="text-lg font-semibold">Digital Elliptical</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold">Monthly Dinner</h3>
          <span className="text-xs text-gray-500">
            Thur, 10 April 2024 at 10:30 pm
          </span>

          <span className="text-xs sm:text-sm flex items-center font-medium text-black-600 gap-1 before:w-1 before:h-1 before:mb[2px] before:bg-black-600 before:rounded-full">
            20k Interested - 13k Going
          </span>
        </div>
        <p className="text-xs sm:text-sm md:text-base font-semibold">
          Time Remaining:{" "}
          {`${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(
            time.seconds
          )}`}
        </p>
        <button className="font-medium bg-teal-600 hover:bg-teal-500 px-2 py-2 rounded-md text-xs sm:text-sm text-white inline-flex justify-center items-center gap-1 sm:mt-4">
          Interested
        </button>
      </div>
    </div>
  );
};

export default EventCard;
