"use client";
import { chartData } from "@/staticData/chartData";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const ChartBar: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        height={200}
        width={1200}
        data={chartData || null}
        margin={{
          top: 20,
          right: 5,
          left: 5,
          bottom: 30,
        }}
      >
        <XAxis dataKey="name" fontSize={12} angle={-45} textAnchor="end" />
        <YAxis fontSize={12} />
        <Tooltip />
        <Legend verticalAlign="top" />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="pv" fill="#007eff" />
        <Bar dataKey="uv" fill="#c87cff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartBar;
