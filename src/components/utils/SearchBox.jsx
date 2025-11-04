"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { GrLocation } from "react-icons/gr";
import { FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SearchBox() {
  const router = useRouter();
  const [fromDate, setFromDate] = useState(dayjs(new Date()));
  const [toDate, setToDate] = useState(
    dayjs(new Date().setDate(new Date().getDate() + 1))
  );
  const [location, setLocation] = useState("");

  // Shared field styles for consistent height
  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      height: {
        xs: "48px",
        sm: "52px",
        md: "56px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#14b8a6",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#14b8a6",
      borderColor: "#14b8a6",
    },
    "& .MuiInputBase-root": {
      width: "100%",
      height: {
        xs: "48px",
        sm: "52px",
        md: "56px",
      },
    },
  };

  const handleSearch = () => {
    console.log("Searching for:", { location, fromDate, toDate });
    if (!fromDate || !toDate || !location) {
      toast.warning("Please choose destination and date and time.");
      return;
    }
    const params = new URLSearchParams({
      location,
      from: fromDate.format("YYYY-MM-DDTHH:mm"),
      to: toDate.format("YYYY-MM-DDTHH:mm"),
    });
    router.push(`/results?${params.toString()}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-full flex justify-center px-3 sm:px-4 md:px-6 py-4 sm:py-6">
        <div className="bg-white/80 rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-5 md:p-6 lg:w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-3">
            {/* Destination Field */}
            <div className="w-full">
              <TextField
                label="Destination"
                fullWidth
                placeholder="Search location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <GrLocation className="text-gray-500 text-base sm:text-lg" />
                      </InputAdornment>
                    ),
                  },
                  htmlInput: {
                    "aria-label": "destination",
                  },
                }}
                variant="outlined"
                sx={fieldSx}
                inputProps={{
                  "aria-label": "destination",
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center sm:justify-between w-full">
              {/* From DateTime */}
              <div className="w-full">
                <MobileDateTimePicker
                  value={fromDate}
                  label="From"
                  onChange={(newValue) => {
                    setFromDate(newValue);
                    if (newValue && toDate && newValue.isAfter(toDate)) {
                      setToDate(newValue.add(1, "hour"));
                    }
                  }}
                  slotProps={{
                    day: {
                      sx: {
                        "&.MuiPickersDay-root.Mui-selected": {
                          backgroundColor: "#00AEA8",
                        },
                      },
                    },
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
                    textField: {
                      sx: fieldSx,
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
                          backgroundColor: "#00AEA8",
                          color: "white",
                          "&:hover": { backgroundColor: "#0d9488" },
                        },
                      },
                    },
                  }}
                />
              </div>

              {/* To DateTime */}
              <div className="w-full">
                <MobileDateTimePicker
                  value={toDate}
                  label="To"
                  onChange={(newValue) => setToDate(newValue)}
                  minDateTime={fromDate}
                  slotProps={{
                    day: {
                      sx: {
                        "&.MuiPickersDay-root.Mui-selected": {
                          backgroundColor: "#00AEA8",
                        },
                      },
                    },
                    popper: {
                      sx: {
                        "& .MuiPaper-root": {
                          borderRadius: "16px",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                        },
                        "& .MuiPickersDay-root": {
                          borderRadius: "8px",
                          "&:hover": { backgroundColor: "#14b8a6" },
                          "&.Mui-selected": {
                            backgroundColor: "#14b8a6",
                            fontWeight: "bold",
                          },
                        },
                      },
                    },
                    textField: {
                      sx: fieldSx,
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
                          backgroundColor: "#00AEA8",
                          color: "white",
                          "&:hover": { backgroundColor: "#0d9488" },
                        },
                      },
                    },
                  }}
                />
              </div>

              {/* Search Button */}
              <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                <IconButton
                  onClick={handleSearch}
                  sx={{
                    backgroundColor: "#14b8a6",
                    color: "white",
                    width: { xs: "100%", sm: "52px", md: "56px" },
                    height: { xs: "48px", sm: "52px", md: "56px" },
                    borderRadius: {
                      xs: "12px",
                      sm: "50%",
                    },
                    "&:hover": {
                      backgroundColor: "#0d9488",
                      transform: "scale(1.05)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                  aria-label="search"
                >
                  <FaSearch className="text-base sm:text-lg" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
}
