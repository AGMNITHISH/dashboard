import React from "react";
import { inputwithIcon } from "./appInterface";

const InputWithIcon: React.FC<inputwithIcon> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex ">
      <input
        type="text"
        className="px-2 py-2 border shadow-md w-60 border-gray-800 rounded-md focus:outline-none text-base font-light"
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
      />
    </div>
  );
};

export default InputWithIcon;
