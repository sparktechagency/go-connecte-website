"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { aboutUsIcons, aboutUsImages } from "../../public/images/AllImages";
import { Divider } from "@mui/material";
import { useCursor } from "./libs/Context/CursorContext";

export default function AboutUs() {
  const { setBorderColor } = useCursor();

  useEffect(() => {
    // Set cursor color to cyan/teal for this section with white/light background
    setBorderColor("#fff");

    // Optional: reset to default when leaving this section
    return () => setBorderColor("white");
  }, [setBorderColor]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-5 bg-white">
      <div className="flex items-center gap-2 text-[#04c7c0] font-semibold sm:mb-4">
        <FaStarOfLife />
        <p>About Us</p>
      </div>
      {/* Use column layout on mobile, switch to row at md (tablet). lg/xl unchanged */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left column */}
        <div className="w-full">
          <div className="flex flex-col gap-1 md:gap-3">
            <p className="text-[#040401] font-bold text-lg sm:text-3xl lg:text-[40px] md:leading-11">
              Your trusted partner in reliable car rental
            </p>

            <p className="text-[#616161] text-sm md:text-lg md:leading-6">
              Find reliable cars at great rates, ready whenever and wherever you
              need them. From quick trips to long journeys, we&apos;ve got you
              covered
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className="bg-[#88fffb46] rounded-full p-3 mr-2 shrink-0">
                <Image
                  src={aboutUsIcons.aboutIcon01}
                  alt="About Us Icon"
                  width={44}
                  height={44}
                  className=""
                />
              </div>
              <div>
                <p className="text-[#040401] font-semibold md:text-xl">
                  Easy Booking
                </p>
                <p className="text-[#616161] text-xs md:text-base">
                  Book your ride in just a few clicks — fast, simple, and
                  secure.
                </p>
              </div>
            </div>

            <div className="my-2">
              <Divider />
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#88fffb46] rounded-full p-3 mr-2 shrink-0">
                <Image
                  src={aboutUsIcons.aboutIcon02}
                  alt="About Us Icon"
                  width={44}
                  height={44}
                  className=""
                />
              </div>
              <div>
                <p className="text-[#040401] font-semibold md:text-xl">
                  Trusted & reliable
                </p>
                <p className="text-[#616161] text-xs md:text-base">
                  Every car is maintained, ready, and waiting for your journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column (images / stats) */}
        <div className="flex items-center justify-center gap-2 sm:gap-5 w-full">
          {/* Main image - responsive sizes */}
          <div className="relative h-48 md:h-[310px] w-3/5 md:w-72 rounded-md overflow-hidden shrink-0">
            <Image
              src={aboutUsImages.aboutUs01}
              alt="About Us Image"
              fill
              sizes="(max-width: 768px) 140px, 288px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="p-3 md:p-4 bg-[#00AEA8] rounded-lg text-center text-white">
              <p className="text-2xl md:text-7xl font-bold leading-none">05+</p>
              <p className="text-xs md:text-xl">Year In Business</p>
            </div>

            <div className="relative h-[100px] md:h-40 w-full md:w-56 rounded-md overflow-hidden">
              <Image
                src={aboutUsImages.aboutUs02}
                alt="About Us Image"
                fill
                sizes="(max-width: 768px) 176px, 224px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
