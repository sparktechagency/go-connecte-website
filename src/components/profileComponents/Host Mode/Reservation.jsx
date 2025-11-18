import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaRegCircleCheck, FaRegEye } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { suggestedCarImage } from "../../../../public/images/AllImages";
import Image from "next/image";
import Link from "next/link";

const reservationsData = [
  {
    vehicle: "Tesla Model 3",
    guest: "Sarah Johnson",
    rating: 4.9,
    status: "Pending",
    dailyRate: "25,000 CFA/Day",
    duration: "3 days",
    total: "267 FCA",
    location: "San Francisco, CA",
    bookingDate: "Nov 15 - Nov 17, 2024",
    image: suggestedCarImage.suggestedImage,
  },
  {
    vehicle: "Tesla Model 3",
    guest: "Sarah Johnson",
    rating: 4.9,
    status: "Ongoing",
    dailyRate: "25,000 CFA/Day",
    duration: "3 days",
    total: "267 FCA",
    location: "San Francisco, CA",
    bookingDate: "Nov 15 - Nov 17, 2024",
    image: suggestedCarImage.suggestedImage,
  },
  {
    vehicle: "Tesla Model 3",
    guest: "Sarah Johnson",
    rating: 4.9,
    status: "Confirmed",
    dailyRate: "25,000 CFA/Day",
    duration: "3 days",
    total: "267 FCA",
    location: "San Francisco, CA",
    bookingDate: "Nov 15 - Nov 17, 2024",
    image: suggestedCarImage.suggestedImage,
  },
  {
    vehicle: "Tesla Model 3",
    guest: "Sarah Johnson",
    rating: 4.9,
    status: "Completed",
    dailyRate: "25,000 CFA/Day",
    duration: "3 days",
    total: "267 FCA",
    location: "San Francisco, CA",
    bookingDate: "Nov 15 - Nov 17, 2024",
    image: suggestedCarImage.suggestedImage,
  },
  {
    vehicle: "Tesla Model 3",
    guest: "Sarah Johnson",
    rating: 4.9,
    status: "Cancelled",
    dailyRate: "25,000 CFA/Day",
    duration: "3 days",
    total: "267 FCA",
    location: "San Francisco, CA",
    bookingDate: "Nov 15 - Nov 17, 2024",
    image: suggestedCarImage.suggestedImage,
  },
];

