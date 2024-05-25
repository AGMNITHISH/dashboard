"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Sidebar from "./Sidebar";
import InputWithIcon from "@/libs/InputWithIcon";

const Header: React.FC = () => {
  const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="flex items-center h-16 px-6 bg-gray-800">
      {/* small device header start */}

      {!sidebarCollapse && (
        <>
          <div className="bg-white min-h-screen w-full absolute top-5 left-2 p-4">
            <div className="flex justify-between">
              <div>NOTUS NEXTJS</div>
              <div>
                <CgClose
                  className="text-xl cursor-pointer "
                  onClick={() => setSidebarCollapse(!sidebarCollapse)}
                />
              </div>
            </div>
            <div className="border-b border-slate-200 py-2"></div>
            <Sidebar />
          </div>
        </>
      )}

      {/* small device header end */}

      {/* large(md to xl) screen header start */}
      <div className="flex justify-between items-center w-full">
        <div className="block md:hidden">
          {sidebarCollapse && (
            <HiMenuAlt1
              className="text-2xl cursor-pointer text-white hover:text-gray-400"
              onClick={() => setSidebarCollapse(!sidebarCollapse)}
            />
          )}
        </div>
        <div className="hidden md:block text-white">Dashboard</div>
        <div>
          <InputWithIcon
            name="nav-search"
            value={searchInput}
            onChange={handleChange}
            placeholder="Search here..."
          />
        </div>
        <div>
          <div className="flex flex-row items-center">
            <Image
              src="/nav-avatar.png"
              width={50}
              height={50}
              quality={100}
              alt="Picture of the author"
              className="rounded-full"
            />
            <div className="flex flex-col text-white px-2">
              <span className="hidden xl:block font-semibold">
                Tom Hiddleston
              </span>
              <span className="hidden xl:block text-xs">
                Senior software engineer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* large(md to xl) screen header end */}
    </div>
  );
};

export default Header;
