"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "../utils/LanguageToggle";
import { motion, AnimatePresence } from "motion/react";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import { TbRoad } from "react-icons/tb";
import { FaRegMessage, FaHeadphones } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { GoArrowSwitch } from "react-icons/go";
import { CgNotes } from "react-icons/cg";

import { usePathname } from "next/navigation";
import { Button, Divider } from "@mui/material";
import useLogIn from "../libs/hooks/useLogIn";

export default function Navbar() {
  const { user, logOut, loading } = useLogIn();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  console.log(user);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isMobileMenuOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    // { href: "/how-we-work", label: "How We Work" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div className="sticky top-0 bg-white z-50 shadow-md h-14 sm:h-20">
      <div className="flex items-center justify-between px-4 lg:px-18 h-full max-w-full mx-auto">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Go Connecte Logo"
              width={82}
              height={57}
              className="w-15 lg:w-20 h-10 lg:h-14"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-14 text-xs lg:text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-700 transition-colors ${
                pathname === link.href
                  ? "text-[#00AEA8] border-b-2 border-[#00AEA8]"
                  : "hover:text-[#00AEA8]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <LanguageToggle />
          <Link
            href="/"
            className="bg-[#00AEA8] text-white text-sm lg:text-base px-2 lg:px-4 py-1 lg:py-2 rounded-md hover:bg-[#0d9488] transition-colors duration-300"
          >
            Become A Host
          </Link>
          <RiDashboardHorizontalLine className="text-2xl cursor-pointer hover:text-[#00AEA8]" />
          {user ? (
            <div
              className="relative"
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
            >
              <FaRegUserCircle className="text-2xl cursor-pointer hover:text-[#00AEA8]" />
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute right-0 top-10 mt-2 w-56 bg-gray-50 rounded-md shadow-lg py-2 z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {[
                      {
                        href: "/profile/favourite",
                        label: "Favourites",
                        icon: <LuHeart />,
                      },
                      {
                        href: "/profile/trips",
                        label: "Trips",
                        icon: <TbRoad />,
                      },
                      {
                        href: "/inbox",
                        label: "Inbox",
                        icon: <FaRegMessage />,
                      },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-2 px-4 py-1.5 text-base text-[#191919] ${
                          pathname === link.href
                            ? "bg-gray-100"
                            : "hover:bg-gray-200"
                        }`}
                        onClick={handleDropdownClose}
                      >
                        {link.icon} {link.label}
                      </Link>
                    ))}
                    <Divider variant="middle" />
                    <Link
                      href="/profile"
                      className={`flex items-center gap-2 px-4 py-1.5 text-base text-[#191919] ${
                        pathname === "/profile"
                          ? "bg-gray-100"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={handleDropdownClose}
                    >
                      <Image
                        src="/images/profile-image.png"
                        alt="Profile Image"
                        width={21}
                        height={21}
                      />
                      <p>Profile</p>
                    </Link>
                    <Link
                      href="/account"
                      className={`flex items-center gap-2 px-4 py-1.5 text-base text-[#191919] ${
                        pathname === "/account"
                          ? "bg-gray-100"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={handleDropdownClose}
                    >
                      <FaRegUserCircle />
                      <p>Account</p>
                    </Link>
                    <Link
                      href="/switch-to-host"
                      className={`flex items-center gap-2 px-4 py-1.5 text-base text-[#191919] ${
                        pathname === "/switch-to-host"
                          ? "bg-gray-100"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={handleDropdownClose}
                    >
                      <GoArrowSwitch />
                      <p>Switch To Host</p>
                    </Link>
                    <Divider variant="middle" />
                    {[
                      {
                        href: "/contact-us",
                        label: "Contact Support",
                        icon: <FaHeadphones />,
                      },
                      {
                        href: "/terms-and-conditions",
                        label: "Terms & Conditions",
                        icon: <CgNotes />,
                      },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-2 px-4 py-1.5 text-base text-[#191919] ${
                          pathname === link.href
                            ? "bg-gray-100"
                            : "hover:bg-gray-200"
                        }`}
                        onClick={handleDropdownClose}
                      >
                        {link.icon} {link.label}
                      </Link>
                    ))}
                    <Divider variant="middle" />
                    <Button
                      sx={{
                        textTransform: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        px: "20px",
                        color: "#191919",
                        fontWeight: "500",
                        width: "100%",
                        justifyContent: "flex-start",
                        fontStyle: "normal",
                        fontSize: "15px",

                        "&:hover": { backgroundColor: "#e5e7eb" },
                      }}
                      onClick={logOut}
                    >
                      <FiLogOut />
                      Log Out
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href="sign-in"
              className="text-sm lg:text-base bg-[#00AEA8] text-white px-3 py-1 border rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:border hover:text-[#00AEA8] hover:font-medium"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center font-medium py-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 transition-colors ${
                  pathname === link.href
                    ? "text-[#00AEA8] border-b-3 border-[#00AEA8]"
                    : "hover:text-[#00AEA8]"
                }`}
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
            <Link
              href="/"
              className="bg-[#00AEA8] text-white px-4 py-2 rounded-md hover:bg-[#0d9488] transition-colors"
              onClick={toggleMobileMenu}
            >
              Become A Host
            </Link>
            {user ? (
              <div className="relative">
                <FaRegUserCircle
                  className="text-2xl cursor-pointer hover:text-[#00AEA8]"
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute top-8 left-0 transform -translate-x-1/2 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                    {[
                      {
                        href: "/favourites",
                        label: "Favourites",
                        icon: <LuHeart />,
                      },
                      { href: "/trips", label: "Trips", icon: <TbRoad /> },
                      {
                        href: "/inbox",
                        label: "Inbox",
                        icon: <FaRegMessage />,
                      },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-2 px-4 py-1 text-base text-[#191919] ${
                          pathname === link.href
                            ? "bg-gray-100"
                            : "hover:bg-gray-200"
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        {link.icon} {link.label}
                      </Link>
                    ))}

                    <Divider variant="middle" className="my-1" />

                    <Link
                      href="/profile"
                      className={`flex items-center gap-2 px-4 py-1 text-base text-[#191919] ${
                        pathname === "/profile"
                          ? "bg-gray-100"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <Image
                        src="/images/profile-image.png"
                        alt="Profile Image"
                        width={21}
                        height={21}
                      />
                      <p>Profile</p>
                    </Link>

                    <Link
                      href="/account"
                      className={`flex items-center gap-2 px-4 py-1 text-base text-[#191919] ${
                        pathname === "/account"
                          ? "bg-gray-100"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <FaRegUserCircle />
                      <p>Account</p>
                    </Link>

                    <Link
                      href="/switch-to-host"
                      className={`flex items-center gap-2 px-4 py-1 text-base text-[#191919] ${
                        pathname === "/switch-to-host"
                          ? "bg-gray-100"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <GoArrowSwitch />
                      <p>Switch To Host</p>
                    </Link>

                    <Divider variant="middle" className="my-1" />

                    {[
                      {
                        href: "/contact-support",
                        label: "Contact Support",
                        icon: <FaHeadphones />,
                      },
                      {
                        href: "/terms-and-conditions",
                        label: "Terms & Conditions",
                        icon: <CgNotes />,
                      },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-2 px-4 py-1 text-base text-[#191919] ${
                          pathname === link.href
                            ? "bg-gray-100"
                            : "hover:bg-gray-200"
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        {link.icon} {link.label}
                      </Link>
                    ))}

                    <Divider variant="middle" className="my-1" />

                    <Button
                      sx={{
                        textTransform: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        px: "20px",
                        color: "#191919",
                        fontWeight: "500",
                        width: "100%",
                        justifyContent: "flex-start",
                        fontStyle: "normal",
                        fontSize: "15px",
                        "&:hover": { backgroundColor: "#e5e7eb" },
                      }}
                      onClick={() => {
                        handleLogOut();
                        toggleMobileMenu();
                      }}
                    >
                      <FiLogOut />
                      Log Out
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="sign-in"
                className="text-sm lg:text-base bg-[#00AEA8] text-white px-3 py-1 border rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:border hover:text-[#00AEA8] hover:font-medium"
              >
                Sign In
              </Link>
            )}
            <RiDashboardHorizontalLine className="text-2xl cursor-pointer hover:text-[#00AEA8]" />
          </div>
        </div>
      )}
    </div>
  );
}
