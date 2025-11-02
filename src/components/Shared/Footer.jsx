import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#040401] text-white py-6 sm:py-8 lg:py-10 mt-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 lg:gap-10">
        {/* Company Info */}
        <div className="text-left">
          <Image
            src="/images/logo.png"
            alt="Go Connecte Logo"
            width={91}
            height={62}
            className="mb-3 sm:mb-4 mx-auto sm:mx-0"
          />
          <p className="text-white text-xs sm:text-sm leading-relaxed mx-auto sm:mx-0 sm:w-full lg:w-5/6">
            Your go-to destination for luxury car rentals in Lagos. Enjoy a
            premium experience with top-class vehicles
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Company
          </h3>
          <ul className="space-y-1.5 sm:space-y-2 text-[#E4E7EC] text-xs sm:text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-[#00AEA8] transition-colors inline-block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-[#00AEA8] transition-colors inline-block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/how-we-work"
                className="hover:text-[#00AEA8] transition-colors inline-block"
              >
                How We Work
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-[#00AEA8] transition-colors inline-block"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Quick Link
          </h3>
          <ul className="space-y-1.5 sm:space-y-2 text-[#E4E7EC] text-xs sm:text-sm">
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-[#00AEA8] transition-colors inline-block"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/frequently-asked-questions"
                className="hover:text-[#00AEA8] transition-colors inline-block"
              >
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <Link
                href="/fleet"
                className="hover:text-[#00AEA8] transition-colors inline-block"
              >
                Fleet
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Contact
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-[#E4E7EC] text-xs sm:text-sm">
            <li className="flex items-center gap-2 sm:gap-3 justify-start">
              <FaPhoneVolume className="text-lg sm:text-xl shrink-0" />
              <span className="break-all">+234 912 230 8240</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3 justify-start">
              <FaWhatsapp className="text-lg sm:text-xl shrink-0" />
              <span>+234 810 348 4586</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3 justify-start">
              <MdMailOutline className="text-lg sm:text-xl shrink-0" />
              <span>example@carrental.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 sm:mt-8 lg:mt-10 pt-3 sm:pt-4">
        <p className="text-center text-gray-400 text-xs sm:text-sm px-4">
          © {new Date().getFullYear()} Go Connecte. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
