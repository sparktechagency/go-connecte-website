"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { heroSlider } from "../../public/images/AllImages";
import { CircularProgress } from "@mui/material";
import { FaStarOfLife } from "react-icons/fa6";

// Load Slider only on client. Show a minimal loading placeholder.
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => (
    <div className="w-full py-20 text-center">
      <CircularProgress />
    </div>
  ),
});

// example slides; replace with your images
const slides = [
  { id: 1, image: heroSlider.slider01, title: "Slide 1", caption: "Caption 1" },
  { id: 2, image: heroSlider.slider02, title: "Slide 2", caption: "Caption 2" },
  { id: 3, image: heroSlider.slider03, title: "Slide 3", caption: "Caption 3" },
  // { id: 4, image: heroSlider.slider04, title: "Slide 4", caption: "Caption 4" },
];

export default function HeroSection() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // arrows: true,
    // responsive breakpoints are optional for more control over arrows/dots
    responsive: [
      { breakpoint: 1024, settings: { arrows: false, dots: true } },
      { breakpoint: 640, settings: { arrows: false, dots: true } },
    ],
  };

  return (
    // make sure the parent doesn't add horizontal padding; keep overflow-hidden to avoid scrollbar
    <section className="relative overflow-hidden">
      <div className="w-screen">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative">
              {/* Responsive heights:
                  mobile ~60vh, tablet ~70vh, desktop ~90-100vh.
                  Adjust values to taste. */}
              <div className="relative w-screen h-[40vh] sm:h-[50vh] lg:h-[70vh]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                />{" "}
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />
                {/* Overlay content centered. z-10 so text sits above the image. */}
                <div className="absolute inset-0  flex items-center justify-center z-20">
                  <div className="flex flex-col gap-3 max-w-2xl text-center text-white">
                    <p className="text-[#07d6cf] flex items-center justify-center gap-2 text-sm sm:text-base md:text-xl font-medium drop-shadow-lg">
                      <FaStarOfLife />
                      Welcome to Go Connete
                    </p>
                    <p className="text-xl sm:text-3xl lg:text-5xl font-bold drop-shadow-lg">
                      Want to save on your next ride?
                    </p>
                    {slide.caption && (
                      <p className="mt-1 sm:mt-3 text-xs sm:text-base lg:text-lg drop-shadow">
                        Book the perfect car for your weekend escape, business
                        trip, or daily drive. From luxury to everyday rides,
                        we’ve got options to fit every need and budget
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
