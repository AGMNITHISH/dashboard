import React from "react";
import Widjet from "@/components/modules/Widjet";

const ReportPage: React.FC = () => {
  return (
    <div>
      <div className="h-auto md:h-96 xl:h-60 w-full bg-gray-800 p-4">
        <Widjet metricsCardData={[]} />
      </div>
    </div>
  );
};

export default ReportPage;
