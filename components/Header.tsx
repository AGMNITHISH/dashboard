"use client";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import navList from "@/config/navConfig";
import Sidebar from "./Sidebar";

const Header: React.FC = () => {
  const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(true);
  return (
    <div className="flex items-center h-16 px-6 bg-slate-300">
      <div className="block md:hidden">
        {sidebarCollapse ? (
          <HiMenuAlt1
            className="text-2xl cursor-pointer hover:text-black"
            onClick={() => setSidebarCollapse(!sidebarCollapse)}
          />
        ) : (
          <div>NOTUS NEXTJS</div>
        )}
      </div>
      {!sidebarCollapse && (
        <>
          <div className="bg-white min-h-screen w-full absolute top-5 left-2 p-4">
            <div className="flex justify-between">
              <div>NOTUS NEXTJS</div>
              <div>
                <CgClose
                  className="text-xl cursor-pointer"
                  onClick={() => setSidebarCollapse(!sidebarCollapse)}
                />
              </div>
            </div>
            <div className="border-b border-slate-200 py-2"></div>
            <Sidebar />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
