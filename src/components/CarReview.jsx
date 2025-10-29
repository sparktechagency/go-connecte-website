import React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import { FaStar } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import { Divider } from "@mui/material";

const sampleStats = {
  avg: 4.95,
  count: 500,
  // 5-star, 4-star, 3-star, 2-star, 1-star
  breakdown: [220, 100, 80, 95, 5],
};

const reviews = new Array(6).fill(0).map((_, i) => ({
  id: i + 1,
  name: "Sarah Johnson",
  time: "December 4, 2024 at 3:12 pm",
  rating: 5,
  avatar: "/avatar.jpg",
  text: "The views from The High Roller were absolutely stunning! It's a fantastic way to see the Strip and the surrounding area. The cabins are spacious and comfortable, and the audio commentary adds an extra layer of enjoyment. Highly recommend!",
}));

export default function CarReview() {
  return (
    <div className="min-h-screen border border-[#DDE1DE] p-4 sm:p-6 mt-2 rounded-lg">
      <div className="max-w-5xl mx-auto">
        <Paper elevation={2} className="p-4 sm:p-6 rounded-lg">
          {/* ────── SCORE BADGE + BREAKDOWN ────── */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
            {/* Badge – always on top on small screens */}
            <div className="shrink-0 flex justify-center lg:justify-start">
              <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-teal-500 flex flex-col items-center justify-center text-white">
                <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
                  {sampleStats.avg.toFixed(2)} / 5
                </div>
                <div className="text-xs sm:text-sm mt-1">
                  ({sampleStats.count} reviews)
                </div>
              </div>
            </div>

            {/* Rating breakdown – stacked on mobile, side-by-side on lg+ */}
            <div className="flex-1 space-y-2">
              {sampleStats.breakdown.map((n, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3 text-sm"
                >
                  <div className="w-12 text-right">{5 - idx} Stars</div>

                  {/* BAR */}
                  <div className="flex-1 bg-gray-200 rounded h-3 overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 transition-all duration-300"
                      style={{
                        width: `${(n / sampleStats.count) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="w-10 text-right">{n}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ────── REVIEWS LIST ────── */}
          <div className="mt-8 space-y-4">
            {reviews.map((r) => (
              <Paper
                key={r.id}
                className="p-4 rounded border border-[#DDE1DE]"
                elevation={0}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar alt={r.name} src={r.avatar} />
                    <div>
                      <div className="font-medium">{r.name}</div>
                      <div className="text-xs text-gray-500">{r.time}</div>
                    </div>
                  </div>

                  <Rating
                    name={`rating-${r.id}`}
                    value={r.rating}
                    readOnly
                    precision={0.5}
                    size="small"
                    icon={<FaStar fontSize="inherit" />}
                  />
                </div>

                <Divider sx={{ my: 1 }} />

                <div className="mt-2 text-xs sm:text-sm text-gray-700">
                  {r.text}
                </div>
              </Paper>
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <Pagination
                count={6}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#374151",
                    fontSize: "0.875rem",
                    minWidth: "32px",
                    height: "32px",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#14b8a6 !important",
                    color: "white !important",
                    fontWeight: "600",
                    "&:hover": {
                      backgroundColor: "#0d9488",
                    },
                  },
                  "& .MuiPaginationItem-page:hover": {
                    backgroundColor: "#f3f4f6",
                    color: "#111827",
                  },
                  "& .MuiPaginationItem-ellipsis": {
                    color: "#9ca3af",
                  },
                  "& .MuiPagination-ul": {
                    gap: "4px",
                  },
                }}
              />
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
