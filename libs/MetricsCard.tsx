import { metricsCard } from "@/libs/appInterface";
import React from "react";
import { numberFormat, perdentageFormat } from "./valueFormat";
import widjetConfig from "@/config/widjetConfig";

const MetricsCard: React.FC<metricsCard> = ({
  name,
  value,
  icon: Icon,
  percenatageValue,
  lastUpdated,
  status,
  iconClassName,
}) => {
  return (
    <div className="bg-white h-26 p-4  rounded-md">
      <div className="flex justify-between pb-4">
        <div>
          <div className="text-xs text-gray-500 font-medium leading-3">
            {name}
          </div>
          <div className="text-lg font-medium text-gray-700">
            {numberFormat(value)}
          </div>
        </div>
        <div>
          <Icon
            className={`border w-12 text-xs h-12 ${iconClassName} p-3 text-white rounded-full`}
          />
        </div>
      </div>
      <div className="flex items-center">
        <span>{widjetConfig(status, perdentageFormat(percenatageValue))}</span>
        <span className="px-2 text-sm text-gray-400">{lastUpdated}</span>
      </div>
    </div>
  );
};

export default MetricsCard;
