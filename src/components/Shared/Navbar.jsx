"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "../utils/LanguageToggle";
import { motion, AnimatePresence } from "motion/react";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle dropdown for mobile (click) and desktop (hover)
  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  // Toggle dropdown for mobile click
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
    { href: "/how-we-work", label: "How We Work" },
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
          <div
            className="relative"
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          >
            <FaRegUserCircle className="text-2xl cursor-pointer hover:text-[#00AEA8]" />
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {[
                    { href: "/profile", label: "Profile" },
                    { href: "/settings", label: "Settings" },
                    { href: "/logout", label: "Logout" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 text-sm text-gray-700 ${
                        pathname === link.href
                          ? "bg-gray-100"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={handleDropdownClose}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
          <div className="flex flex-col items-center font-medium py-4 space-y-4">
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
            <div className="relative">
              <FaRegUserCircle
                className="text-2xl cursor-pointer hover:text-[#00AEA8]"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Settings
                  </Link>
                  <Link
                    href="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
            <RiDashboardHorizontalLine className="text-2xl cursor-pointer hover:text-[#00AEA8]" />
          </div>
        </div>
      )}
    </div>
  );
}
