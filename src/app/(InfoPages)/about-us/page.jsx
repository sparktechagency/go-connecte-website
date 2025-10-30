"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { aboutUs } from "../../../../public/images/AllImages";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutUs() {
  return (
    <div className="mx-auto sm:py-10">
      {/* About Us Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Image */}
        <motion.div className="order-2 sm:order-1" variants={fadeInLeft}>
          <motion.div
            className="relative aspect-4/3 sm:aspect-square lg:aspect-4/3 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Image
              src={aboutUs.aboutUsImage03}
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="order-1 sm:order-2 text-center sm:text-left"
          variants={fadeInRight}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About us
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Go Connect is your trusted platform for flexible, convenient, and
            affordable car rentals. Whether you&apos;re exploring the city for a
            weekend getaway or need a vehicle for your daily commute, we connect
            drivers with cars that fit their needs.
          </p>
        </motion.div>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Text Content */}
        <motion.div
          className="order-1 sm:order-1 text-center sm:text-left"
          variants={fadeInLeft}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our mission
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Our mission is simple: make car sharing seamless and reliable. By
            linking car owners with people who need a ride, we provide access to
            a wide variety of vehicles while helping owners earn from their cars
            when they&apos;re not using them.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div className="order-2 sm:order-2" variants={fadeInRight}>
          <motion.div
            className="relative aspect-4/3 sm:aspect-square lg:aspect-4/3 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Image
              src={aboutUs.aboutUsImage01}
              alt="Our Mission"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Our Value Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Image */}
        <motion.div className="order-2 sm:order-1" variants={fadeInLeft}>
          <motion.div
            className="relative aspect-4/3 sm:aspect-square lg:aspect-4/3 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Image
              src={aboutUs.aboutUsImage02}
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="order-1 sm:order-2 text-center sm:text-left"
          variants={fadeInRight}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Value
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            At Go Connect, we believe in making car sharing simple, safe, and
            rewarding. Choice is at the heart of what we do, offering a wide
            range of vehicles so every driver can find the perfect fit. We
            prioritize safety, with verified users, secure transactions, and
            responsive support, so both owners and renters can feel confident.
          </p>
        </motion.div>
      </motion.div>

      {/* Three Column Gallery Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* First Image - Electric Car */}
        <motion.div className="w-full" variants={fadeInUp}>
          <motion.div
            className="relative aspect-8/7 rounded-xl overflow-hidden shadow-lg"
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={aboutUs.aboutUsImage05}
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Second Image - Mustang */}
        <motion.div className="w-full" variants={fadeInUp}>
          <motion.div
            className="relative aspect-8/7 rounded-xl overflow-hidden shadow-lg"
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={aboutUs.aboutUsImage04}
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Third Column - Badge and Customer Service Image */}
        <motion.div className="w-full" variants={fadeInUp}>
          <div className="relative aspect-8/7 flex flex-col gap-4">
            {/* 10 Years Badge */}
            <motion.div
              className="bg-linear-to-r from-[#00AEA8] to-teal-500 text-white rounded-xl shadow-lg flex items-center justify-center gap-3 px-4 py-4"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.p
                className="text-4xl lg:text-7xl font-bold leading-none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                10
              </motion.p>
              <p className="text-sm lg:text-xl font-bold uppercase tracking-wide">
                Years
                <br />
                in Business
              </p>
            </motion.div>

            {/* Customer Service Image */}
            <motion.div
              className="flex-1 relative rounded-xl overflow-hidden shadow-lg"
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={aboutUs.aboutUsImage06}
                alt="Customer Service"
                fill
                className="object-cover transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
