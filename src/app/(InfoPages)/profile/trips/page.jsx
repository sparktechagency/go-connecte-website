"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiCalendar, FiUser, FiChevronRight } from "react-icons/fi";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Chip, Divider } from "@mui/material";

/* Sample data */
const SAMPLE_TRIPS = [
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
    status: "active",
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
  },
];

const TABS = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "active", label: "Active" },
  { key: "past", label: "Past" },
  { key: "cancelled", label: "Cancelled" },
];

function getStatusConfig(status) {
  switch (status) {
    case "upcoming":
      return { label: "Upcoming", bgcolor: "#2B7FFF", color: "#fff" };
    case "active":
      return { label: "Active", bgcolor: "#009E99", color: "#fff" };
    case "completed":
      return { label: "Completed", bgcolor: "#6A7282", color: "#fff" };
    case "cancelled":
      return { label: "Cancelled", bgcolor: "#FB2C36", color: "#fff" };
    default:
      return { label: status, bgcolor: "#f3f4f6", color: "#374151" };
  }
}

function TripCard({ trip }) {
  const statusConfig = getStatusConfig(trip.status);
  return (
    <article className="flex gap-4 items-center rounded-lg bg-white px-4 py-4 border border-[#D0D0D0] hover:border-t hover:border-l-4 hover:border-r hover:border-b hover:border-[#00AEA8] transition-all duration-300 hover:scale-105">
      <div className="w-24 h-20 sm:w-28 sm:h-20 rounded-md overflow-hidden bg-gray-100">
        <Image
          src={trip.image}
          alt={trip.title}
          width={160}
          height={120}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-900">
              {trip.title}
            </h3>
            <div className="text-xs text-gray-500">{trip.category}</div>
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

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <FiMapPin className="text-[#009E99]" />
          {trip.location}
        </div>

        <Divider
          sx={{
            py: "5px",
          }}
        />

        <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <FiCalendar />
              <p>{trip.date}</p>
            </span>

            <span className="inline-flex items-center gap-2">
              <FiUser />
              <p> {trip.driveType}</p>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {trip.price > 0 ? (
              <span className="text-teal-600 font-semibold text-base">
                {trip.currency}
                {trip.price.toLocaleString()}
              </span>
            ) : (
              <span className="text-gray-500">—</span>
            )}
            <FiChevronRight className="text-gray-400" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TripsPage() {
  const [tab, setTab] = useState("all");

  const filtered = useMemo(() => {
    if (tab === "all") return SAMPLE_TRIPS;
    if (tab === "past")
      return SAMPLE_TRIPS.filter((t) => t.status === "completed");
    return SAMPLE_TRIPS.filter((t) => t.status === tab);
  }, [tab]);

  const handleTab = (_, value) => setTab(value);

  return (
    <main className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-5 w-full" sx={{ mb: 3, borderBottom: 1 }}>
          <Tabs
            value={tab}
            onChange={handleTab}
            variant="fullWidth"
            scrollButtons="auto"
            textColor="inherit"
            sx={{
              backgroundColor: "#ececf0",
              borderRadius: "9999px",
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
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  minHeight: "auto",
                  padding: "8px 24px",
                  borderRadius: "9999px",
                  color: "#000",
                  transition: "all 0.2s",
                  "&:hover": {
                    color: "#111827",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#ffffff",
                    color: "#0A0A0A",
                    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                    fontWeight: 600,
                  },
                }}
              />
            ))}
          </Tabs>
        </div>

        <div className="space-y-4">
          {filtered.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </main>
  );
}
