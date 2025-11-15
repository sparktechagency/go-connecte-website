import React from "react";
import { Button, Chip } from "@mui/material";
import { FiUsers } from "react-icons/fi";

const RecentBookings = () => {
  const bookings = [
    {
      name: "Sarah Miller",
      vehicle: "Tesla Model 3",
      dates: "Nov 20-23, 2024",
      price: "135,000 FCFA",
      status: "Confirmed",
    },
    {
      name: "Mike Johnson",
      vehicle: "BMW 4 Series",
      dates: "Nov 22-25, 2024",
      price: "180,000 FCFA",
      status: "Pending",
    },
    {
      name: "Emma Davis",
      vehicle: "Jeep Wrangler",
      dates: "Nov 18-20, 2024",
      price: "120,000 FCFA",
      status: "Confirmed",
    },
  ];

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4"></h2>
      {bookings.map((booking, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 mb-4 border rounded-lg border-gray-200"
        >
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="h-12 w-12 rounded-full bg-teal-500 text-white flex items-center justify-center">
              <FiUsers />
            </div>
            <div>
              <div className="text-lg font-medium">{booking.name}</div>
              <div className="text-sm text-gray-500">
                {booking.vehicle} • {booking.dates}
              </div>
            </div>
          </div>

          {/* Price and Status */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div>
              <p className="text-lg font-semibold">{booking.price}</p>
              <Chip
                label={booking.status}
                size="small"
                className="mt-1"
                sx={{
                  color: booking.status === "Confirmed" ? "#008236" : "#A65F00",
                  backgroundColor:
                    booking.status === "Confirmed" ? "#DCFCE7" : "#FEF9C2",
                  border:
                    booking.status === "Confirmed"
                      ? "1px solid #B9F8CF"
                      : "1px solid #fff085",
                }}
              />
            </div>
            <Button
              size="small"
              sx={{
                border: "1px solid #D1D5DC",
                textTransform: "none",
                color: "#0A0A0A",
                height: "32px",
              }}
            >
              View
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentBookings;
