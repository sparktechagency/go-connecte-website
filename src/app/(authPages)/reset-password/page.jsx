"use client";

import useLogIn from "@/components/libs/hooks/useLogIn";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { toast } from "sonner";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
    }

    await logIn(email);
  };

  return (
    <div className="bg-linear-to-b from-[#FBFFFF] to-[#D6F9F8] min-h-[85vh] flex justify-center items-center p-4">
      <div className="flex flex-col gap-4 sm:gap-8 bg-white shadow-md rounded-lg w-full max-w-md px-3 sm:px-8 py-4 sm:py-12">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-center text-lg sm:text-3xl font-bold text-[#1A1D25]">
            Reset Password
          </p>
          <p className="text-[#737373] text-xs sm:text-base">
            Enter the email associated with your account to reset your password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              sx: {
                height: {
                  xs: "44px",
                  sm: "48px",
                  md: "52px",
                  lg: "56px",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: {
                  xs: "0.875rem",
                  sm: "0.9375rem",
                  md: "1rem",
                },
                transform: {
                  xs: "translate(14px, 12px) scale(1)",
                  sm: "translate(14px, 14px) scale(1)",
                  md: "translate(14px, 16px) scale(1)",
                  lg: "translate(14px, 18px) scale(1)",
                },
                "&.MuiInputLabel-shrink": {
                  transform: "translate(14px, -9px) scale(0.75)",
                },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#00AEA8",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#00AEA8",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00AEA8",
              },
              "& .MuiOutlinedInput-input": {
                padding: {
                  xs: "8px 14px",
                  md: "10px 14px",
                  lg: "14px 14px",
                },
              },
            }}
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
