"use client";

import { useState, useMemo } from "react";
import { IoMdCloseCircle } from "react-icons/io";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button, Chip, IconButton } from "@mui/material";
import Link from "next/link";
import { useBooking } from "../../libs/hooks/useBookings";
import BookingCard from "./BookingCard";
import BookingDetails from "./BookingDetails";

const TABS = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
];

export default function Bookings() {
  const [tab, setTab] = useState("all");
  const [viewDetails, setViewDetails] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const { bookings, loading, error } = useBooking();
  console.log(bookings);

  const viewBookingDetails = (booking) => {
    console.log("clicked View Details");
    setSelectedBooking(booking);
    setViewDetails(true);
  };

  const closeBookingDetails = () => {
    setSelectedBooking(null);
    setViewDetails(false);
  };

  const filtered = useMemo(() => {
    if (tab === "all") return bookings;
    if (tab === "upcoming") {
      return bookings.filter((t) => t.status === "upcoming");
    }
    if (tab === "past") {
      return bookings.filter(
        (t) => t.status === "completed" || t.status === "cancelled"
      );
    }
    return bookings.filter((t) => t.status === tab);
  }, [tab, bookings]);

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
          {!viewDetails && (
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
          )}
        </div>

        {!viewDetails ? (
          <div className="space-y-4">
            {filtered.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                viewBookingDetails={() => viewBookingDetails(booking)}
              />
            ))}
          </div>
        ) : (
          <BookingDetails
            booking={selectedBooking}
            closeBookingDetails={closeBookingDetails}
          />
        )}
      </div>
    </main>
  );
}
