import Widjet from "@/components/Widjet";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="sm:h-auto md:h-96 lg:h-96 xl:h-60 w-full bg-gray-800 p-4">
        <Widjet metricsCardData={[]} />
      </div>
    </div>
  );
};

export default Home;
