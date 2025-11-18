import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const EarningsTrend = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis width="auto" tick={{ fill: "#00AEA8", fontSize: 12 }} />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="earnings"
          stroke="#00AEA8"
          fillOpacity={0.3}
          fill="#00AEA8"
          strokeWidth={3}
          name="Earnings"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default EarningsTrend;
