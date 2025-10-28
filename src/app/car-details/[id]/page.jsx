"use client";

import { useCars } from "@/components/libs/hooks/useCars";
import { Breadcrumbs, CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { MdHome } from "react-icons/md";
import { toast } from "sonner";

export default function CarDetails() {
  const params = useParams();
  const carId = params.id;
  console.log(carId);

  const { cars, loading, error } = useCars();

  // Find the car
  const car = cars.find((c) => c.id === carId);
  console.log("Car", car);

  // Breadcrumb items
  const breadcrumbs = [
    <Link
      key="home"
      href="/"
      className="flex items-center gap-1 text-gray-600 hover:text-[#00AEA8] transition text-xs sm:text-base"
    >
      <MdHome sx={{ fontSize: 18 }} />
      <span>Home</span>
    </Link>,
    <Link
      key="cars"
      href="#suggested"
      className="flex items-center gap-1 text-gray-600 hover:text-[#00AEA8] transition  text-xs sm:text-base"
    >
      {/* <DirectionsCarIcon sx={{ fontSize: 18 }} /> */}
      <span>Cars</span>
    </Link>,
    <p key="current" className="text-[#111827] text-xs sm:text-base">
      {car ? `${car.make} ${car.model} (${car.year})` : "Loading..."}
    </p>,
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    toast.error(`Error loading car details: ${error}`);
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Error loading car details.</p>
      </div>
    );
  }

  if (!car) {
    toast.error("Car not found");
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Car not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg mt-5">
      <div className="mb-6">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </div>{" "}
      {/* Car Image */}
      <div className="relative h-64 md:h-96 mb-4 rounded-lg overflow-hidden">
        <Image
          src={car.coverImage}
          alt={`${car.make} ${car.model}`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      {car.carImages && car.carImages.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
          {car.carImages.map((imgSrc, index) => (
            <div
              key={index}
              className="relative h-14 sm:h-20 md:h-24 rounded-lg overflow-hidden"
            >
              <Image
                src={imgSrc}
                alt={`${car.make} ${car.model} - Image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      )}
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {car.make} {car.model} ({car.year})
      </h1>
      {/* Rating */}
      <p className="text-yellow-500 font-semibold mb-4">
        {car.rating.overall.toFixed(2)} ★ ({car.rating.totalReviews} reviews)
      </p>
      {/* Price */}
      <p className="text-2xl font-bold text-[#00AEA8] mb-6">
        {car.price.daily.toLocaleString()} {car.price.currency}/day
      </p>
      {/* Host & Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-600">Host</p>
          <p className="font-medium">{car.host.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Location</p>
          <p className="font-medium">
            {car.location.city}, {car.location.country}
          </p>
        </div>
      </div>
      {/* Features */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Features</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {Object.entries(car.features)
            .filter(([_, value]) => value)
            .map(([key, _]) => (
              <span key={key} className="bg-gray-100 px-3 py-1 rounded-full">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </span>
            ))}
        </div>
      </div>
      {/* Specs */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Specifications</h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>Engine: {car.specifications.engineSize}</li>
          <li>Horsepower: {car.specifications.horsepower} hp</li>
          <li>Fuel Efficiency: {car.specifications.fuelEfficiency}</li>
          <li>Color: {car.specifications.color}</li>
        </ul>
      </div>
      {/* Book Button */}
      <button className="w-full bg-[#00AEA8] text-white font-semibold py-3 rounded-lg hover:bg-[#009991] transition">
        Book Now
      </button>
    </div>
  );
}
