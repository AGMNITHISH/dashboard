import Widjet from "@/components/Widjet";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-60 w-full bg-gray-800 p-4">
        <Widjet metricsCardData={[]} />
      </div>
    </div>
  );
};

export default Home;
