"use client";

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import { GoDotFill } from "react-icons/go";
import { suggestedCarImage } from "../../public/images/AllImages";
import Image from "next/image";

const carData = [
  {
    id: 1,
    name: "Audi A3 1.6 TDI S line",
    image: suggestedCarImage.suggestedImage,
    rating: 4.96,
    trips: 16,
    driver: "With Driver",
    location: "Manchester, England",
    distance: "3.1 mi",
    price: "25000F CFA/Day",
    available: true,
  },
  {
    id: 2,
    name: "Audi A3 1.6 TDI S line",
    image: suggestedCarImage.suggestedImage,
    rating: 4.96,
    trips: 16,
    driver: "With Driver",
    location: "Manchester, England",
    distance: "3.1 mi",
    price: "25000F CFA/Day",
    available: true,
  },
  {
    id: 3,
    name: "Audi A3 1.6 TDI S line",
    image: suggestedCarImage.suggestedImage,
    rating: 4.96,
    trips: 16,
    driver: "With Driver",
    location: "Manchester, England",
    distance: "3.1 mi",
    price: "25000F CFA/Day",
    available: true,
  },
  {
    id: 4,
    name: "Audi A3 1.6 TDI S line",
    image: suggestedCarImage.suggestedImage,
    rating: 4.96,
    trips: 15,
    driver: "With Driver",
    location: "Manchester, England",
    distance: "4.1 mi",
    price: "25000F CFA/Day",
    available: true,
  },
  {
    id: 5,
    name: "Audi A3 1.6 TDI S line",
    image: suggestedCarImage.suggestedImage,
    rating: 4.96,
    trips: 16,
    driver: "With Driver",
    location: "Manchester, England",
    distance: "3.1 mi",
    price: "25000F CFA/Day",
    available: true,
  },
  {
    id: 6,
    name: "Audi A3 1.6 TDI S line",
    image: suggestedCarImage.suggestedImage,
    rating: 4.96,
    trips: 15,
    driver: "With Driver",
    location: "Manchester, England",
    distance: "3.1 mi",
    price: "25000F CFA/Day",
    available: true,
  },
];

export default function Suggested() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Suggested For You
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Our top picks for comfort, style, and reliability.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {carData.map((car) => (
            <Card
              key={car.id}
              sx={{
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              {/* Image with Favorite Button */}
              <div className="relative">
                <Image
                  src={car.image}
                  alt={car.name}
                  sx={{ height: 200, backgroundColor: "#f3f4f6" }}
                />
                <IconButton
                  onClick={() => toggleFavorite(car.id)}
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    backgroundColor: "white",
                    width: 36,
                    height: 36,
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill={favorites[car.id] ? "#ef4444" : "none"}
                    stroke={favorites[car.id] ? "#ef4444" : "currentColor"}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </IconButton>
                {car.available && (
                  <Chip
                    label="Available"
                    size="small"
                    icon={<GoDotFill className="text-green-500" />}
                    sx={{
                      position: "absolute",
                      bottom: -10,
                      right: 15,
                      backgroundColor: "white",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      color: "#10b981",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                )}
              </div>

              <CardContent sx={{ p: 2.5 }}>
                {/* Car Name */}
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    mb: 1.5,
                    color: "#111827",
                  }}
                >
                  {car.name}
                </Typography>

                {/* Rating, Trips, Driver */}
                <div className="flex items-center gap-3 mb-2 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 font-semibold">★</span>
                    <span className="font-semibold text-gray-900">
                      {car.rating}
                    </span>
                    <span className="text-orange-500">({car.trips} Trips)</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>{car.driver}</span>
                  </div>
                </div>

                {/* Location and Distance */}
                <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{car.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    <span>{car.distance}</span>
                  </div>
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#00AEA8",
                      }}
                    >
                      {car.price}
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#F2F4F6",
                      color: "black",
                      textTransform: "none",
                      fontWeight: 500,
                      px: 2.5,
                      py: 0.75,
                      borderRadius: "6px",
                      "&:hover": {
                        backgroundColor: "#1f2937",
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <Button
            variant="contained"
            startIcon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            }
            sx={{
              backgroundColor: "#00AEA8",
              color: "white",
              textTransform: "none",
              fontSize: "1rem",
              padding: "12px 32px",
              borderRadius: "8px",
              fontWeight: 500,
              boxShadow: "0 4px 12px rgba(0, 174, 168, 0.25)",
              "&:hover": {
                backgroundColor: "#009991",
                boxShadow: "0 6px 16px rgba(0, 174, 168, 0.35)",
              },
            }}
          >
            Load More Cars
          </Button>
        </div>
      </div>
    </section>
  );
}
