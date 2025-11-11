"use client";

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import { GoDotFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser, FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useCars } from "@/components/libs/hooks/useCars";

export default function Favourite() {
  const { cars, loading, error } = useCars();
  const [favorite, setFavorite] = useState({});
  const [showAll, setShowAll] = useState(false);

  const favoriteCars = cars.filter((car) => car.favourite === true);
  console.log("favoriteCars", favoriteCars);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const toggleFavorite = (id) => {
    setFavorite((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const displayedCars = showAll ? favoriteCars : favoriteCars.slice(0, 6);

  if (error)
    return (
      <div className="text-center py-8 text-red-600">
        Error loading cars: {error}
      </div>
    );
  if (loading)
    return (
      <div className="flex justify-center items-center py-12">
        <CircularProgress />
      </div>
    );

  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-white rounded-lg ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-[#191919] text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
          Favourite Cars
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {displayedCars.map((car) => (
            <Card
              key={car.id}
              sx={{
                borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  transform: "translateY(-4px)",
                },
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image with Favorite Button */}
              <div className="relative">
                <Image
                  src={car.coverImage}
                  alt={`${car.make} ${car.model}`}
                  width={450}
                  height={200}
                  style={{
                    objectFit: "cover",
                    height: "180px",
                    backgroundColor: "#f3f4f6",
                  }}
                  className="rounded-t-lg w-full"
                />
                <IconButton
                  onClick={() => toggleFavorite(car.id)}
                  sx={{
                    position: "absolute",
                    top: { xs: 8, sm: 10, md: 12 },
                    right: { xs: 8, sm: 10, md: 12 },
                    backgroundColor: "white",
                    width: { xs: 32, sm: 34, md: 36 },
                    height: { xs: 32, sm: 34, md: 36 },
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-[#EB1700]" />
                </IconButton>

                {car.availability && (
                  <Chip
                    label="Available"
                    size="small"
                    icon={<GoDotFill className="text-green-500" />}
                    sx={{
                      position: "absolute",
                      bottom: { xs: -8, sm: -10 },
                      right: { xs: 12, sm: 15 },
                      backgroundColor: "white",
                      fontWeight: 500,
                      fontSize: { xs: "0.65rem", sm: "0.7rem", md: "0.75rem" },
                      color: "#10b981",
                      border: "1px solid #e5e7eb",
                      height: { xs: "22px", sm: "24px" },
                    }}
                  />
                )}
              </div>

              <CardContent
                sx={{
                  p: { xs: 1.5, sm: 2, md: 2.5 },
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  "&:last-child": { pb: { xs: 1.5, sm: 2, md: 2.5 } },
                }}
              >
                {/* Car Name */}
                <p className="text-xs sm:text-base lg:text-lg font-bold text-[#111827]">
                  {car.make} {car.model} ({car.year})
                </p>

                {/* Rating & Reviews, Host */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <div className="flex items-center gap-1 text-xs sm:text-sm">
                    <span className="text-gray-900 font-medium">
                      {car.rating.overall.toFixed(2)}
                    </span>
                    <span className="text-[#FFC700] font-semibold">★</span>
                    <span className="text-[#737373]">
                      ({car.rating.totalReviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm">
                    <FaUser className="shrink-0" />
                    <span className="truncate">{car.host.name}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start sm:items-center gap-1 mb-3 text-gray-600 text-xs sm:text-sm">
                  <FaLocationDot className="shrink-0 mt-0.5 sm:mt-0" />
                  <span className="line-clamp-1">
                    {car.location.city}, {car.location.country}
                  </span>
                </div>

                {/* Price and Book Button */}
                <div className="flex flex-col lg:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 pt-2 sm:pt-3 border-t border-gray-100 mt-auto">
                  <div>
                    <p className="text-base lg:text-lg font-semibold text-[#00AEA8]">
                      {car.price.daily.toLocaleString()} {car.price.currency}
                      <span className="text-sm sm:text-base font-normal">
                        /day
                      </span>
                    </p>
                  </div>
                  <Link
                    href={`/car-details/${car.id}`}
                    className="bg-[#F2F4F6] text-black font-semibold px-3 sm:px-4 py-2 rounded-md hover:bg-[#00AEA8] hover:text-white transition text-center text-sm sm:text-base"
                  >
                    Book Now
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Favorites Message */}
        {favoriteCars.length === 0 && (
          <div className="text-center py-12">
            <FaHeart className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-base sm:text-lg">
              No favourite cars yet
            </p>
          </div>
        )}

        {/* Load More Button */}
        {!showAll && favoriteCars.length > 6 && (
          <div className="flex justify-center">
            <Button
              onClick={handleViewMore}
              variant="contained"
              startIcon={<FaPlus className="w-3 h-3 sm:w-4 sm:h-4" />}
              sx={{
                backgroundColor: "#00AEA8",
                color: "white",
                textTransform: "none",
                fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                padding: { xs: "10px 24px", sm: "12px 28px", md: "12px 32px" },
                borderRadius: { xs: "6px", sm: "7px", md: "8px" },
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
        )}
      </div>
    </section>
  );
}
