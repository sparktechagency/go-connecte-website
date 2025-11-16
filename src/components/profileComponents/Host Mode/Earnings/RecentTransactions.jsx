import React from "react";
import { Card, CardContent, Chip, Button } from "@mui/material";
import { FaCar } from "react-icons/fa"; // For Vehicle Icon

const recentTransactions = [
  {
    vehicle: "Tesla Model 3",
    bookingRef: "BK-2024-H001",
    guest: "Sarah Miller",
    date: "Nov 18, 2024",
    amount: "135,000 FCFA",
    status: "Completed",
  },
  {
    vehicle: "BMW 4 Series",
    bookingRef: "BK-2024-H002",
    guest: "Mike Johnson",
    date: "Nov 15, 2024",
    amount: "180,000 FCFA",
    status: "Completed",
  },
  {
    vehicle: "Jeep Wrangler",
    bookingRef: "BK-2024-H003",
    guest: "Emma Davis",
    date: "Nov 12, 2024",
    amount: "120,000 FCFA",
    status: "Completed",
  },
  {
    vehicle: "Mercedes S-Class",
    bookingRef: "BK-2024-H004",
    guest: "John Smith",
    date: "Nov 10, 2024",
    amount: "165,000 FCFA",
    status: "Pending",
  },
  {
    vehicle: "Tesla Model 3",
    bookingRef: "BK-2024-H005",
    guest: "Lisa Anderson",
    date: "Nov 8, 2024",
    amount: "135,000 FCFA",
    status: "Completed",
  },
  {
    vehicle: "Range Rover",
    bookingRef: "BK-2024-H006",
    guest: "David Brown",
    date: "Nov 5, 2024",
    amount: "210,000 FCFA",
    status: "Completed",
  },
];

const RecentTransactions = () => {
  return (
    <div className="space-y-2 ">
      {recentTransactions.map((transaction, index) => (
        <Card key={index} sx={{ bgcolor: "#F9FAFB" }}>
          <CardContent className="flex justify-between items-center p-4">
            <div className="flex gap-4">
              {/* Vehicle and Transaction Info */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full">
                  <FaCar className="text-xl text-[#191919]" />
                </div>
                <div>
                  <p className="font-semibold">{transaction.vehicle}</p>
                  <p className="text-sm text-gray-500">
                    {transaction.bookingRef}
                  </p>
                  <p className="text-sm text-gray-500">{`Guest: ${transaction.guest}`}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
            </div>

            {/* Amount and Status */}
            <div className="text-right">
              <p className="text-xl font-semibold text-gray-900">
                {transaction.amount}
              </p>
              <Chip
                label={transaction.status}
                size="small"
                sx={{
                  bgcolor:
                    transaction.status === "Completed"
                      ? "#D4FBE3"
                      : transaction.status === "Pending"
                      ? "#FFF7D5"
                      : "#D4FBE3",
                  color:
                    transaction.status === "Completed"
                      ? "#16A34A"
                      : transaction.status === "Pending"
                      ? "#F59E0B"
                      : "#16A34A",
                  fontSize: "0.7rem",
                  borderRadius: "999px",
                  mt: 1,
                }}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RecentTransactions;
