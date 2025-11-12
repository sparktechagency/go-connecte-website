import { getStatusConfig } from "@/components/libs/statusConfig";
import { Button, Chip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaCarSide, FaRegCalendar, FaUser } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

export default function BookingCard({ booking, viewBookingDetails }) {
  const statusConfig = getStatusConfig(booking.status);
  return (
    <article
      className="flex flex-col sm:flex-row gap-3 rounded-lg bg-white px-2 sm:px-4 py-4
      border border-[#D0D0D0] hover:border-t hover:border-l-4 hover:border-r
      hover:border-b hover:border-[#00AEA8] transition-all duration-300 hover:scale-105"
    >
      <div className="relative w-32 h-24 lg:w-48 lg:h-32 rounded-md overflow-hidden bg-gray-100">
        <Image
          src={booking.image}
          alt={booking.title}
          width={160}
          height={120}
          className="object-cover w-full h-full"
        />
        {booking.driveType === "Self Drive" && (
          <div className="absolute top-1 left-1 text-xs flex items-center gap-1 bg-white px-1.5 py-0.5 rounded-lg">
            <FaCarSide />
            <p>Self Drive</p>
          </div>
        )}

        {booking.driveType === "With Driver" && (
          <div className="absolute top-1 left-1 text-xs flex items-center gap-1 bg-[#00AEA8] px-1.5 py-0.5 rounded-lg text-white">
            <FaUser />
            <p>With Driver</p>
          </div>
        )}
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm  lg:text-xl font-semibold text-gray-900">
              {booking.title}
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <p>Host:</p>
              <p>{booking.hostName}</p>
            </div>
          </div>

          <Chip
            label={statusConfig.label}
            sx={{
              bgcolor: statusConfig.bgcolor,
              color: statusConfig.color,
              fontWeight: 500,
              fontSize: "0.75rem",
              px: "5px",
            }}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-2 gap-1 sm:gap-0">
          <div className="flex items-center gap-1 text-[#737373] text-xs lg:text-sm">
            <FaRegCalendar />
            {booking.fromDate} - {booking.toDate}
          </div>
          <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-500">
            <FiMapPin />
            {booking.destination}
          </div>
        </div>

        <div className="bg-[#00AEA81A] grid grid-cols-2 lg:grid-cols-3 gap-2 p-4 rounded-lg mt-3">
          <div>
            <p className="text-[#4A5565] text-[10px] sm:text-sm mb-1">
              Daily Rate
            </p>
            <p className="text-[#191919] text-xs sm:text-sm font-semibold">
              {booking.dailyRate} FCFA/Day
            </p>
          </div>
          <div>
            <p className="text-[#4A5565] text-[10px] sm:text-sm mb-1">
              Duration
            </p>
            <p className="text-[#191919] text-xs sm:text-sm font-semibold">
              {booking.durationDays} Days
            </p>
          </div>
          <div>
            <p className="text-[#4A5565] text-[10px] sm:text-sm mb-1">Total:</p>
            <p className="text-[#00AEA8] text-xs sm:text-sm font-semibold">
              {booking.totalFare} FCFA
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs md:text-sm text-gray-400">
          <div className="flex items-center gap-3">
            <Button
              onClick={viewBookingDetails}
              sx={{
                textTransform: "none",
                border: "1px solid #E5E7EB",
                color: "#191919",
                ":hover": {
                  bgcolor: "#00AEA8",
                  color: "white",
                },
                fontSize: {
                  xs: "0.75rem", // Small screens
                  sm: "0.8rem", // Small to medium screens
                },
              }}
            >
              View Details
            </Button>
            <Button
              sx={{
                textTransform: "none",
                border: "1px solid #E5E7EB",
                color: "#191919",
                ":hover": {
                  bgcolor: "#00AEA8",
                  color: "white",
                },
                fontSize: {
                  xs: "0.75rem", // Small screens
                  sm: "0.8rem", // Small to medium screens
                },
              }}
            >
              Contact Host
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