const Reservations = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filterReservations = (status) => {
    return reservationsData.filter((reservation) =>
      status === "All" ? true : reservation.status === status
    );
  };

  return (
    <div className="py-5 xl:w-3/4">
      {/* Tabs for Filter */}
      <div className="flex flex-col justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold">Reservations</h3>
          <p className="text-[#737373]">Track and manage guest bookings</p>
        </div>
        <div>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="Reservations Tabs"
            size="small"
            textColor="inherit"
            indicatorColor="none"
            sx={{
              ".MuiTabs-flexContainer": {
                padding: "0", // Remove any default padding
              },
            }}
          >
            <Tab
              label="All"
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === 0 ? "#00AEA8" : "transparent",
                color: selectedTab === 0 ? "#fff" : "#191919",
                mr: 1,
                fontSize: {
                  xs: "0.625rem", // Smaller font size for mobile screens
                  sm: "0.75rem", // Slightly bigger font for small screens (tablets)
                  md: "1rem", // Default for larger screens
                },
                px: {
                  xs: "8px", // Smaller horizontal padding on mobile
                  sm: "10px", // Padding for small screens
                  md: "12px", // Larger padding for desktops
                },
                minWidth: {
                  xs: "auto", // Let the tab width adjust on small screens
                  sm: "auto", // Keep width auto on small screens
                  md: "120px", // Set a minimum width for larger screens
                },
              }}
            />
            <Tab
              label="Pending"
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === 1 ? "#00AEA8" : "transparent",
                color: selectedTab === 1 ? "#fff" : "#191919",
                mr: 1,
                fontSize: {
                  xs: "0.625rem", // Smaller font size for mobile screens
                  sm: "0.75rem", // Slightly bigger font for small screens (tablets)
                  md: "1rem", // Default for larger screens
                },
                px: {
                  xs: "8px", // Smaller horizontal padding on mobile
                  sm: "10px", // Padding for small screens
                  md: "12px", // Larger padding for desktops
                },
                minWidth: {
                  xs: "auto", // Let the tab width adjust on small screens
                  sm: "auto", // Keep width auto on small screens
                  md: "120px", // Set a minimum width for larger screens
                },
              }}
            />
            <Tab
              label="Confirmed"
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === 2 ? "#00AEA8" : "transparent",
                color: selectedTab === 2 ? "#fff" : "#191919",
                mr: 1,
                fontSize: {
                  xs: "0.625rem", // Smaller font size for mobile screens
                  sm: "0.75rem", // Slightly bigger font for small screens (tablets)
                  md: "1rem", // Default for larger screens
                },
                px: {
                  xs: "8px", // Smaller horizontal padding on mobile
                  sm: "10px", // Padding for small screens
                  md: "12px", // Larger padding for desktops
                },
                minWidth: {
                  xs: "auto", // Let the tab width adjust on small screens
                  sm: "auto", // Keep width auto on small screens
                  md: "120px", // Set a minimum width for larger screens
                },
              }}
            />
            <Tab
              label="Ongoing"
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === 3 ? "#00AEA8" : "transparent",
                color: selectedTab === 3 ? "#fff" : "#191919",
                mr: 1,
                fontSize: {
                  xs: "0.625rem", // Smaller font size for mobile screens
                  sm: "0.75rem", // Slightly bigger font for small screens (tablets)
                  md: "1rem", // Default for larger screens
                },
                px: {
                  xs: "8px", // Smaller horizontal padding on mobile
                  sm: "10px", // Padding for small screens
                  md: "12px", // Larger padding for desktops
                },
                minWidth: {
                  xs: "auto", // Let the tab width adjust on small screens
                  sm: "auto", // Keep width auto on small screens
                  md: "120px", // Set a minimum width for larger screens
                },
              }}
            />
            <Tab
              label="Completed"
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === 5 ? "#00AEA8" : "transparent",
                color: selectedTab === 5 ? "#fff" : "#191919",
                mr: 1,
                fontSize: {
                  xs: "0.625rem", // Smaller font size for mobile screens
                  sm: "0.75rem", // Slightly bigger font for small screens (tablets)
                  md: "1rem", // Default for larger screens
                },
                px: {
                  xs: "8px", // Smaller horizontal padding on mobile
                  sm: "10px", // Padding for small screens
                  md: "12px", // Larger padding for desktops
                },
                minWidth: {
                  xs: "auto", // Let the tab width adjust on small screens
                  sm: "auto", // Keep width auto on small screens
                  md: "120px", // Set a minimum width for larger screens
                },
              }}
            />
          </Tabs>
        </div>
      </div>

      <Divider sx={{ my: "10px" }} />

      {/* Reservations List */}
      <div className="space-y-6">
        {filterReservations(
          selectedTab === 0
            ? "All"
            : selectedTab === 1
            ? "Pending"
            : selectedTab === 2
            ? "Confirmed"
            : selectedTab === 3
            ? "Ongoing"
            : "Completed"
        ).map((reservation, index) => (
          <Card key={index} className="">
            <CardContent className="flex gap-4">
              {/* Vehicle and Guest Info */}
              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="rounded-md">
                    <Image
                      src={reservation.image}
                      alt="Reservation Car"
                      width={100}
                      height={100}
                      className="w-40 h-28"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-[#191919]">
                          {reservation.vehicle}
                        </p>{" "}
                        <Chip
                          label={reservation.status}
                          size="medium"
                          sx={{
                            bgcolor:
                              reservation.status === "Completed"
                                ? "#F3F4F6"
                                : reservation.status === "Confirmed"
                                ? "#DCFCE7"
                                : reservation.status === "Pending"
                                ? "#FEF9C2"
                                : reservation.status === "Ongoing"
                                ? "#8B5CF61A"
                                : reservation.status === "Cancelled"
                                ? "#EB17001A"
                                : "#D4FBE3",
                            color:
                              reservation.status === "Completed"
                                ? "#364153"
                                : reservation.status === "Confirmed"
                                ? "#008236"
                                : reservation.status === "Pending"
                                ? "#A65F00"
                                : reservation.status === "Ongoing"
                                ? "#8B5CF6"
                                : reservation.status === "Cancelled"
                                ? "#EB1700"
                                : "#16A34A",
                            fontSize: {
                              xs: "10px",
                              md: "14px",
                            },
                            borderRadius: "999px",
                            mt: 1,
                          }}
                        />
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-[#737373]">
                        <FiUser />
                        <p className=" text-gray-500">{`Guest: ${reservation.guest}`}</p>
                        <FaStar className="text-[#FDC700]" />
                        <p className="text-[#4A5565]">{reservation.rating}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row  sm:gap-3 text-xs sm:text-sm text-gray-500">
                        <p>{reservation.bookingDate}</p>
                        <p>{reservation.location}</p>
                      </div>
                    </div>{" "}
                    {/* Amount and Status */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full border border-[#00AEA81A] p-5 rounded-lg bg-[#00AEA81A] mt-3">
                      <div>
                        <p className="text-xs sm:text-sm text-[#737373]">
                          Daily Rate
                        </p>{" "}
                        <p className="text-sm sm:text-base font-semibold text-[#191919]">
                          {reservation.dailyRate}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-[#737373]">
                          Duration
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-[#191919]">
                          {reservation.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-[#737373]">
                          Total
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-[#00AEA8]">
                          {reservation.total}
                        </p>
                      </div>
                    </div>{" "}
                    <div className="flex items-center gap-4 w-full">
                      {/* Action Buttons */}
                      {reservation.status === "Pending" && (
                        <div className="flex flex-col sm:flex-row sm:gap-2 w-full">
                          <Button
                            sx={{
                              border: "1px solid #E5E7EB",
                              textTransform: "none",
                              bgcolor: "#00AEA8",
                              color: "white",
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              mt: "8px",
                              fontSize: {
                                xs: "0.7rem", // Font size for mobile
                                lg: "0.9rem", // Font size for larger screens
                              },
                              py: {
                                xs: "8px", // Vertical padding for mobile
                                sm: "10px", // Padding for small screens
                                lg: "12px", // Padding for larger screens
                              },
                              px: {
                                xs: "12px", // Horizontal padding for mobile
                                sm: "16px", // Padding for small screens
                                lg: "20px", // Padding for larger screens
                              },
                            }}
                          >
                            <FaRegCircleCheck />
                            <p>Accept</p>
                          </Button>
                          <Button
                            sx={{
                              border: "1px solid #E7000B",
                              textTransform: "none",
                              color: "#E7000B",
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              mt: "8px",
                              fontSize: {
                                xs: "0.7rem", // Font size for mobile
                                lg: "0.9rem", // Font size for larger screens
                              },
                              py: {
                                xs: "8px", // Vertical padding for mobile
                                sm: "10px", // Padding for small screens
                                lg: "12px", // Padding for larger screens
                              },
                              px: {
                                xs: "12px", // Horizontal padding for mobile
                                sm: "16px", // Padding for small screens
                                lg: "20px", // Padding for larger screens
                              },
                            }}
                          >
                            <IoCloseCircleOutline />
                            <p>Decline</p>
                          </Button>
                        </div>
                      )}
                      <div className="flex flex-col sm:flex-row items-center justify-end sm:gap-2 w-full ">
                        {reservation.status === "Confirmed" && (
                          <Button
                            sx={{
                              border: "1px solid #E5E7EB",
                              textTransform: "none",
                              bgcolor: "#00AEA8",
                              color: "white",
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              mt: "8px",
                              fontSize: {
                                xs: "0.7rem", // Font size for mobile
                                lg: "0.9rem", // Font size for larger screens
                              },
                              py: {
                                xs: "8px", // Mobile padding
                                sm: "10px", // Small screen padding
                                lg: "12px", // Larger screen padding
                              },
                              px: {
                                xs: "12px", // Mobile horizontal padding
                                sm: "16px", // Small screen horizontal padding
                                lg: "20px", // Larger screen horizontal padding
                              },
                            }}
                          >
                            <IoMdCheckmarkCircleOutline />
                            <p>Mark as Completed</p>
                          </Button>
                        )}

                        {reservation.status !== "Pending" &&
                          reservation.status !== "Confirmed" && (
                            <Button
                              sx={{
                                border: "1px solid #E5E7EB",
                                textTransform: "none",
                                color: "#0A0A0A",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                mt: "8px",
                                fontSize: {
                                  xs: "0.7rem", // Font size for mobile
                                  lg: "0.9rem", // Font size for larger screens
                                },
                                py: {
                                  xs: "8px",
                                  sm: "10px",
                                  lg: "12px",
                                },
                                px: {
                                  xs: "12px",
                                  sm: "16px",
                                  lg: "20px",
                                },
                              }}
                            >
                              <FaRegEye />
                              <p>View Details</p>
                            </Button>
                          )}

                        <Link
                          href="/inbox"
                          className="flex items-center justify-center gap-1 w-full border border-[#E5E7EB] text-[#0A0A0A] text-xs sm:text-sm xl:text-base p-2 xl:p-3 rounded-md mt-2"
                        >
                          <LuMessageSquare />
                          <p>Contact Guest</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reservations;
