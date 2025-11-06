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

export default function SignIn() {
  const { user, loading, error, logIn } = useLogIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowNewPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
    }

    if (!password) {
      toast.error("Password is required");
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
    }

    await logIn(email, password);
  };

  return (
    <div className="bg-linear-to-b from-[#FBFFFF] to-[#D6F9F8] min-h-[85vh] flex justify-center items-center p-4">
      <div className="flex flex-col gap-2 sm:gap-4 bg-white shadow-md rounded-lg w-full max-w-md px-3 sm:px-8 py-4 sm:py-12">
        <p className="text-center text-lg sm:text-3xl font-bold text-[#1A1D25]">
          Log In
        </p>

        <Button
          sx={{
            textTransform: "none",
            border: "1px solid #DADCE0",
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <div className="flex items-center gap-2 justify-center">
            <FcGoogle className="text-lg" />
            <p className="text-[#454959] font-semibold">Continue with Google</p>
          </div>
        </Button>

        <div className="flex items-center w-full">
          <Divider sx={{ flex: 1 }} />
          <p className="mx-3 text-[#828A99]">or</p>
          <Divider sx={{ flex: 1 }} />
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
                  xs: "12px 14px",
                  sm: "14px 14px",
                  md: "16px 14px",
                  lg: "18px 14px",
                },
              },
            }}
          />

          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
                  xs: "12px 14px",
                  sm: "14px 14px",
                  md: "16px 14px",
                  lg: "18px 14px",
                },
              },
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={handleShowNewPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <IoIosEyeOff className="text-[#00AEA8]" />
                      ) : (
                        <IoMdEye className="text-[#00AEA8]" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <Link
            href="reset-password"
            className="flex justify-end text-xs sm:text-sm text-[#00AEA8] hover:font-medium mt-1"
          >
            Reset password
          </Link>

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
                md: "12px 24px",
              },
              fontSize: {
                xs: "0.875rem",
                sm: "0.9375rem",
                md: "1rem",
              },
              borderRadius: "8px",
              width: "100%",
              minHeight: {
                xs: "40px",
                sm: "48px",
                md: "52px",
              },
              "&:hover": {
                backgroundColor: "#007D74",
              },
            }}
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </Button>
        </form>

        {error && <p className="text-center text-red-500 mt-2">{error}</p>}

        <div className="flex items-center gap-1 justify-center text-sm">
          <p className=" text-[#828A99]">No account? </p>
          <Link href="sign-up" className="text-[#00AEA8] font-semibold">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}
