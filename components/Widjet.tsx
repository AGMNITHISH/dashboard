import React from "react";
import MetricsCard from "../libs/MetricsCard";
import { metricsCardData } from "@/staticData/metricCardData";
import { metricsCard } from "@/libs/appInterface";

interface MetricsListProps {
  metricsCardData: metricsCard[];
}

const Widjet: React.FC<MetricsListProps> = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {metricsCardData.map((item, index) => {
        return (
          <MetricsCard
            key={index}
            name={item.name}
            value={item.value}
            percenatageValue={item.percenatageValue}
            lastUpdated={item.lastUpdated}
            status={item.status}
            icon={item.icon}
            iconClassName={item.iconClassName}
          />
        );
      })}
    </div>
  );
};

export default Widjet;
