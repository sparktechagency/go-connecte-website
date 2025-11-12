"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { FiMapPin, FiCalendar, FiUser, FiChevronRight } from "react-icons/fi";
import { FaCarSide, FaUser, FaRegCalendar } from "react-icons/fa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button, Chip } from "@mui/material";
import Link from "next/link";

/* Sample data */
const SAMPLE_Bookings = [
  {
    id: "t1",
    title: "Toyota Camry 2023",
    category: "Sedan",
    image: "/images/Carento.png",
    location: "Downtown Office",
    date: "2025-11-05",
    driveType: "With Driver",
    price: 750,
    currency: "$",
    status: "upcoming",
    hostName: "Sarah Johnson",
    fromDate: "2025-11-05",
    toDate: "2025-11-07",
    destination: "San Francisco, CA",
    dailyRate: 250,
    durationDays: 3,
    totalFare: 750,
  },
  {
    id: "t2",
    title: "Honda CR-V 2023",
    category: "SUV",
    image: "/images/aboutUs02.png",
    location: "City Center Mall",
    date: "2025-10-15",
    driveType: "Self Drive",
    price: 375,
    currency: "$",
    status: "completed",
    hostName: "John Doe",
    fromDate: "2025-10-10",
    toDate: "2025-10-13",
    destination: "City Center Mall, LA",
    dailyRate: 125,
    durationDays: 3,
    totalFare: 375,
  },
  {
    id: "t3",
    title: "Mercedes E-Class",
    category: "Luxury Sedan",
    image: "/images/carImages/Volkswagen Golf 2018.png",
    location: "Hotel Grand Plaza",
    date: "2025-10-20",
    driveType: "With Driver",
    price: 950,
    currency: "$",
    status: "completed",
    hostName: "Emily Adams",
    fromDate: "2025-10-20",
    toDate: "2025-10-22",
    destination: "Hotel Grand Plaza, NY",
    dailyRate: 475,
    durationDays: 2,
    totalFare: 950,
  },
  {
    id: "t4",
    title: "Toyota RAV4 2022",
    category: "SUV",
    image: "/images/Carento.png",
    location: "Airport Terminal 1",
    date: "2025-10-15",
    driveType: "Self Drive",
    price: 450,
    currency: "$",
    status: "completed",
    hostName: "Michael Brown",
    fromDate: "2025-10-15",
    toDate: "2025-10-18",
    destination: "Airport Terminal 1, SF",
    dailyRate: 150,
    durationDays: 3,
    totalFare: 450,
  },
  {
    id: "t5",
    title: "BMW 5 Series",
    category: "Luxury Sedan",
    image: "/images/aboutUs02.png",
    location: "Convention Center",
    date: "2025-10-10",
    driveType: "With Driver",
    price: 0,
    currency: "$",
    status: "cancelled",
    hostName: "Alex Cooper",
    fromDate: "2025-10-01",
    toDate: "2025-10-03",
    destination: "Convention Center, Chicago",
    dailyRate: 300,
    durationDays: 2,
    totalFare: 600,
  },
];

const TABS = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
];

function getStatusConfig(status) {
  switch (status) {
    case "upcoming":
      return { label: "Upcoming", bgcolor: "#00AEA81A", color: "#00AEA8" };
    case "completed":
      return { label: "Completed", bgcolor: "#DCFCE7", color: "#008236" };
    case "cancelled":
      return { label: "Cancelled", bgcolor: "#F3F4F6", color: "#364153" };
    default:
      return { label: status, bgcolor: "#f3f4f6", color: "#374151" };
  }
}

function BookingCard({ booking }) {
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
            <Link
              href="/"
              className="border border-[#E5E7EB] text-[#191919] p-2 rounded-sm text-xs sm:text-sm hover:bg-[#00AEA8] hover:text-white transition-all duration-300 ease-in-out"
            >
              View Details
            </Link>

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

export default function Bookings() {
  const [tab, setTab] = useState("all");

  const filtered = useMemo(() => {
    if (tab === "all") return SAMPLE_Bookings;
    if (tab === "upcoming") {
      return SAMPLE_Bookings.filter((t) => t.status === "upcoming");
    }
    if (tab === "past") {
      return SAMPLE_Bookings.filter(
        (t) => t.status === "completed" || t.status === "cancelled"
      );
    }
    return SAMPLE_Bookings.filter((t) => t.status === tab);
  }, [tab]);

  const handleTab = (_, value) => setTab(value);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-0">
        <div className="flex flex-col lg:flex-row xl:items-center justify-between gap-2 mb-5 ">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-xl md:text-2xl font-semibold text-[#191919]">
              Your Bookings
            </p>
            <p className="text-[#737373] text-xs lg:text-base">
              Track your past and upcoming bookings
            </p>
          </div>
          <div
            className="sm:mb-5 w-full xl:w-1/2"
            sx={{ mb: 3, borderBottom: 1 }}
          >
            <Tabs
              value={tab}
              onChange={handleTab}
              variant="fullWidth"
              scrollButtons="auto"
              textColor="inherit"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "4px",
                minHeight: "auto",
                width: "100%",
                display: "inline-flex",
                "& .MuiTabs-indicator": {
                  display: "none",
                },
                "& .MuiTabs-flexContainer": {
                  gap: "4px",
                },
              }}
            >
              {TABS.map((t) => (
                <Tab
                  key={t.key}
                  value={t.key}
                  label={t.label}
                  sx={{
                    textTransform: "none",
                    fontSize: {
                      xs: "10px", // Small screens
                      sm: "12px", // Small to medium screens
                      md: "12px", // Medium screens
                    },
                    fontWeight: 500,
                    minHeight: "auto",
                    padding: {
                      xs: "5px", // Small screens
                      sm: "8px", // Small to medium screens
                      md: "10px", // Medium screens
                      xl: "12px", // Large screens
                    },
                    width: {
                      xs: "auto", // Small screens
                      sm: "auto", // Small to medium screens
                      md: "auto", // Medium screens
                      lg: "auto", // Large screens
                    },
                    borderRadius: "20px",
                    border: "1px solid #ccc",
                    color: "#000",
                    transition: "all 0.2s",
                    "&:hover": {
                      color: "black",
                      bgcolor: "#ccc",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#00AEA8",
                      color: "#fff",
                      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                      fontWeight: 600,
                    },
                  }}
                />
              ))}
            </Tabs>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      </div>
    </main>
  );
}
