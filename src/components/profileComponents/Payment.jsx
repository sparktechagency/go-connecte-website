import React from "react";
import { IoMdCard } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const billingData = [
  {
    date: "Nov 8, 2024",
    description: "Tesla Model 3 Rental",
    subtext: "3 days rental",
    amount: "$450.00",
    status: "Paid",
  },
  {
    date: "Oct 22, 2024",
    description: "BMW 4 Series Rental",
    subtext: "2 days rental",
    amount: "$380.00",
    status: "Paid",
  },
  {
    date: "Oct 5, 2024",
    description: "Porsche 911 Rental",
    subtext: "1 day rental",
    amount: "$599.00",
    status: "Paid",
  },
  {
    date: "Sep 18, 2024",
    description: "Jeep Wrangler Rental",
    subtext: "5 days rental",
    amount: "$525.00",
    status: "Paid",
  },
];

export default function Payment() {
  return (
    <div className="bg-white px-3 sm:px-4 md:px-6 lg:px-10 py-4 sm:py-6 md:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div>
          <p className="text-base sm:text-lg lg:text-2xl font-semibold text-[#191919]">
            Payment Methods
          </p>
          <p className="text-xs lg:text-sm text-[#737373] mt-0.5 sm:mt-1">
            Manage your saved payment methods for faster checkout
          </p>
        </div>
        <Button
          sx={{
            textTransform: "none",
            bgcolor: "#00AEA8",
            color: "white",
            fontSize: { xs: "12px", sm: "10px", lg: "0.8rem" },
            padding: {
              sm: "4px 8px",
              lg: "8px 16px",
            },
            ":hover": {
              bgcolor: "white",
              color: "#00AEA8",
              border: "1px solid #00AEA8",
              fontWeight: "500",
            },
          }}
        >
          + Add Payment Method
        </Button>
      </div>

      {/* Payment Cards */}
      <div className="border border-[#E5E7EB] rounded-lg p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8">
        {/* First Card */}
        <div className="flex flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="bg-linear-to-b from-[#00AEA8] to-[#008E89] text-white p-1 lg:p-4 rounded">
              <IoMdCard className="text-sm sm:text-lg lg:text-3xl" />
            </div>
            <div>
              <div className="flex items-center gap-2 sm:gap-3">
                <p className="text-[#191919] font-bold text-[10px] sm:text-sm lg:text-lg">
                  Visa **** 4242
                </p>
                <p className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs lg:text-sm text-[#00AEA8]">
                  <FaRegCheckCircle />
                  <span>Default</span>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[#737373] text-[10px] sm:text-xs lg:text-base">
                <p>Expires 08/26</p> <GoDotFill className="text-[6px]" />
                <p>John Doe</p>
              </div>
            </div>
          </div>
          <IconButton>
            <RiDeleteBin6Line className="text-[#EB1700] text-sm sm:text-lg lg:text-2xl" />
          </IconButton>
        </div>

        {/* Second Card */}
        <div className="flex flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="bg-linear-to-b from-[#00AEA8] to-[#008E89] text-white p-1 lg:p-4 rounded">
              <IoMdCard className="text-sm sm:text-lg lg:text-3xl" />
            </div>
            <div>
              <div className="flex items-center gap-2 sm:gap-3">
                <p className="text-[#191919] font-bold text-[10px] sm:text-sm lg:text-lg">
                  Visa **** 8899
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[#737373] text-[10px] sm:text-xs lg:text-base">
                <p>Expires 05/27</p> <GoDotFill className="text-[6px]" />
                <p>Jane Smith</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "#fff",
                border: "1px solid #E5E7EB",
                color: "#191919",
                fontSize: { xs: "8px", sm: "10px", lg: "0.8rem" },
                ":hover": {
                  bgcolor: "white",
                  color: "#00AEA8",
                  border: "1px solid #00AEA8",
                  fontWeight: "500",
                },
              }}
            >
              Set As Default
            </Button>
            <IconButton>
              <RiDeleteBin6Line className="text-[#EB1700] text-sm sm:text-lg lg:text-2xl" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="p-3 sm:p-4 md:p-6 bg-white rounded-2xl shadow-md max-w-7xl mx-auto mt-6 overflow-x-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Billing History
        </h2>
        <TableContainer
          sx={{
            borderRadius: 3,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            mt: 4,
            overflowX: "auto",
            bgcolor: "#fff",
          }}
        >
          <Table>
            {/* ===== Table Head ===== */}
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: "#F9FAFB",
                }}
              >
                {["Date", "Description", "Amount", "Status", "Invoice"].map(
                  (header, i) => (
                    <TableCell
                      key={i}
                      sx={{
                        fontWeight: 600,
                        color: "#4B5563",
                        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                        py: { xs: 1.5, sm: 2 },
                      }}
                    >
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>

            {/* ===== Table Body ===== */}
            <TableBody>
              {billingData.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{
                    transition: "background-color 0.2s ease",
                    "&:hover": { backgroundColor: "#F9FAFB" },
                  }}
                >
                  {/* Date */}
                  <TableCell
                    sx={{
                      color: "#191919",
                      fontSize: { xs: "0.6rem", sm: "0.7rem", xl: "0.95rem" },
                      py: { xs: 1.5, sm: 2 },
                    }}
                  >
                    {item.date}
                  </TableCell>

                  {/* Description */}
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.3,
                      py: { xs: 1.5, sm: 2 },
                    }}
                  >
                    <span className="font-medium text-[#1F2937] text-xs lg:text-sm xl:text-base">
                      {item.description}
                    </span>
                    <span
                      style={{
                        color: "#6B7280",
                        fontSize: "0.75em",
                      }}
                    >
                      {item.subtext}
                    </span>
                  </TableCell>

                  {/* Amount */}
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      color: "#111827",
                      fontSize: { xs: "0.7rem", sm: "0.7rem", lg: "0.95rem" },
                    }}
                  >
                    {item.amount}
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <span
                      style={{
                        backgroundColor: "#DCFCE7",
                        color: "#008236",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "0.75em",
                        fontWeight: 500,
                      }}
                    >
                      {item.status}
                    </span>
                  </TableCell>

                  {/* Invoice Button */}
                  <TableCell>
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        textTransform: "none",
                        color: "#00AEA8",
                        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                        ":hover": { textDecoration: "underline" },
                      }}
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
