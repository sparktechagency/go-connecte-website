"use client";

import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FaPlus } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const faqData = [
  {
    id: 1,
    question: "How do I book a car?",
    answer:
      "Simply enter your location and dates, browse available cars, and book online in a few clicks.",
  },
  {
    id: 2,
    question: "What types of cars are available?",
    answer:
      "We offer a wide range of luxury vehicles including sedans, SUVs, sports cars, and executive vehicles. All our cars are premium models from top manufacturers like Mercedes-Benz, BMW, Audi, and more.",
  },
  {
    id: 3,
    question: "What if I need to cancel or change my booking?",
    answer:
      "You can cancel or modify your booking up to 24 hours before your rental start time without any penalty. For cancellations made less than 24 hours in advance, a small fee may apply. Contact our customer service team for assistance.",
  },
  {
    id: 4,
    question: "Are the cars safe and reliable?",
    answer:
      "Absolutely! All our vehicles undergo rigorous safety inspections and maintenance checks before each rental. We prioritize your safety and ensure every car meets the highest standards.",
  },
  {
    id: 5,
    question: "Are the cars safe and well-maintained?",
    answer:
      "Yes, all our vehicles are regularly serviced and maintained to the highest standards. Each car is thoroughly cleaned, inspected, and certified safe before every rental to ensure your complete peace of mind.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState("panel1");
  const [showAll, setShowAll] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleViewMore = () => {
    setShowAll(true);
  };

  const displayedFaqs = showAll
    ? faqData
    : faqData.slice(0, faqData.length - 1);

  return (
    <section className="">
      <div className="max-w-4xl mx-auto">
        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          {displayedFaqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              elevation={0}
              sx={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px !important",
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: "0 !important",
                  marginBottom: "8px !important",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<IoIosArrowDown />}
                sx={{
                  backgroundColor:
                    expanded === `panel${index + 1}` ? "#00AEA8" : "white",
                  color: expanded === `panel${index + 1}` ? "white" : "#1f2937",
                  padding: "16px 20px",
                  minHeight: "60px !important",
                  "&.Mui-expanded": {
                    minHeight: "60px !important",
                  },
                  "& .MuiAccordionSummary-content": {
                    margin: "0 !important",
                  },
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    color:
                      expanded === `panel${index + 1}` ? "white" : "#374151",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                    fontWeight: 600,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "20px 24px",
                  backgroundColor: "#f9fafb",
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                <Typography
                  sx={{
                    color: "#4b5563",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.875rem", sm: "0.95rem" },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="flex justify-center">
            <Button
              variant="contained"
              onClick={handleViewMore}
              startIcon={<FaPlus />}
              sx={{
                backgroundColor: "#00AEA8",
                color: "white",
                textTransform: "none",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                padding: { xs: "10px 24px", sm: "12px 32px" },
                borderRadius: "8px",
                fontWeight: 500,
                boxShadow: "0 4px 12px rgba(0, 174, 168, 0.25)",
                "&:hover": {
                  backgroundColor: "#009991",
                  boxShadow: "0 6px 16px rgba(0, 174, 168, 0.35)",
                },
              }}
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
