"use client";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import React from "react";

function TermsAndConditions() {
  return (
    <div className="sm:container mx-4 sm:mx-auto w-[100%] xs:w-[80%] sm:w-[70%] lg:w-[60%]  mt-12 mb-24">
      <Breadcrumbs />
      <h1 className="text-center text-main text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10">
        Terms & Conditions
      </h1>
      <p className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 text-gray-900 text-xs sm:text-sm">
        Teal.com is a website and mobile application (“Website”) operated by
        Teal.com Travel Singapore Pte. Ltd., a limited liability company with
        its address at 30 Raffles Place, #29-01 Singapore 048622 (”we”, “our” or
        “us”). We are a global online travel agency (Singapore travel license
        no. 02943).
      </p>
      <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 text-gray-900">
        <h6 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
          1. Acceptance of Terms
        </h6>
        <p className="flex flex-col gap-1 text-xs sm:text-sm mt-1">
          By accessing or using the Platform, you agree to be bound by these
          Terms. If you disagree with any part of these Terms, you may not
          access or use the Platform.
        </p>
      </div>
      <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 text-gray-900">
        <h6 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
          1. ABOUT THESE TERMS
        </h6>
        <p className="flex flex-col gap-1 text-xs sm:text-sm mt-1">
          Our Website assists you in gathering travel information and
          determining the availability of travel products and services. It also
          allows you to book flight tickets, hotels, train tickets, car rentals,
          airport transfers and attraction tickets (“Travel Products”) provided
          by third party suppliers (“Suppliers”). Depending on what country you
          are booking in, Travel Products may also include ferry and bus
          tickets, tours, cruises and trips. We also provide customer support
          services for bookings made on our Website. These terms apply to these
          booking services.
        </p>
      </div>
      <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 text-gray-900">
        <h6 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
          2. PROHIBITED USES{" "}
        </h6>
        <p className="flex flex-col gap-1 text-xs sm:text-sm mt-1">
          You agree to use the Platform in a lawful and ethical manner. You are
          prohibited from:
          <ul className="ml-4 list-disc">
            <li>
              In any way that breaches any applicable local, national or
              international law or regulation.
            </li>
            <li>
              In any way that is unlawful or fraudulent, or has any unlawful or
              fraudulent purpose or effect.
            </li>
            <li>
              {" "}
              For the purpose of harming or attempting to harm minors in any
              way.
            </li>
            <li>
              {" "}
              To send, knowingly receive, upload, download, use or re-use any
              material which does not comply with our content standards below.
            </li>
            <li>
              {" "}
              To transmit, or procure the sending of, any unsolicited or
              unauthorised advertising or promotional material or any other form
              of similar solicitation (spam).
            </li>
            <li>
              {" "}
              To knowingly transmit any data, send or upload any material that
              contains viruses, trojan horses, worms, time-bombs, keystroke
              loggers, spyware, adware or any other harmful programs or similar
              computer code designed to adversely affect the operation of any
              computer software or hardware.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
