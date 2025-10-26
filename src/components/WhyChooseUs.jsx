"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";

import {
  whyChooseUsIcons,
  whyChooseUsImage,
} from "../../public/images/AllImages";

const features = [
  {
    id: 1,
    position: "left-top",
    icon: whyChooseUsIcons.chooseIcon01,
    title: "Wide Selection",
    description:
      "From everyday rides to luxury cars, find the perfect match for your trip.",
  },
  {
    id: 2,
    position: "left-bottom",
    icon: whyChooseUsIcons.chooseIcon02,
    title: "Easy Booking",
    description:
      "Reserve your car in just a few clicks — fast, simple, and secure.",
  },
  {
    id: 3,
    position: "right-top",
    icon: whyChooseUsIcons.chooseIcon03,
    title: "Great Rates",
    description: "Enjoy competitive prices without compromising quality.",
  },
  {
    id: 4,
    position: "right-bottom",
    icon: whyChooseUsIcons.chooseIcon04,
    title: "Trusted & Reliable",
    description: "Every car is maintained and ready for your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-[#00AEA8]">
            <FaStarOfLife />
            <p className="text-sm sm:text-base font-medium ">Why Choose Us</p>
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-4xl font-semibold">
            Unmatched quality and service
            <br />
            for your needs
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center">
          {/* Left Features */}
          <div className="space-y-6 lg:space-y-8">
            {features
              .filter((f) => f.position.startsWith("left"))
              .map((feature) => (
                <Card
                  key={feature.id}
                  elevation={0}
                  sx={{
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <CardContent sx={{ padding: "0 !important" }}>
                    <div className="flex items-start gap-4 lg:text-start lg:flex-row">
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#88fffb46] rounded-xl p-2">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex-1">
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: { xs: "1.1rem", sm: "1.25rem" },
                            fontWeight: 600,
                           
                            color: "#111827",
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#6b7280",
                            lineHeight: 1.6,
                            fontSize: { xs: "0.875rem", sm: "0.95rem" },
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center lg:px-4">
            <div className="relative w-full max-w-sm lg:max-w-none">
              <div className="aspect-3/4 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={whyChooseUsImage.whyChooseUs}
                  alt="White sports car on road"
                  height={350}
                  width={350}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-6 lg:space-y-8">
            {features
              .filter((f) => f.position.startsWith("right"))
              .map((feature) => (
                <Card
                  key={feature.id}
                  elevation={0}
                  sx={{
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <CardContent sx={{ padding: "0 !important" }}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#88fffb46] rounded-xl p-2">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex-1">
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: { xs: "1.1rem", sm: "1.25rem" },
                            fontWeight: 600,
                           
                            color: "#111827",
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#6b7280",
                            lineHeight: 1.6,
                            fontSize: { xs: "0.875rem", sm: "0.95rem" },
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
