import React from "react";
import { Chip, Button, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { FaCarSide, FaEye, FaRegCalendar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import { suggestedCarImage } from "../../../../public/images/AllImages";

const vehicleData = [
  {
    name: "Audi A3 1.6 TDI S line",
    rating: 4.96,
    trips: 15,
    driver: "With Driver",
    location: "Manchester, England • 31 mi",
    price: "25000F CFA/Day",
    status: "Available",
    image: suggestedCarImage.suggestedImage,
  },
  {
    name: "Audi A3 1.6 TDI S line",
    rating: 4.96,
    trips: 15,
    driver: "With Driver",
    location: "Manchester, England • 31 mi",
    price: "25000F CFA/Day",
    status: "Booked",
    image: suggestedCarImage.suggestedImage,
  },
  {
    name: "Audi A3 1.6 TDI S line",
    rating: 4.96,
    trips: 15,
    driver: "With Driver",
    location: "Manchester, England • 31 mi",
    price: "25000F CFA/Day",
    status: "Maintenance",
    image: suggestedCarImage.suggestedImage,
  },
  {
    name: "Audi A3 1.6 TDI S line",
    rating: 4.96,
    trips: 15,
    driver: "Self Drive",
    location: "Manchester, England • 31 mi",
    price: "25000F CFA/Day",
    status: "Available",
    image: suggestedCarImage.suggestedImage,
  },
];

const MyVehicles = () => {
  return (
    <div className="py-5">
      {/* Title and Stats */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-semibold">My Vehicles</h3>
          <p className="text-sm text-[#737373]">Manage your rental fleet</p>
        </div>
        <Button
          sx={{
            bgcolor: "#00AEA8",
            color: "white",
            textTransform: "none",
          }}
        >
          + Add New Vehicle
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-6">
        <div className="flex items-center gap-3 border border-[#E5E7EB] p-3 rounded-lg">
          <div className="bg-[#00AEA81A] p-4 rounded-full">
            <FaCarSide className="text-xl text-[#00AEA8]" />
          </div>
          <div>
            <p className="text-sm text-[#737373]">Total Vehicles</p>
            <p className="text-[#191919] text-2xl font-semibold">4</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border border-[#E5E7EB] p-4 rounded-lg">
          <div className="bg-[#F0FDF4] p-4 rounded-full">
            <FaEye className="text-xl text-[#00A63E]" />
          </div>{" "}
          <div>
            <p className="text-sm text-[#737373]">Available Cars</p>
            <p className="text-[#191919] text-2xl font-semibold">2</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border border-[#E5E7EB] p-4 rounded-lg">
          <div className="bg-[#EFF6FF] p-4 rounded-full">
            <FaRegCalendar className="text-xl text-[#155DFC]" />
          </div>

          <div>
            <p className="text-sm text-[#737373]">Currently Booked</p>
            <p className="text-[#191919] text-2xl font-semibold">1 </p>
          </div>
        </div>
        <div className="flex items-center gap-3 border border-[#E5E7EB] p-4 rounded-lg">
          <div className="bg-[#FFE4E4] p-4 rounded-full">
            <IoMdSettings className="text-xl text-[#EB1700]" />
          </div>
          <div>
            <p className="text-sm text-[#737373]">In Maintenance</p>
            <p className="text-[#191919] text-2xl font-semibold">1</p>
          </div>
        </div>
      </div>

      {/* Vehicle Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vehicleData.map((vehicle, index) => (
          <Card key={index} className="rounded-lg shadow-lg border p-4">
            <div className="relative">
              {/* Vehicle Image */}
              <div className="w-full h-40 relative rounded-md overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={400}
                  height={50}
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="absolute top-36 right-2">
                <Chip
                  label={vehicle.status}
                  size="small"
                  sx={{
                    backgroundColor: "white", // Background is always white
                    color:
                      vehicle.status === "Available"
                        ? "#46BE67" // Green text for Available
                        : vehicle.status === "Booked"
                        ? "#155DFC" // Blue text for Booked
                        : "#EB1700", // Red text for Maintenance
                    borderRadius: "4px",
                    border: "1px solid", // Add border to match chip appearance
                    borderColor: "#DDE1DE",
                  }}
                />
              </div>
            </div>
            <CardContent>
              <h4 className="font-semibold text-lg mb-2">{vehicle.name}</h4>
              <div className="text-sm text-gray-500">
                {vehicle.rating} ⭐ ({vehicle.trips} Trips) {vehicle.driver}
              </div>
              <div className="text-sm text-gray-500">{vehicle.location}</div>
              <div className="mt-2 font-semibold">{vehicle.price}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyVehicles;
