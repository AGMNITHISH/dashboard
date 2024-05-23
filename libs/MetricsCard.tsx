import { metricsCard } from "@/libs/appInterface";
import React from "react";
import { numberFormat, perdentageFormat } from "./valueFormat";
import widjetConfig from "@/config/widjetConfig";

const MetricsCard: React.FC<metricsCard> = ({
  name,
  value,
  icon,
  percenatageValue,
  lastUpdated,
  status,
  iconClassName,
}) => {
  return (
    <div className="bg-white h-26 p-4  rounded-md">
      <div className="flex justify-between pb-4">
        <div>
          <div className="text-xs text-gray-500 font-medium">{name}</div>
          <div className="text-lg font-medium text-gray-700">
            {numberFormat(value)}
          </div>
        </div>
        <div className={`border w-12  h-12 ${iconClassName} rounded-full`}>
          {icon}
        </div>
      </div>
      <div className="flex items-center">
        <span>{widjetConfig(status, perdentageFormat(percenatageValue))}</span>
        <span className="px-2 text-sm text-gray-500">{lastUpdated}</span>
      </div>
    </div>
  );
};

export default MetricsCard;