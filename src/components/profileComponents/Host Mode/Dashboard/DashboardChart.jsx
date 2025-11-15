import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const EarningsAndBookingsChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} barGap={10}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis width="auto" tick={{ fill: "#00AEA8", fontSize: 12 }} />
        <Tooltip />
        <Legend />
        {/* Bookings Bar */}
        <Bar dataKey="bookings" fill="#8B5CF6" barSize={20} name="Bookings">
          {data.map((entry, index) => (
            <Cell key={`cell-bookings-${index}`} fill="#8B5CF6" />
          ))}
        </Bar>
        {/* Earnings Bar */}
        <Bar
          dataKey="earnings"
          fill="#00AEA8"
          barSize={20}
          name="Earnings(FCFA)"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-earnings-${index}`} fill="#00AEA8" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EarningsAndBookingsChart;
