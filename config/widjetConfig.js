import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

const widjetConfig = (status, persentageValue) => {
  if (status === "UP") {
    return (
      <div className="text-green-500 flex">
        <IoIosArrowRoundUp className="text-xl" />
        {persentageValue}
      </div>
    );
  } else if (status === "DOWN") {
    return (
      <div className="text-red-500 flex ">
        <IoIosArrowRoundDown className="text-xl" />
        {persentageValue}
      </div>
    );
  } else if (status === "NEUTRAL") {
    return (
      <div className="text-orange-500 flex ">
        <IoIosArrowRoundDown className="text-xl" />
        {persentageValue}
      </div>
    );
  }
};
export default widjetConfig;
