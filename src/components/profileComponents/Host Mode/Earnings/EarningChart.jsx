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
    <div className="bg-white shadow-md p-6 rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#00AEA8"
            fillOpacity={0.3}
            fill="#00AEA8"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsTrend;
