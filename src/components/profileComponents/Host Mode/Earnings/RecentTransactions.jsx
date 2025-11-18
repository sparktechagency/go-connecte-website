import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Chip,
} from "@mui/material";
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
    <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
      <Table stickyHeader aria-label="recent transactions table">
        <TableHead>
          <TableRow
            sx={{
              bgcolor: "#F9FAFB",
            }}
          >
            <TableCell
              sx={{
                fontWeight: 600,
                color: "#4B5563",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                py: { xs: 1.5, sm: 2 },
              }}
            >
              Vehicle
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 600,
                color: "#4B5563",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                py: { xs: 1.5, sm: 2 },
              }}
            >
              Booking Reference
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 600,
                color: "#4B5563",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                py: { xs: 1.5, sm: 2 },
              }}
            >
              Guest
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 600,
                color: "#4B5563",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                py: { xs: 1.5, sm: 2 },
              }}
            >
              Date
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 600,
                color: "#4B5563",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                py: { xs: 1.5, sm: 2 },
              }}
            >
              Amount
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 600,
                color: "#4B5563",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                py: { xs: 1.5, sm: 2 },
              }}
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentTransactions.map((transaction, index) => (
            <TableRow
              key={index}
              sx={{
                transition: "background-color 0.2s ease",
                "&:hover": { backgroundColor: "#F9FAFB" },
              }}
            >
              <TableCell
                sx={{
                  color: "#191919",
                  fontSize: { xs: "0.6rem", sm: "0.7rem", xl: "0.95rem" },
                  py: { xs: 1.5, sm: 2 },
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full">
                    <FaCar className="text-xl text-[#191919]" />
                  </div>
                  <span>{transaction.vehicle}</span>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  color: "#191919",
                  fontSize: { xs: "0.6rem", sm: "0.7rem", xl: "0.95rem" },
                  py: { xs: 1.5, sm: 2 },
                }}
              >
                {transaction.bookingRef}
              </TableCell>
              <TableCell
                sx={{
                  color: "#191919",
                  fontSize: { xs: "0.6rem", sm: "0.7rem", xl: "0.95rem" },
                  py: { xs: 1.5, sm: 2 },
                }}
              >
                {transaction.guest}
              </TableCell>
              <TableCell
                sx={{
                  color: "#191919",
                  fontSize: { xs: "0.6rem", sm: "0.7rem", xl: "0.95rem" },
                  py: { xs: 1.5, sm: 2 },
                }}
              >
                {transaction.date}
              </TableCell>
              <TableCell
                sx={{
                  color: "#191919",
                  fontSize: { xs: "0.6rem", sm: "0.7rem", xl: "0.95rem" },
                  py: { xs: 1.5, sm: 2 },
                }}
              >
                {transaction.amount}
              </TableCell>
              <TableCell
                sx={{
                  color: "#191919",
                  fontSize: { xs: "0.6rem", sm: "0.7rem", xl: "0.95rem" },
                  py: { xs: 1.5, sm: 2 },
                }}
              >
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentTransactions;
