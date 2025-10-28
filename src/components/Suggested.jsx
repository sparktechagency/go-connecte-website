"use client";

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import { GoDotFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { suggestedCarImage } from "../../public/images/AllImages";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function Suggested() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState({});
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const displayedCars = showAll ? cars : cars.slice(0, 6);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("/data/carData.json");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);
  console.log(cars);

  if (loading) return <CircularProgress />;

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
          {displayedCars.map((car) => (
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
                  src={car.coverImage}
                  alt={`${car.make} ${car.model}`}
                  width={450}
                  height={200}
                  style={{
                    objectFit: "cover",
                    height: 200,
                    backgroundColor: "#f3f4f6",
                  }}
                  className="rounded-t-lg"
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
                {car.availability && (
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
                  {car.make} {car.model} ({car.year})
                </Typography>

                {/* Rating & Reviews, Host */}
                <div className="flex items-center gap-3 mb-2 text-sm">
                  <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base">
                    <span className="text-gray-900">
                      {car.rating.overall.toFixed(2)}
                    </span>
                    <span className="text-[#FFC700] font-semibold">★</span>
                    <span className="text-[#737373]">
                      ({car.rating.totalReviews} Reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm lg:text-base">
                    <FaUser />
                    <span>{car.host.name}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 mb-3 text-gray-600 text-xs sm:text-sm lg:text-base">
                  <FaLocationDot />
                  <span>
                    {car.location.city}, {car.location.country}
                  </span>
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div>
                    <p className="text-sm lg:text-lg font-semibold text-[#00AEA8]">
                      {car.price.daily.toLocaleString()} {car.price.currency}
                      /day
                    </p>
                  </div>
                  <Link
                    href={`/car-details/${car.id}`}
                    className="bg-[#F2F4F6] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#00AEA8] hover:text-white transition"
                  >
                    Book Now
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Load More Button */}
        {!showAll && (
          <div className="flex justify-center">
            <Button
              onClick={handleViewMore}
              variant="contained"
              startIcon={<FaPlus className="size-4" />}
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
        )}
      </div>
    </section>
  );
}
