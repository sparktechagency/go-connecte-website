"use client";

import { Button, TextField } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(otp);
      router.push("/reset-password");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-linear-to-b from-[#FBFFFF] to-[#D6F9F8] min-h-[85vh] flex justify-center items-center p-4">
      <div className="flex flex-col gap-4 sm:gap-8 bg-white shadow-md rounded-lg w-full max-w-md px-3 sm:px-8 py-4 sm:py-12">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-center text-lg sm:text-3xl font-bold text-[#1A1D25]">
            Verify OTP
          </p>
          <p className="text-[#737373] text-xs sm:text-base">
            Enter the 4-digit code we’ve sent to your email.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <MuiOtpInput
            TextFieldsProps={{
              size: "small",
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#00AEA8",
                    color: "#00AEA8",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00AEA8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00AEA8",
                  },
                },
              },
            }}
            value={otp}
            onChange={handleChange}
            length={6}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00AEA8",
              textTransform: "none",
              fontWeight: "600",
              color: "#FFFFFF",
              padding: {
                xs: "6px 16px",
                sm: "10px 20px",
                md: "10px 24px",
              },
              fontSize: {
                xs: "0.875rem",
                sm: "0.9375rem",
                md: "1rem",
              },
              borderRadius: "8px",
              width: "100%",

              "&:hover": {
                backgroundColor: "#007D74",
              },
            }}
            type="submit"
          >
            Send OTP
          </Button>
        </form>
      </div>
    </div>
  );
}
