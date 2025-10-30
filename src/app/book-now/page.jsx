/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  Typography,
  Divider,
  IconButton,
  Modal,
  TextField,
} from "@mui/material";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FaEdit, FaArrowRight, FaStar, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { useCars } from "@/components/libs/hooks/useCars";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export default function BookNowPage() {
  const router = useRouter();
  const params = useSearchParams();

  // read query params (same keys you used when navigating)
  const carId = params.get("id");
  const { cars, loading: carsLoading, error } = useCars();

  // Find the car
  const car = cars.find((c) => c.id === carId);

  const fromDateISO = params.get("fromDate");
  const fromTimeISO = params.get("fromTime");
  const toDateISO = params.get("toDate");
  const toTimeISO = params.get("toTime");
  const initialLocation = params.get("location") || "";

  // parse initial from/to using dayjs
  const parseInitial = (dateISO, timeISO, fallback) => {
    if (dateISO && dayjs(dateISO).isValid()) return dayjs(dateISO);
    if (timeISO && dayjs(timeISO).isValid()) return dayjs(timeISO);
    return fallback;
  };

  const initialFrom = parseInitial(fromDateISO, fromTimeISO, dayjs());
  const initialTo = parseInitial(toDateISO, toTimeISO, dayjs().add(1, "day"));

  // component state for current booking values (used for display and calculations)
  const [fromState, setFromState] = useState(initialFrom);
  const [toState, setToState] = useState(initialTo);
  const [locState, setLocState] = useState(initialLocation);

  // modal state and temp edit fields
  const [editOpen, setEditOpen] = useState(false);
  const [tempFromDate, setTempFromDate] = useState(fromState);
  const [tempFromTime, setTempFromTime] = useState(fromState);
  const [tempToDate, setTempToDate] = useState(toState);
  const [tempToTime, setTempToTime] = useState(toState);
  const [tempLocation, setTempLocation] = useState(locState);

  // keep temps in sync when opening modal (or when params change)
  useEffect(() => {
    setTempFromDate(fromState);
    setTempFromTime(fromState);
    setTempToDate(toState);
    setTempToTime(toState);
    setTempLocation(locState);
  }, [fromState, toState, locState, editOpen]);

  // pricing placeholders (adjust to pass via query or fetch)
  const dailyRate = Number(params.get("daily") || 115);
  const driverFee = Number(params.get("driverFee") || 115);
  const currency = params.get("currency") || "CFA";

  const computed = useMemo(() => {
    const diffMs = toState.valueOf() - fromState.valueOf();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const remainderMs = diffMs - diffDays * 24 * 60 * 60 * 1000;
    const hours = Math.round(remainderMs / (1000 * 60 * 60));
    const durationString = `${diffDays} Days ${hours} hours`;

    const daysCharged = Math.max(1, diffDays + (hours > 0 ? 1 : 0));
    const subTotal = daysCharged * dailyRate + driverFee;
    const vat = (subTotal * 7.5) / 100;
    const total = Math.round((subTotal + vat) * 100) / 100;

    return {
      diffDays,
      hours,
      durationString,
      daysCharged,
      subTotal,
      vat,
      total,
    };
  }, [fromState, toState, dailyRate, driverFee]);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [saving, setSaving] = useState(false);

  function handleConfirm() {
    if (!paymentMethod) {
      alert("Choose a payment method");
      return;
    }
    if (!agreed) {
      alert("Please agree to the rentals terms");
      return;
    }

    setSaving(true);

    const booking = {
      id: carId || "temp-id",
      make: car?.make || "",
      model: car?.model || "",
      year: car?.year || "",
      from: fromState.toISOString(),
      to: toState.toISOString(),
      location: locState,
      paymentMethod,
      total: computed.total,
      currency,
    };

    const qs = new URLSearchParams(booking).toString();

    setTimeout(() => {
      router.push(`/confirmation?${qs}`);
    }, 600);
  }

  // open modal and copy current values into temp fields
  const handleEditBooking = () => {
    setTempFromDate(fromState);
    setTempFromTime(fromState);
    setTempToDate(toState);
    setTempToTime(toState);
    setTempLocation(locState);
    setEditOpen(true);
  };

  // save edited values back to main state
  const handleSaveEdit = () => {
    // Combine date and time parts if the user changed them separately.
    // For simplicity, if tempFromTime has a different time than tempFromDate use tempFromTime's hour/min.
    const combineDateAndTime = (datePart, timePart) => {
      const d = dayjs(datePart);
      const t = dayjs(timePart);
      return d.hour(t.hour()).minute(t.minute()).second(t.second());
    };

    const newFrom = combineDateAndTime(tempFromDate, tempFromTime);
    const newTo = combineDateAndTime(tempToDate, tempToTime);

    setFromState(newFrom);
    setToState(newTo);
    setLocState(tempLocation || "");

    setEditOpen(false);
  };

  if (carsLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="max-w-7xl mx-auto p-3 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Selected Vehicle + Scheduled time */}
          <div className="col-span-2 space-y-4">
            <div className="bg-white shadow-sm rounded-lg p-5 border border-[#D0D0D0]">
              <p className="sm:text-xl font-semibold mb-2">Selected Vehicle</p>
              <div className="flex flex-wrap sm:flex-row items-start gap-4">
                <div className="w-24 sm:w-36 h-24 relative rounded overflow-hidden shrink-0">
                  <Image
                    src={car?.coverImage || "/placeholder-car.jpg"}
                    alt={`${car?.make} ${car?.model}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xs sm:text-lg font-semibold text-gray-900">
                        {car?.make} {car?.model} {car?.year}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Vehicle Type: {car?.type}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Booking Type: Without Driver
                      </p>
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 mt-1">
                        <p>{car?.rating?.overall}</p>
                        <FaStar className="text-[#FFC700]" />
                        <p>(54 trips)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-5 border border-[#D0D0D0]">
              <div className="flex items-center justify-between">
                <h4 className="sm:text-xl font-semibold sm:mb-2">
                  Scheduled Time
                </h4>
                <IconButton aria-label="edit" onClick={handleEditBooking}>
                  <FaEdit />
                </IconButton>
              </div>

              <div className="sm:mt-4 space-y-3 text-xs sm:text-sm text-[#191919]">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt />
                  <div className="font-medium">
                    From: {fromState.format("ddd, MMM D [at] h:mm A")}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaCalendarAlt />
                  <div className="font-medium">
                    To: {toState.format("ddd, MMM D [at] h:mm A")}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaLocationDot />
                  <div>
                    <p className="font-medium">{locState}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary / Payment */}
          <aside className="space-y-4">
            <div className="bg-white shadow-sm rounded-lg p-5 border border-[#E4E7EC]">
              <h4 className="font-semibold text-gray-900">Summary</h4>

              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="font-medium">{computed.durationString}</span>
                </div>

                <div className="flex justify-between">
                  <span>Day Rate</span>
                  <span className="font-medium">
                    {currency} {dailyRate}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Driver Fee</span>
                  <span className="font-medium">
                    {currency} {driverFee}
                  </span>
                </div>

                <Divider />

                <div className="flex justify-between text-sm text-gray-500">
                  <span>VAT (7.5%)</span>
                  <span>
                    {currency} {computed.vat.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between mt-3 items-center">
                  <div>
                    <div className="text-xs text-gray-500">Total</div>
                    <div className="text-xl font-semibold text-teal-600">
                      {currency} {computed.total.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    <div>{computed.daysCharged} days charged</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h4 className="font-semibold text-gray-900 mb-3">
                Payment Method
              </h4>

              <FormControl fullWidth size="small">
                <InputLabel id="payment-label">
                  Choose Payment Option
                </InputLabel>
                <Select
                  labelId="payment-label"
                  value={paymentMethod}
                  label="Choose Payment Option"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  sx={{ textTransform: "none" }}
                >
                  <MenuItem value={"card"}>Credit/Debit Card</MenuItem>
                  <MenuItem value={"mobile"}>Mobile Money</MenuItem>
                  <MenuItem value={"bank"}>Bank Transfer</MenuItem>
                </Select>
              </FormControl>

              <div className="mt-4">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      size="small"
                    />
                  }
                  label={
                    <Typography variant="body2" className="text-sm">
                      I have read and agree to the{" "}
                      <button
                        className="text-teal-600 underline"
                        onClick={() => alert("Open rentals terms")}
                      >
                        rentals terms.
                      </button>
                    </Typography>
                  }
                />
              </div>

              <div className="mt-4">
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleConfirm}
                  endIcon={<FaArrowRight />}
                  sx={{
                    backgroundColor: "#00AEA8",
                    "&:hover": { backgroundColor: "#009990" },
                    textTransform: "none",
                  }}
                  disabled={saving}
                >
                  {saving ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    "Confirm Booking"
                  )}
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {/* Edit Booking Modal */}
        <Modal open={editOpen} onClose={() => setEditOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 520 },
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: { xs: 3, sm: 4 },
              outline: "none",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Edit Booking
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <DatePicker
                label="From date"
                value={tempFromDate}
                onChange={(newVal) => {
                  setTempFromDate(newVal);
                  // keep time aligned so combined result remains sensible
                  if (tempFromTime) setTempFromTime((t) => t || newVal);
                }}
                slotProps={{
                  textField: { size: "small" },
                }}
              />
              <TimePicker
                label="From time"
                value={tempFromTime}
                onChange={(newVal) => setTempFromTime(newVal)}
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
              />

              <DatePicker
                label="To date"
                value={tempToDate}
                onChange={(newVal) => {
                  setTempToDate(newVal);
                  if (tempToTime) setTempToTime((t) => t || newVal);
                }}
                slotProps={{
                  textField: { size: "small" },
                }}
              />
              <TimePicker
                label="To time"
                value={tempToTime}
                onChange={(newVal) => setTempToTime(newVal)}
                slotProps={{
                  textField: { size: "small" },
                }}
              />
            </div>

            <TextField
              label="Pickup & Return Location"
              fullWidth
              size="small"
              value={tempLocation}
              onChange={(e) => setTempLocation(e.target.value)}
              placeholder="Enter airport, address, or landmark"
              sx={{ mb: 2 }}
            />

            <div className="flex justify-end gap-3">
              <Button
                onClick={() => setEditOpen(false)}
                sx={{
                  textTransform: "none",
                  bgcolor: "#F2F4F6",
                  color: "black",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveEdit}
                variant="contained"
                sx={{
                  backgroundColor: "#14b8a6",
                  "&:hover": { backgroundColor: "#0d9488" },
                  textTransform: "none",
                }}
              >
                Save
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </LocalizationProvider>
  );
}
