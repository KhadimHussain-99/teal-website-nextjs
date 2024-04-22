"use client";
import React from "react";
import bgImage from "../../../public/assets/images/all-img/taj-mahal.jpg";
import { Icon } from "@iconify/react";
import { placesImages } from "../../../constant/data";
import Places from "../historical-places/Places";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";

export default function PlacePage() {
  return (
    <div className="">
      <div
        className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img className="w-[100%] h-[100%] object-cover" src={image} alt="" /> */}
        <div className="absolute -bottom-10 w-full h-full bg-gradient-to-t from-[#000]" />
        <div className="sticky top-0 sm:container  sm:mx-auto w-full h-full flex flex-col justify-end px-4 sm:px-6">
          <h5 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold font-urbanist">
            Classic Taj Mahal Tour
          </h5>
          <div className="w-[100%] bg-black-500 md:bg-transparent rounded-md bg-opacity-30 pt-2 flex gap-2 text-[10px] sm:text-xs md:text-sm lg:text-base text-white mt-2 sm:mt-4  overflow-x-scroll sm:overflow-x-clip  scrollbar">
            <button className="min-w-[120px] lg:min:w-[150px] !uppercase text-center transition-all duration-100 ease-linear hover:text-primary-600 border-b-4 border-transparent hover:border-primary-600 pb-2 sm:pb-4 focus:text-primary-600 font-medium">
              overview
            </button>
            <button className="min-w-[120px] lg:min:w-[170px] !uppercase text-center transition-all duration-100 ease-linear hover:text-primary-600 border-b-4 border-transparent hover:border-primary-600 pb-2 sm:pb-4 focus:text-primary-600 font-medium truncate px-2">
              inclusion/exclusion
            </button>
            <button className="min-w-[120px] lg:min:w-[150px] !uppercase text-center transition-all duration-100 ease-linear hover:text-primary-600 border-b-4 border-transparent hover:border-primary-600 pb-2 sm:pb-4 focus:text-primary-600 font-medium">
              highlights
            </button>
            <button className="min-w-[120px] lg:min:w-[150px] !uppercase text-center transition-all duration-100 ease-linear hover:text-primary-600 border-b-4 border-transparent hover:border-primary-600 pb-2 sm:pb-4 focus:text-primary-600 font-medium">
              intinerary
            </button>
            <button className="min-w-[120px] lg:min:w-[150px] !uppercase text-center transition-all duration-100 ease-linear hover:text-primary-600 border-b-4 border-transparent hover:border-primary-600 pb-2 sm:pb-4 focus:text-primary-600 font-medium">
              address
            </button>
          </div>
        </div>
      </div>
      <Breadcrumbs className="sm:container mx-4 sm:mx-auto mt-8 lg:mt-16" />
      <div className="sm:container sm:mx-auto w-full grid grid-cols-12 gap-4 lg:gap-8 mt-4 lg:mt-8 px-2 font-vietnam">
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 px-2 sm:px-4 py-4 lg:py-8 bg-white rounded-2xl">
          <div className="flex flex-col">
            <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-600">
              Overview
            </h5>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-4  text-black-800 mb-5">
              The Taj Mahal is a world-renowned monument located in Agra, India.
              It is an architectural masterpiece and one of the most iconic
              symbols of love and beauty in the world. Commissioned by the
              Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz
              Mahal, it was constructed between 1631 and 1653. The Taj Mahal is
              known for its stunning white marble mausoleum, which stands on a
              raised platform at the northern end of a vast complex. The
              mausoleum is flanked by four minarets and surrounded by a
              picturesque garden with reflecting pools. Its intricate marble
              inlay work, intricate calligraphy, and symmetrical design make it
              a marvel of Mughal architecture. Visitors from around the globe
              come to admire the Taj Mahal's beauty, craftsmanship, and
              historical significance. It is a UNESCO World Heritage Site and
              considered one of the New Seven Wonders of the World.
            </p>
            <hr />
            <div className="flex items-center my-8 gap-8">
              <p className="flex lg:items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                <Icon className="text-primary-600 w-4 h-4" icon="bi:clock" />1
                Day
              </p>
              <p className="flex lg:items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                <Icon
                  className="text-primary-600 w-4 h-4"
                  icon="oui:calendar"
                />
                on your request
              </p>
            </div>
            <hr />
          </div>
          <div className="flex flex-col mt-10">
            <h5 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-600 capitalize mb-4">
              inclusion/exclusion
            </h5>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col gap-4">
                <h6 className="text-base sm:text-2xl">
                  What is included in the tour
                </h6>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                    <Icon
                      className="w-4 sm:w-6 h-4 sm:h-6 text-primary-600"
                      icon="dashicons:yes-alt"
                    />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Professional English-speaking guide
                    </span>
                  </p>
                  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                    <Icon
                      className="w-4 sm:w-6 h-4 sm:h-6 text-primary-600"
                      icon="dashicons:yes-alt"
                    />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Hotel/airport pickup and drop-off
                    </span>
                  </p>
                  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                    <Icon
                      className="w-4 sm:w-6 h-4 sm:h-6 text-primary-600"
                      icon="dashicons:yes-alt"
                    />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Entrance fees to all site attractions
                    </span>
                  </p>
                  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                    <Icon
                      className="w-4 sm:w-6 h-4 sm:h-6 text-primary-600"
                      icon="dashicons:yes-alt"
                    />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Lunch and mineral water
                    </span>
                  </p>
                  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                    <Icon
                      className="w-4 sm:w-6 h-4 sm:h-6 text-primary-600"
                      icon="dashicons:yes-alt"
                    />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Private AC car to/from site attractions
                    </span>
                  </p>
                  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                    <Icon
                      className="w-4 sm:w-6 h-4 sm:h-6 text-primary-600"
                      icon="dashicons:yes-alt"
                    />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      All taxes, fees and handling charges
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4 lg:mt-0">
                <h6 className="text-base sm:text-2xl">
                  What is excluded in the tour
                </h6>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                    <Icon
                      className="w-4 sm:w-6 h-4 sm:h-6 text-red-700"
                      icon="healthicons:no"
                    />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Professional English-speaking guide
                    </span>
                  </p>
                  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                    <Icon
                      className="w-4 sm:w-6 h-4 sm:h-6 text-red-700"
                      icon="healthicons:no"
                    />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Hotel/airport pickup and drop-off
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 gap-6">
            <h5 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-600 capitalize ">
              highlights
            </h5>
            <div className="flex flex-col gap-4">
              <p className="flex lg:items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                <Icon
                  className="text-yellow-400 w-4 sm:w-7 h-4 sm:h-7"
                  icon="ic:outline-star"
                />
                <span className="w-[90%]">
                  Visit two of India's UNESCO World Heritage-listed sites: the
                  Taj Mahal and the Agra Fort
                </span>
              </p>
              <p className="flex lg:items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                <Icon
                  className="text-yellow-400 w-4 sm:w-7 h-4 sm:h-7"
                  icon="ic:outline-star"
                />
                <span className="w-[90%]">
                  Get an in-depth tour of the iconic Taj Mahal and the Tomb of
                  Itmad-ud-Daulah (Baby Taj)
                </span>
              </p>
              <p className="flex lg:items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                <Icon
                  className="text-yellow-400 w-4 sm:w-7 h-4 sm:h-7"
                  icon="ic:outline-star"
                />
                <span className="w-[90%]">
                  Enjoy a traditional Indian lunch at a popular restaurant
                </span>
              </p>
              <p className="flex lg:items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
                <Icon
                  className="text-yellow-400 w-4 sm:w-7 h-4 sm:h-7"
                  icon="ic:outline-star"
                />
                <span className="w-[90%]">
                  Transport by air-conditioned vehicle
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-10 gap-6">
            <h5 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-600 capitalize ">
              Itinerary
            </h5>
            <ul className="w-[100%] flex flex-col gap-2 list-disc pl-4 lg:pl-8 text-xs sm:text-sm md:text-base lg:text-lg ">
              <li>
                After pickup in Delhi by private vehicle, your day trip begins
                with the approximate 4-hour drive to Agra, a city located on the
                Yamuna River.{" "}
              </li>
              <li>
                Your first stop is Agra Fort, a World Heritage site and Mughal
                architectural wonder. With your private guide, enter the 94-acre
                (34-hectare) brick fort, noting the mix of Islamic and Hindu
                influences in its design. Hear about the purposes of the various
                buildings such as the Hall of Private Audience (Diwan-i-Khas),
                Pearl Fort (Moti Masjid), Mirror Palace (Sheesh Mahal) and Hall
                of Public Audience (Diwan-i-Am).{" "}
              </li>
              <li>
                Next, enjoy a lunch of Indian dishes at a local restaurant
              </li>
              <li>
                Continue your tour to your second World Heritage site and
                perhaps India’s most iconic landmark, the Taj Mahal. Built in
                the mid-1600s, this white marble mausoleum was commissioned by
                Mughal Emperor Shah Jahan in dedication to his wife. Learn about
                the Turkish, Indian and Persian architectural styles as you
                admire the detailed interior and exterior décor, the beautiful
                garden and the general magnificence of the place with your
                guide.
              </li>
              <li>
                Then head to your last attraction, the Tomb of Itmad-ud-Daulah,
                another mausoleum sometimes referred to as the Baby Taj, as it
                was one inspiration for the Taj Mahal and sits just across the
                river from it. Learn from your guide about the Persian
                influences behind the design of the tomb as you admire its stone
                inlay and trellis work.
              </li>
              <li>Your day trip then ends with the return drive to Delhi.</li>
            </ul>{" "}
          </div>
          <div className="flex flex-col mt-10 gap-4 lg:gap-6">
            <h5 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-600 capitalize ">
              Address
            </h5>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg   text-black-800">
              Taj Mahal Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh
              282001, India Located on the south bank of the Yamuna River in the
              city of Agra, Uttar Pradesh, the Taj Mahal is one of the most
              famous landmarks in India and a UNESCO World Heritage Site.
            </p>
            <iframe
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6027.0653426931485!2d78.03854798890548!3d27.17581104145549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2s!4v1713262750078!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col gap-6 w-full px-2 sm:px-4 py-4 lg:py-8 rounded-2xl">
          <h6 className="text-base sm:text-2xl capitalize">
            Other popular tours
          </h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-1">
            {placesImages.map((item, index) => (
              <div className="col-span-1">
                <Places key={index} img={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
