import {
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaCarSide, FaRegCalendar } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import EarningChart from "./Earnings/EarningChart"; // Assuming this is your custom chart component
import RecentTransactions from "./Earnings/RecentTransactions"; // Assuming this is your recent transaction component

// Data for all years in a single array
const data = [
  {
    year: "2023",
    data: [
      { month: "Jan", earnings: 25000, bookings: 8 },
      { month: "Feb", earnings: 30000, bookings: 10 },
      { month: "Mar", earnings: 32000, bookings: 12 },
      { month: "Apr", earnings: 27000, bookings: 6 },
      { month: "May", earnings: 35000, bookings: 14 },
      { month: "Jun", earnings: 55000, bookings: 18 },
      { month: "Jul", earnings: 65000, bookings: 20 },
      { month: "Aug", earnings: 70000, bookings: 22 },
      { month: "Sep", earnings: 62000, bookings: 16 },
      { month: "Oct", earnings: 57000, bookings: 14 },
      { month: "Nov", earnings: 53000, bookings: 12 },
      { month: "Dec", earnings: 46000, bookings: 10 },
    ],
  },
  {
    year: "2022",
    data: [
      { month: "Jan", earnings: 23000, bookings: 5 },
      { month: "Feb", earnings: 28000, bookings: 7 },
      { month: "Mar", earnings: 31000, bookings: 9 },
      { month: "Apr", earnings: 26000, bookings: 4 },
      { month: "May", earnings: 34000, bookings: 12 },
      { month: "Jun", earnings: 54000, bookings: 16 },
      { month: "Jul", earnings: 63000, bookings: 18 },
      { month: "Aug", earnings: 69000, bookings: 20 },
      { month: "Sep", earnings: 60000, bookings: 14 },
      { month: "Oct", earnings: 55000, bookings: 12 },
      { month: "Nov", earnings: 51000, bookings: 11 },
      { month: "Dec", earnings: 46000, bookings: 9 },
    ],
  },
];

export default function Earning() {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [chartData, setChartData] = useState(data[0].data);

  // Handle year change
  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);

    // Filter the data based on selected year
    const selectedData = data.find((item) => item.year === year);
    setChartData(selectedData ? selectedData.data : []);
  };

  return (
    <div className="w-full bg-white">
      <p className="text-[#191919] text-base sm:text-xl md:text-2xl font-semibold mb-5">
        Dashboard
      </p>
      <div>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Total Earnings */}
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              background: "linear-gradient(135deg, #E3FFF6, #F4FFFD)",
            }}
            className="w-full"
          >
            <CardContent className="flex flex-row justify-between items-start p-4">
              <div className="flex flex-row gap-3 items-start">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-emerald-500 text-white">
                  <LuCircleDollarSign fontSize="small" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">Total Earnings</span>
                  <span className="text-xl font-semibold text-slate-900">
                    328,000 FCFA
                  </span>
                  <span className="text-xs text-slate-500 mt-1">
                    This month
                  </span>
                </div>
              </div>

              <Chip
                label="+23.5%"
                size="small"
                sx={{
                  bgcolor: "#D4FBE3",
                  color: "#16A34A",
                  fontSize: "0.7rem",
                  borderRadius: "999px",
                }}
              />
            </CardContent>
          </Card>

          {/* Your Vehicles */}
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              background: "linear-gradient(135deg, #E4F0FF, #F4F8FF)",
            }}
            className="w-full"
          >
            <CardContent className="flex flex-row justify-between items-start p-4">
              <div className="flex flex-row gap-3 items-start">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-blue-600 text-white">
                  <FaCarSide fontSize="small" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">Your Vehicles</span>
                  <span className="text-xl font-semibold text-slate-900">
                    4
                  </span>
                  <span className="text-xs text-slate-500 mt-1">Listed</span>
                </div>
              </div>

              <Chip
                label="4 Active"
                size="small"
                sx={{
                  bgcolor: "#E0EDFF",
                  color: "#2563EB",
                  fontSize: "0.7rem",
                  borderRadius: "999px",
                }}
              />
            </CardContent>
          </Card>

          {/* Total Bookings */}
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              background: "linear-gradient(135deg, #F4E9FF, #FDF4FF)",
            }}
            className="w-full"
          >
            <CardContent className="flex flex-row justify-between items-start p-4">
              <div className="flex flex-row gap-3 items-start">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-fuchsia-600 text-white">
                  <FaRegCalendar fontSize="small" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">Total Bookings</span>
                  <span className="text-xl font-semibold text-slate-900">
                    46
                  </span>
                  <span className="text-xs text-slate-500 mt-1">
                    This month
                  </span>
                </div>
              </div>

              <Chip
                label="+23.5%"
                size="small"
                sx={{
                  bgcolor: "#D4FBE3",
                  color: "#16A34A",
                  fontSize: "0.7rem",
                  borderRadius: "999px",
                }}
              />
            </CardContent>
          </Card>
        </div>
        <div className="py-5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">Earnings Trend</h3>
              <p className="text-[#737373]">12-Month earnings overview</p>
            </div>

            {/* Material UI Select for Year */}
            <FormControl className="w-32">
              <InputLabel>Year</InputLabel>
              <Select
                value={selectedYear}
                onChange={handleYearChange}
                label="Year"
              >
                {data.map((yearData) => (
                  <MenuItem key={yearData.year} value={yearData.year}>
                    {yearData.year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Earnings and Bookings Chart */}
          <EarningChart data={chartData} />
        </div>
        <div className="border border-[#E5E7EB] p-5 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Recent Transactions</p>{" "}
            <div className="text-right">
              <Link href="/" className="text-[#00AEA8] text-sm">
                View All
              </Link>
            </div>
          </div>

          <RecentTransactions />
        </div>
      </div>
    </div>
  );
}
