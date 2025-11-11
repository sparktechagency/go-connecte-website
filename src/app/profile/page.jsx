"use client";
import Bookings from "@/components/profileComponents/Bookings";
import Favourites from "@/components/profileComponents/Favourites";
import PersonalInformation from "@/components/profileComponents/PersonalInformation";
import Security from "@/components/profileComponents/Security";
import { Tabs, Tab, Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

import image from "../../../public/images/profile.png";

import { LuBookOpenText } from "react-icons/lu";
import {
  FaUser,
  FaRegHeart,
  FaLock,
  FaCreditCard,
  FaRegStar,
} from "react-icons/fa";
import { MdOutlineVerifiedUser, MdOutlinePhotoCamera } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";

export default function Profile() {
  const [value, setValue] = useState(0);
  const [profileImage, setProfileImage] = useState(image);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleImageChange = (event) => {
    console.log("clicked");
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("profile-image-upload").click();
  };

  return (
    <div className="flex flex-col md:flex-row px-6 py-15 mx-auto">
      <div className="bg-[#F9FAFB] w-full md:w-[40%] lg:w-[35%] 2xl:w-1/5 py-5 px-2">
        <div className="flex flex-col items-center space-x-4 mb-6">
          <div className="relative border-5 border-white rounded-full ">
            <Image
              src={profileImage}
              alt="Profile Picture"
              width={100}
              height={100}
              className="size-28 rounded-full object-cover"
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
                right: 5,
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "6px",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
                ":hover": {
                  bgcolor: "#00AEA8",
                  color: "white",
                },
              }}
            >
              <MdOutlinePhotoCamera className="text-lg text-black hover:text-white" />
            </IconButton>
          </div>
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-lg font-semibold">John Doe</h2>
            <div className="flex items-center gap-2">
              <GrLocation className="text-[#00AEA8]" />
              <p className="text-xs text-[#4A5565] ">San Francisco, CA</p>
            </div>
            <div className="flex items-center gap-2">
              <CiCalendar className="text-[#00AEA8]" />
              <p className="text-xs text-[#4A5565]">Joined Nov 2021</p>
            </div>
          </div>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          indicatorColor="primary"
          textColor="inherit"
        >
          <Tab
            sx={{
              textTransform: "none",
              borderRadius: "5px",
              backgroundColor: value === 0 ? "#00AEA8" : "transparent",
              color: value === 0 ? "#fff" : "",
            }}
            label={
              <div className="flex items-center gap-2 font-medium text-xs lg:text-sm">
                <FaUser
                  className={value === 0 ? "text-white" : "text-[#00AEA8]"}
                />{" "}
                <p className={value === 0 ? "text-white" : "text-[#191919]"}>
                  Personal Information
                </p>
              </div>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
              borderRadius: "5px",
              backgroundColor: value === 1 ? "#00AEA8" : "transparent",
              color: value === 1 ? "#fff" : "",
            }}
            label={
              <div className="text-start flex items-center gap-2 justify-start text-xs lg:text-sm">
                <LuBookOpenText
                  className={value === 1 ? "text-white" : "text-[#00AEA8]"}
                />{" "}
                <p className={value === 1 ? "text-white" : "text-[#191919]"}>
                  Bookings
                </p>
              </div>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
              borderRadius: "5px",
              backgroundColor: value === 2 ? "#00AEA8" : "transparent",
              color: value === 2 ? "#fff" : "",
            }}
            label={
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <FaRegHeart
                  className={value === 2 ? "text-white" : "text-[#00AEA8]"}
                />{" "}
                <p className={value === 2 ? "text-white" : "text-[#191919]"}>
                  Favourites
                </p>
              </div>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
              backgroundColor: value === 3 ? "#00AEA8" : "transparent",
              color: value === 3 ? "#00796b" : "",
            }}
            label={
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <FaLock
                  className={value === 3 ? "text-white" : "text-[#00AEA8]"}
                />{" "}
                <p className={value === 3 ? "text-white" : "text-[#191919]"}>
                  Security
                </p>
              </div>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
              backgroundColor: value === 4 ? "#00AEA8" : "transparent",
              color: value === 4 ? "#00796b" : "",
            }}
            label={
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <MdOutlineVerifiedUser
                  className={value === 4 ? "text-white" : "text-[#00AEA8]"}
                />{" "}
                <p className={value === 4 ? "text-white" : "text-[#191919]"}>
                  Verifications
                </p>
              </div>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
              backgroundColor: value === 5 ? "#00AEA8" : "transparent",
              color: value === 5 ? "#00796b" : "",
            }}
            label={
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <FaCreditCard
                  className={value === 5 ? "text-white" : "text-[#00AEA8]"}
                />{" "}
                <p className={value === 5 ? "text-white" : "text-[#191919]"}>
                  Payment
                </p>
              </div>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
              backgroundColor: value === 6 ? "#00AEA8" : "transparent",
              color: value === 6 ? "#00796b" : "",
            }}
            label={
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <FaRegStar
                  className={value === 6 ? "text-white" : "text-[#0b837f]"}
                />{" "}
                <p className={value === 6 ? "text-white" : "text-[#191919]"}>
                  Reviews
                </p>
              </div>
            }
          />
        </Tabs>
      </div>

      <div className="w-full sm:px-5">
        {value === 0 && <PersonalInformation />}
        {value === 1 && <Bookings />}
        {value === 2 && <Favourites />}
        {value === 3 && <Security />}
        {value === 4 && <PersonalInformation />}
        {value === 5 && <PersonalInformation />}
      </div>
    </div>
  );
}
