"use client";
import { chartData } from "@/staticData/chartData";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartLine: React.FC = () => {
  return (
    <ResponsiveContainer height="80%" width="100%">
      <LineChart
        data={chartData || null}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <XAxis
          dataKey="name"
          stroke="#ffffff"
          fontSize={12}
          angle={-45}
          textAnchor="end"
        />
        <YAxis stroke="#ffffff" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: "transparent",
            borderRadius: "3px",
            border: "none",
          }}
        />
        <Legend verticalAlign="top" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="uv" stroke="#ffffff" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartLine;
