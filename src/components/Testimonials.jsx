"use client";

import React, { useState, useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "annette black",
    role: "Customer",
    rating: 4,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "leslie alexander",
    role: "Customer",
    rating: 4,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "alis white",
    role: "Customer",
    rating: 5,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "morgan reed",
    role: "Customer",
    rating: 5,
    text: "I loved the smooth booking process and flexible pickup options. The car was spotless and drove like a dream.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible count based on screen size
  useEffect(() => {
    function updateVisibleCount() {
      const width = window.innerWidth;
      let newCount;
      if (width < 640) {
        newCount = 1; // mobile
      } else if (width < 1024) {
        newCount = 2; // tablet
      } else {
        newCount = 3; // desktop
      }

      setVisibleCount(newCount);
      // Reset index if it goes out of bounds
      setCurrentIndex((prev) => Math.min(prev, testimonials.length - newCount));
    }

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Calculate the maximum index we can scroll to
  const maxIndex = testimonials.length - visibleCount;

  // Navigation functions - move by exactly 1 card
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, maxIndex]);

  // Calculate the width of each card as a percentage
  const cardWidth = 100 / visibleCount;

  // Calculate how far to translate based on current index
  // Each card movement should shift by exactly one card width
  const translateAmount = -(currentIndex * cardWidth);

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-12">
          <div className="flex items-center gap-2 justify-center mb-4 text-[#00AEA8]">
            <FaStarOfLife />
            <p className="text-sm sm:text-base font-medium">Testimonials</p>
          </div>
          <h2 className="text=lg sm:text-2xl lg:text-4xl font-semibold">
            What our customers are saying about us
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative px-0 sm:px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${translateAmount}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="shrink-0 px-3 cursor-pointer"
                  style={{ width: `${cardWidth}%` }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid #e5e7eb",
                      borderRadius: "16px",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        size="small"
                        sx={{ mb: 2 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#616161",
                          lineHeight: 1.7,
                          fontSize: "0.9rem",
                        }}
                      >
                        {testimonial.text}
                      </Typography>
                    </CardContent>

                    <Divider />

                    <CardActions sx={{ p: 2, gap: 1.5 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 44, height: 44 }}
                      />
                      <div>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            textTransform: "lowercase",
                            fontSize: "0.875rem",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                        >
                          {testimonial.role}
                        </Typography>
                      </div>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <IconButton
              onClick={handlePrev}
              disabled={currentIndex === 0}
              size="medium"
              sx={{
                bgcolor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                "&:hover": {
                  bgcolor: "grey.100",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                },
                "&.Mui-disabled": {
                  opacity: 0.3,
                  bgcolor: "grey.100",
                },
              }}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </IconButton>

            <IconButton
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              size="medium"
              sx={{
                bgcolor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                "&:hover": {
                  bgcolor: "grey.100",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                },
                "&.Mui-disabled": {
                  opacity: 0.3,
                  bgcolor: "grey.100",
                },
              }}
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </IconButton>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-[#00AEA8] w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to position ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
