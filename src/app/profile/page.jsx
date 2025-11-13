"use client";

import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import Bookings from "@/components/profileComponents/Booking/Bookings";
import PersonalInformation from "@/components/profileComponents/PersonalInformation";
import Favourite from "@/components/profileComponents/Favourites";
import Security from "@/components/profileComponents/Security";
import Verifications from "@/components/profileComponents/Verifications";
import Payment from "@/components/profileComponents/Payment";
import ProfileSidebar from "@/components/profileComponents/ProfilSidebar";

export default function Profile() {
  const [profileTabValue, setProfileTabValue] = useState(0);
  const [menuTabValue, setMenuTabValue] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleProfileTabChange = (e, newValue) => setProfileTabValue(newValue);
  const handleMenuChange = (e, newValue) => {
    setMenuTabValue(newValue);
    setMobileMenuOpen(false);
  };

  const renderUserTabContent = () => {
    switch (menuTabValue) {
      case 0:
        return <PersonalInformation />;
      case 1:
        return <Bookings />;
      case 2:
        return <Favourite />;
      case 3:
        return <Security />;
      case 4:
        return <Verifications />;
      case 5:
        return <Payment />;
      case 6:
        return <div>Reviews Component</div>;
      default:
        return null;
    }
  };

  const renderHostModeContent = () => (
    <div className="p-4 md:p-6">Host Mode Content Placeholder</div>
  );

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="fixed top-14 sm:top-20 left-2 z-50 lg:hidden bg-[#00AEA8] text-white p-2 sm:p-3 rounded shadow-lg"
        aria-label="Open menu"
      >
        <FaBars className="text-sm" />
      </button>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "80%",
            maxWidth: "320px",
            boxSizing: "border-box",
          },
        }}
      >
        <div className="bg-[#F9FAFB] h-full p-4 overflow-y-auto">
          <div className="flex justify-end mb-4">
            <IconButton
              onClick={() => setMobileMenuOpen(false)}
              sx={{
                color: "#191919",
              }}
            >
              <IoClose className="text-2xl" />
            </IconButton>
          </div>
          <ProfileSidebar
            profileTabValue={profileTabValue}
            menuTabValue={menuTabValue}
            onProfileTabChange={handleProfileTabChange}
            onMenuChange={handleMenuChange}
          />
        </div>
      </Drawer>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-[#F9FAFB] w-[320px] lg:w-[300px] xl:w-[280px] py-5 px-3 lg:px-4 overflow-y-auto">
        <ProfileSidebar
          profileTabValue={profileTabValue}
          menuTabValue={menuTabValue}
          onProfileTabChange={handleProfileTabChange}
          onMenuChange={handleMenuChange}
        />
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {profileTabValue === 0
            ? renderUserTabContent()
            : renderHostModeContent()}
        </div>
      </div>
    </div>
  );
}
