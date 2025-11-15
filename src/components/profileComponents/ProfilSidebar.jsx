"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, Tab, IconButton } from "@mui/material";
import {
  FaUser,
  FaRegHeart,
  FaLock,
  FaCreditCard,
  FaRegStar,
  FaCarSide,
  FaRegBell,
} from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";

import { LuBookOpenText } from "react-icons/lu";
import { MdOutlineVerifiedUser, MdOutlinePhotoCamera } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import image from "../../../public/images/profile.png";

export default function ProfileSidebar({
  profileTabValue,
  menuTabValue,
  onProfileTabChange,
  onMenuChange,
}) {
  const [profileImage, setProfileImage] = useState(image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("profile-image-upload").click();
  };

  const userModeItems = [
    { icon: FaUser, label: "Personal Information" },
    { icon: LuBookOpenText, label: "Bookings" },
    { icon: FaRegHeart, label: "Favourites" },
    { icon: FaLock, label: "Security" },
    { icon: MdOutlineVerifiedUser, label: "Verifications" },
    { icon: FaCreditCard, label: "Payment" },
    { icon: FaRegStar, label: "Reviews" },
  ];
  const hostModeItems = [
    { icon: FaUser, label: "Dashboard" },
    { icon: FaCarSide, label: "My Vehicles" },
    { icon: FaRegBell, label: "Reservation" },
    { icon: FaHandHoldingDollar, label: "Earning" },
    { icon: FaRegStar, label: "Reviews" },
  ];

  return (
    <>
      {/* Profile Picture */}
      <div className="relative mb-4 flex justify-center ">
        <div className="relative">
          <Image
            src={profileImage}
            alt="Profile Picture"
            width={100}
            height={100}
            className="size-20 sm:size-24 md:size-28 rounded-full object-cover"
          />
          <input
            type="file"
            id="profile-image-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <IconButton
            onClick={triggerFileInput}
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "white",
              borderRadius: "50%",
              padding: { xs: "4px", sm: "6px" },
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
              ":hover": {
                bgcolor: "#00AEA8",
                color: "white",
              },
            }}
          >
            <MdOutlinePhotoCamera className="text-sm sm:text-base" />
          </IconButton>
        </div>
      </div>

      {/* Name + Info */}
      <div className="flex flex-col items-center justify-centertext-center md:text-left">
        <h2 className="text-base sm:text-lg font-semibold">John Doe</h2>
        <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-gray-600 mt-1">
          <GrLocation className="text-[#00AEA8]" />
          San Francisco, CA
        </div>
        <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-gray-600 mt-1 mb-4">
          <CiCalendar className="text-[#00AEA8]" />
          Joined Nov 2021
        </div>
      </div>

      {/* Mode Tabs */}
      <Tabs
        value={profileTabValue}
        onChange={onProfileTabChange}
        textColor="inherit"
        indicatorColor="none"
        className="w-full mb-4"
        sx={{
          bgcolor: "#E9E9E9",
          p: "5px",
          borderRadius: "10px",
        }}
      >
        <Tab
          sx={{
            textTransform: "none",
            borderRadius: "5px",
            backgroundColor: profileTabValue === 0 ? "#00AEA8" : "transparent",
            color: profileTabValue === 0 ? "#fff" : "#191919",
            mr: 1,
            flex: 1,
            minHeight: { xs: "40px", sm: "48px" },
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
          }}
          label="User Mode"
        />
        <Tab
          sx={{
            textTransform: "none",
            borderRadius: "5px",
            backgroundColor: profileTabValue === 1 ? "#00AEA8" : "transparent",
            color: profileTabValue === 1 ? "#fff" : "#191919",
            flex: 1,
            minHeight: { xs: "40px", sm: "48px" },
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
          }}
          label="Host Mode"
        />
      </Tabs>

      {/* Vertical Menu Tabs */}
      {profileTabValue === 0 && (
        <Tabs
          orientation="vertical"
          value={menuTabValue}
          onChange={onMenuChange}
          textColor="inherit"
          indicatorColor="none"
          className="w-full"
        >
          {userModeItems.map((item, index) => (
            <Tab
              key={index}
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor:
                  menuTabValue === index ? "#00AEA8" : "transparent",
                color: menuTabValue === index ? "#fff" : "#191919",
                alignItems: "flex-start",
                textAlign: "left",
                minHeight: { xs: "40px", sm: "48px" },
                py: { xs: 1, sm: 1.5 },
                px: { xs: 1.5, sm: 2 },
              }}
              label={
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium w-full">
                  <item.icon
                    className={
                      menuTabValue === index ? "text-white" : "text-[#00AEA8]"
                    }
                  />
                  <span className="whitespace-nowrap">{item.label}</span>
                </div>
              }
            />
          ))}
        </Tabs>
      )}

      {/* host tab items */}
      {profileTabValue === 1 && (
        <Tabs
          orientation="vertical"
          value={menuTabValue}
          onChange={onMenuChange}
          textColor="inherit"
          indicatorColor="none"
          className="w-full"
        >
          {hostModeItems.map((item, index) => (
            <Tab
              key={index}
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor:
                  menuTabValue === index ? "#00AEA8" : "transparent",
                color: menuTabValue === index ? "#fff" : "#191919",
                alignItems: "flex-start",
                textAlign: "left",
                minHeight: { xs: "40px", sm: "48px" },
                py: { xs: 1, sm: 1.5 },
                px: { xs: 1.5, sm: 2 },
              }}
              label={
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium w-full">
                  <item.icon
                    className={
                      menuTabValue === index ? "text-white" : "text-[#00AEA8]"
                    }
                  />
                  <span className="whitespace-nowrap">{item.label}</span>
                </div>
              }
            />
          ))}
        </Tabs>
      )}
    </>
  );
}
