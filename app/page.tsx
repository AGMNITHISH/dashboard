import Widjet from "@/components/modules/Widjet";
import ChartBar from "@/libs/charts/ChartBar";
import ChartLine from "@/libs/charts/ChartLine";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="sm:h-auto md:h-96 lg:h-96 xl:h-60 w-full bg-gray-800 p-4">
        <Widjet metricsCardData={[]} />
      </div>
      <div className="block lg:flex p-4 gap-6">
        <div className="h-500 w-full xl:w-4/6 bg-gray-700 p-5 rounded-md relative  md:top-70- shadow-2xl">
          <div className="text-xs tracking-wide	 text-gray-300  font-medium">
            OVERVIEW
          </div>
          <div className="text-base tracking-wider	 text-gray-200 font-medium py-3">
            Sales value
          </div>
          <ChartLine />
        </div>
        <div className="h-500 w-full xl:w-2/6 bg-white p-5 rounded-md relative my-4 lg:my-0 md:top-70- shadow-2xl">
          <div className="text-xs tracking-wide	 text-gray-500  font-semibold">
            PERFORMANCE
          </div>
          <div className="text-base tracking-wider	 text-black font-semibold py-3">
            Total orders
          </div>
          <ChartBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
