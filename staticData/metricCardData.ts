import { IoStatsChart } from "react-icons/io5";
import { AiFillPieChart } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { VscPercentage } from "react-icons/vsc";

export const metricsCardData = [
  {
    name: "TRAFFIC",
    value: 350897,
    icon: IoStatsChart,
    percenatageValue: 3.48,
    lastUpdated: "Since last month",
    status: "UP",
    iconClassName: "bg-red-500",
  },
  {
    name: "NEW USERS",
    value: 2356,
    icon: AiFillPieChart,
    percenatageValue: 3.48,
    lastUpdated: "Since last week",
    status: "DOWN",
    iconClassName: "bg-orange-500",
  },
  {
    name: "SALES",
    value: 924,
    icon: MdGroups,
    percenatageValue: 1.1,
    lastUpdated: "Since yesterday",
    status: "NEUTRAL",
    iconClassName: "bg-pink-500",
  },
  {
    name: "PERFORMANCE",
    value: 4965,
    icon: VscPercentage,
    percenatageValue: 12,
    lastUpdated: "Since last month",
    status: "UP",
    iconClassName: "bg-sky-500",
  },
];
