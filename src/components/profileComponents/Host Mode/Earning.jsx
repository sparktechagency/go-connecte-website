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
      <p className="text-[#191919] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-5">
        Earnings
      </p>
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Total Earnings */}
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              background: "linear-gradient(90deg, #00AEA80D, #00AEA81A)",
            }}
            className="w-full"
          >
            <CardContent className="flex flex-row justify-between items-start">
              <div className="flex flex-col gap-1 sm:gap-3 items-start">
                <div className="size-8 lg:size-12 rounded-xl flex items-center justify-center bg-[#00AEA8] text-white">
                  <LuCircleDollarSign className="text-lg sm:text-lg lg:text-3xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-[#4A5565]">
                    Total Earnings
                  </span>
                  <span className="lg:text-lg font-semibold text-[#191919]">
                    328,000 FCFA
                  </span>
                  <span className="text-xs text-slate-500 sm:mt-1">
                    This month
                  </span>
                </div>
              </div>

              <Chip
                label="+23.5%"
                size="small"
                sx={{
                  bgcolor: "#DCFCE7",
                  color: "#008236",
                  fontSize: "12px",
                  borderRadius: "999px",
                  border: "1px solid #B9F8CF",
                }}
              />
            </CardContent>
          </Card>

          {/* Your Vehicles */}
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              background: "linear-gradient(90deg, #EFF6FF, #DBEAFE)",
            }}
            className="w-full"
          >
            <CardContent className="flex flex-row justify-between items-start p-4">
              <div className="flex flex-col gap-1 sm:gap-3 items-start">
                <div className="size-8 lg:size-12 rounded-xl flex items-center justify-center bg-[#155DFC] text-white">
                  <FaCarSide className="text-lg sm:text-lg lg:text-3xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-[#4A5565]">
                    Your Vehicles
                  </span>
                  <span className="lg:text-lg font-semibold text-[#191919]">
                    4
                  </span>
                  <span className="text-xs text-slate-500 sm:mt-1">Listed</span>
                </div>
              </div>

              <Chip
                label="4 Active"
                size="small"
                sx={{
                  bgcolor: "#DBEAFE",
                  color: "#2563EB",
                  fontSize: "12px",
                  borderRadius: "999px",
                  border: "1px solid #BEDBFF",
                }}
              />
            </CardContent>
          </Card>

          {/* Total Bookings */}
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              background: "linear-gradient(90deg, #FAF5FF, #F3E8FF)",
            }}
            className="w-full"
          >
            <CardContent className="flex flex-row justify-between items-start p-4">
              <div className="flex flex-col gap-1 sm:gap-3 items-start">
                <div className="size-8 lg:size-12 rounded-xl flex items-center justify-center bg-[#9810FA] text-white">
                  <FaRegCalendar className="text-lg sm:text-lg lg:text-3xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-[#4A5565]">
                    Total Bookings
                  </span>
                  <span className="lg:text-lg font-semibold text-[#191919]">
                    46
                  </span>
                  <span className="text-xs text-slate-500 sm:mt-1">
                    This month
                  </span>
                </div>
              </div>

              <Chip
                label="+23.5%"
                size="small"
                sx={{
                  bgcolor: "#F7EFeaF",
                  color: "#9810FA",
                  fontSize: "12px",
                  borderRadius: "999px",
                  border: "1px solid #9810FA",
                }}
              />
            </CardContent>
          </Card>
        </div>
        <div className="py-5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Earnings Trend
              </h3>
              <p className="text-[#737373] text-xs sm:text-base">
                12-Month earnings overview
              </p>
            </div>

            {/* Material UI Select for Year */}
            <FormControl className="w-32">
              <InputLabel
                sx={{
                  color: "#000",
                  "&.Mui-focused": {
                    color: "#00AEA8",
                  },
                }}
              >
                Year
              </InputLabel>
              <Select
                value={selectedYear}
                onChange={handleYearChange}
                label="Year"
                sx={{
                  height: "40px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#00AEA8", // Set border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#00AEA8", // Set border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00AEA8", // Set border color when focused
                    },
                  },
                }}
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
            <p className="text-lg sm:text-xl font-semibold">
              Recent Transactions
            </p>{" "}
            <div className="text-right">
              <Link href="/" className="text-[#00AEA8] text-sm sm:text-base">
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
