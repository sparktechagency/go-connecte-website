/* eslint-disable react-hooks/purity */
// app/results/page.jsx
"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button, Typography, Rating } from "@mui/material";
import Image from "next/image";
import { MdFilterList } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import FilterDrawer from "@/components/utils/FilterDrawer";
import { searchResultImage } from "../../../public/images/AllImages";

const mockCars = [
  {
    id: 1,
    model: "Audi A3 1.6 TDI S line",
    rating: 4.96,
    trips: 15,
    location: "Manchester, England",
    distance: "31 mi",
    price: "25000 CFA/Day",
  },
  {
    id: 2,
    model: "Audi A3 1.6 TDI S line",
    rating: 4.96,
    trips: 15,
    location: "Manchester, England",
    distance: "31 mi",
    price: "25000 CFA/Day",
  },
  {
    id: 3,
    model: "Audi A3 1.6 TDI S line",
    rating: 4.96,
    trips: 15,
    location: "Manchester, England",
    distance: "31 mi",
    price: "25000 CFA/Day",
  },
  {
    id: 4,
    model: "Audi A3 1.6 TDI S line",
    rating: 4.96,
    trips: 15,
    location: "Manchester, England",
    distance: "31 mi",
    price: "25000 CFA/Day",
  },
];

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <p className="text-[#191919] font-bold text-xl">
              52 Cars available
            </p>
            <p
              className="text-[#737373] text-xs"
              variant="body2"
              sx={{ color: "#666", mt: 0.5 }}
            >
              These cars are located in and around{" "}
              <span style={{ fontWeight: 500 }}>
                {searchParams.get("location") || "London"}
              </span>
              .
            </p>
          </div>

          <Button
            startIcon={<MdFilterList sx={{ color: "#14b8a6" }} />}
            onClick={() => setFilterOpen(true)}
            sx={{
              color: "#14b8a6",
              fontWeight: 500,
              textTransform: "none",
              "&:hover": { color: "#0d9488" },
            }}
          >
            Filter
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Car List */}
          <div className="space-y-5">
            {mockCars.map((car) => (
              <div
                key={car.id}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 lg:h-auto lg:w-60 xl:w-[280px]">
                  <Image
                    src={searchResultImage.searchImage}
                    alt={car.model}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-3 flex flex-col justify-between">
                  <div>
                    <p className="font-semibold sm:text-lg text-gray-900 line-clamp-1">
                      {car.model}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <Rating
                        value={car.rating}
                        precision={0.01}
                        readOnly
                        size="small"
                      />
                      <span className="text-xs sm:text-sm text-gray-600">
                        ({car.trips} Trips)
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mt-2 text-xs sm:text-sm text-gray-600">
                      <FaLocationDot className="text-teal-500" />
                      <span>
                        {car.location} • {car.distance}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 lg:mt-4">
                    <span className="text-xs xl:text-base font-bold text-teal-600">
                      {car.price}
                    </span>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#14b8a6",
                        "&:hover": { backgroundColor: "#0d9488" },
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "12px",
                        px: 3,
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.615220208161!2d90.42194549999999!3d23.7508095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b871c90f0b41%3A0x96f471c1e5d84060!2sKhilgaon%20Taltola%20City%20Corporation%20Market!5e0!3m2!1sen!2sbd!4v1750927194433!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Filter Drawer */}
      <FilterDrawer open={filterOpen} onClose={() => setFilterOpen(false)} />
    </>
  );
}
