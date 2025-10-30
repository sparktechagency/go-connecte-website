"use client";

import { useCars } from "@/components/libs/hooks/useCars";
import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Modal,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbArmchair } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { SiSpeedtest } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";

import { toast } from "sonner";
import AboutCar from "@/components/AboutCar";
import CarReview from "@/components/CarReview";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function CarDetails() {
  const params = useParams();
  const carId = params.id;
  console.log(carId);

  const { cars, loading, error } = useCars();

  const today = dayjs();

  const [value, setValue] = useState("about");

  const [fromDate, setFromDate] = useState(null);
  const [fromTime, setFromTime] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [toTime, setToTime] = useState(null);

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState(
    "John F. Kennedy International Airport"
  );
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    // Here you can save to backend or context
    console.log("New location saved:", location);
    setOpen(false);
  };

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
      href="/#suggested"
      className="flex items-center gap-1 text-gray-600 hover:text-[#00AEA8] transition  text-xs sm:text-base"
    >
      {/* <DirectionsCarIcon sx={{ fontSize: 18 }} /> */}
      <span>Cars</span>
    </Link>,
    <p key="current" className="text-black text-xs sm:text-base">
      {car ? `${car.make} ${car.model} (${car.year})` : "Loading..."}
    </p>,
  ];

  const handleBooking = () => {
    if (!fromDate || !fromTime || !toDate || !toTime) {
      toast.warning("Please choose start and end date and time.");
      return;
    }

    if (!location || location.trim() === "") {
      toast.warning("Please provide a pickup/return location.");
      return;
    }

    const start = fromDate
      .hour(fromTime.hour())
      .minute(fromTime.minute())
      .second(0);
    const end = toDate.hour(toTime.hour()).minute(toTime.minute()).second(0);

    if (end.isBefore(start)) {
      toast.warning("End date/time must be after start date/time.");
      return;
    }

    const bookingData = {
      id: car.id,
      fromDate: start.toISOString(),
      fromTime: start.toISOString(),
      toDate: end.toISOString(),
      toTime: end.toISOString(),
      location: location.trim(),
    };

    const queryString = new URLSearchParams(bookingData).toString();
    router.push(`/book-now?${queryString}`);
  };

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
      <h1 className="text-lg sm:text-[40px] font-bold text-black mb-2">
        {car.make} {car.model} ({car.year})
      </h1>
      {/* Rating */}
      <div className="flex items-center justify-center gap-1 text-sm border border-[#adadad] p-2 rounded-lg w-40">
        <span className="text-[#191919] ">{car.rating.overall.toFixed(2)}</span>
        <FaStar className="text-[#FFC700]" />
        <span className="text-[#737373]">
          ({car.rating.totalReviews} reviews)
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-3 mt-4">
        <div className="flex items-center gap-2 bg-[#F4F4F4] text-[#191919] text-sm p-2 rounded-lg">
          <TbArmchair />
          <p>{car.seats} Seats</p>
        </div>
        <div className="flex items-center gap-2 bg-[#F4F4F4] text-[#191919] text-sm p-2 rounded-lg">
          <FaGasPump />
          <p>{car.fuelType}</p>
        </div>
        <div className="flex items-center gap-2 bg-[#F4F4F4] text-[#191919] text-sm p-2 rounded-lg">
          <FaGears />
          <p>{car.transmission} Transmission</p>
        </div>
        <div className="flex items-center gap-2 bg-[#F4F4F4] text-[#191919] text-sm p-2 rounded-lg">
          <SiSpeedtest />
          <p>50,000</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 mt-10">
        {/* left */}
        <div className="flex-1">
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            <Tab
              value="about"
              label="About"
              sx={{
                textTransform: "none",
                borderRadius: 20,
                height: "40px",
                width: "60px",
                "&.Mui-selected": {
                  backgroundColor: "#00AEA8",
                  color: "white",
                },
              }}
            />
            <Tab
              value="review"
              label="Review"
              sx={{
                textTransform: "none",
                borderRadius: 20,
                height: "20px",
                width: "50px",
                "&.Mui-selected": {
                  backgroundColor: "#00AEA8",
                  color: "white",
                },
              }}
            />
          </Tabs>{" "}
          {value === "about" && <AboutCar carDetails={car} />}
          {value === "review" && <CarReview carDetails={car} />}
        </div>
        {/* right section */}
        <div className="w-full max-w-sm mx-auto px-4 sm:px-0">
          <div className="space-y-4">
            {/* Rent This Car Section */}
            <div className="border border-[#a1a1a1] rounded-lg overflow-hidden">
              <p className="px-4 sm:px-5 py-3 text-lg sm:text-xl font-bold bg-[#F2F4F6]">
                Rent This Car
              </p>
              <div className="p-3 sm:p-4 space-y-4">
                {/* From Section */}
                <div className="space-y-2">
                  <p className="text-xs sm:text-base font-semibold">From</p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={fromDate}
                        onChange={(newValue) => setFromDate(newValue)}
                        slotProps={{
                          day: {
                            sx: {
                              "&.MuiPickersDay-root.Mui-selected": {
                                backgroundColor: "#00AEA8",
                              },
                            },
                          },
                        }}
                        sx={{
                          width: "100%",
                          "& .MuiInputBase-root": {
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                          },
                        }}
                      />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        value={fromTime}
                        onChange={(newValue) => setFromTime(newValue)}
                        slotProps={{
                          popper: {
                            sx: {
                              "& .MuiMenuItem-root": {
                                "&.Mui-selected": {
                                  backgroundColor: "#00AEA8",
                                  color: "white",
                                },
                                color: "black",
                              },
                            },
                          },
                          actionBar: {
                            sx: {
                              padding: "10px",
                              gap: "10px",
                              justifyContent: "space-between",
                              "& .MuiButton-root": {
                                flex: 1,
                                borderRadius: "9999px",
                                fontWeight: "600",
                                fontSize: { xs: "11px", sm: "12px" },
                                textTransform: "capitalize",
                                padding: { xs: "6px", sm: "8px" },
                              },
                              "& .MuiButton-root:first-of-type": {
                                color: "#d32f2f",
                                backgroundColor: "#ffebee",
                                "&:hover": { backgroundColor: "#ffcdd2" },
                              },
                              "& .MuiButton-root:last-of-type": {
                                backgroundColor: "#14b8a6",
                                color: "white",
                                "&:hover": { backgroundColor: "#0d9488" },
                              },
                            },
                          },
                        }}
                        sx={{
                          width: "100%",
                          "& .MuiInputBase-root": {
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                </div>

                {/* To Section */}
                <div className="space-y-2">
                  <p className="text-xs sm:text-base font-semibold">To</p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={toDate}
                        onChange={(newValue) => setToDate(newValue)}
                        slotProps={{
                          day: {
                            sx: {
                              "&.MuiPickersDay-root.Mui-selected": {
                                backgroundColor: "#00AEA8",
                              },
                            },
                          },
                        }}
                        sx={{
                          width: "100%",
                          "& .MuiInputBase-root": {
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                          },
                        }}
                      />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        value={toTime}
                        onChange={(newValue) => setToTime(newValue)}
                        slotProps={{
                          popper: {
                            sx: {
                              "& .MuiMenuItem-root": {
                                "&.Mui-selected": {
                                  backgroundColor: "#00AEA8",
                                  color: "white",
                                },
                                color: "black",
                              },
                            },
                          },
                          actionBar: {
                            sx: {
                              padding: "10px",
                              gap: "10px",
                              justifyContent: "space-between",
                              "& .MuiButton-root": {
                                flex: 1,
                                borderRadius: "9999px",
                                fontWeight: "600",
                                fontSize: { xs: "11px", sm: "12px" },
                                textTransform: "capitalize",
                                padding: { xs: "6px", sm: "8px" },
                              },
                              "& .MuiButton-root:first-of-type": {
                                color: "#d32f2f",
                                backgroundColor: "#ffebee",
                                "&:hover": { backgroundColor: "#ffcdd2" },
                              },
                              "& .MuiButton-root:last-of-type": {
                                backgroundColor: "#14b8a6",
                                color: "white",
                                "&:hover": { backgroundColor: "#0d9488" },
                              },
                            },
                          },
                        }}
                        sx={{
                          width: "100%",
                          "& .MuiInputBase-root": {
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
              <Divider
                sx={{
                  px: "20px",
                }}
              />

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm sm:text-lg">
                    Pickup & Return Location
                  </p>
                  <IconButton>
                    <FaEdit
                      className="text-[#737373] text-base sm:text-2xl"
                      onClick={handleOpen}
                    />
                  </IconButton>
                </div>
                <p className="text-[#737373] text-xs sm:text-base">
                  {location}
                </p>
              </div>
            </div>

            {/* === MUI MODAL === */}
            <Modal
              open={open}
              onClose={handleClose}
              closeAfterTransition
              aria-labelledby="edit-location-modal"
              aria-describedby="edit-location-form"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "90%", sm: 500 },
                  maxHeight: "90vh",
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 24,
                  p: { xs: 3, sm: 4 },
                  outline: "none",
                }}
              >
                {/* Header */}
                <p className="font-medium mb-2">
                  Edit Pickup & Return Location
                </p>

                {/* Input Field */}
                <TextField
                  autoFocus
                  fullWidth
                  label="Location"
                  variant="outlined"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter airport, address, or landmark"
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#14b8a6",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#14b8a6",
                    },
                  }}
                />

                {/* Action Buttons */}
                <div className="flex justify-end gap-3">
                  <Button
                    onClick={handleClose}
                    sx={{
                      textTransform: "none",
                      fontWeight: 500,
                      bgcolor: "#F2F4F6",
                      color: "black",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    variant="contained"
                    sx={{
                      backgroundColor: "#14b8a6",
                      "&:hover": { backgroundColor: "#0d9488" },
                      textTransform: "none",
                      fontWeight: 600,
                      px: 3,
                    }}
                  >
                    Save
                  </Button>
                </div>
              </Box>
            </Modal>

            {/* Price and Action Buttons */}
            <div className="flex flex-col gap-2 pt-2 border border-[#D0D0D0] p-4 rounded-lg">
              <p className="text-center text-[#00AEA8] font-semibold text-base sm:text-lg py-2 rounded-lg border border-[#D0D0D0]">
                {car.price.daily} {car.price.currency}/Day
              </p>
              <Button
                onClick={handleBooking}
                fullWidth
                sx={{
                  bgcolor: "#00AEA8",
                  color: "white",
                  fontSize: { xs: "16px", sm: "18px" },
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  py: { xs: "10px", sm: "8px" },
                  borderRadius: "10px",
                  "&:hover": {
                    bgcolor: "#009990",
                  },
                }}
              >
                Book Now <FaArrowRight />
              </Button>
            </div>

            {/* Hosted By Section */}
            <div className="border border-[#a1a1a1] rounded-lg overflow-hidden">
              <p className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2 text-lg sm:text-xl font-bold">
                Hosted By
              </p>
              <div className="p-3 sm:p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={car.host.avatar}
                      alt="Host Image"
                      width={50}
                      height={50}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[#191919] text-base sm:text-lg font-bold truncate">
                        {car.host.name}
                      </p>
                      <div className="flex items-center text-xs sm:text-sm text-[#737373] flex-wrap">
                        <p>Joined {car.host.memberSince}</p>
                        <RxDotFilled className="mx-1" />
                        <p>{car.host.totalCars} Cars</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    fullWidth
                    sx={{
                      bgcolor: "#00AEA8",
                      color: "white",
                      fontSize: { xs: "14px", sm: "16px" },
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      py: { xs: "10px", sm: "8px" },
                      borderRadius: "10px",
                      "&:hover": {
                        bgcolor: "#009990",
                      },
                    }}
                  >
                    <span className="truncate">All items by this host</span>
                    <FaArrowRight className="shrink-0" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
