import React from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { BiTable } from "react-icons/bi";
import { TbMapSearch } from "react-icons/tb";
import { SiSoundcharts, SiReacthookform } from "react-icons/si";
import { FaFingerprint } from "react-icons/fa6";

const Sidebar: React.FC = () => {
    const navList = {
        ADMIN_LAYOUT_PAGES: [
            { name: "DASHBOARD", icon: <RiDashboardHorizontalFill /> },
            { name: "TABLES", icon: <BiTable /> },
            { name: "MAPS", icon: <TbMapSearch /> },
            { name: "CHARTS", icon: <SiSoundcharts /> },
        ],
        AUTH_LAYOUT_PAGES: [
            { name: "LOGIN", icon: <FaFingerprint /> },
            { name: "REGISTER", icon: <SiReacthookform /> },
        ],
    };
    return (
        <>
            <div className="py-4">NOTUS NEXTJS</div>
            <div className="border-b border-slate-400"></div>
            <div className="py-2 text-xs font-semibold tracking-wider">
                ADMIN LAYOUT PAGES
            </div>
            <div>
                <ul>
                    {navList.ADMIN_LAYOUT_PAGES.map((item, ind) => {
                        return (
                            <li key={ind}>
                                <div className="p-3 flex items-center text-gray-700 ">
                                    <span className="px-2 text-xl"> {item.icon}</span>
                                    <span className="text-xs font-semibold tracking-widest">
                                        {item.name}
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="border-b border-slate-400 py-4"></div>
            <div className="py-4 text-xs font-semibold tracking-wider">
                AUTH LAYOUT PAGES
            </div>

            <div>
                <ul>
                    {navList.AUTH_LAYOUT_PAGES.map((item, ind) => {
                        return (
                            <li key={ind}>
                                <div className="p-3 flex items-center text-gray-700 ">
                                    <span className="px-2 text-xl"> {item.icon}</span>
                                    <span className="text-xs font-semibold tracking-widest">
                                        {item.name}
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </>
    );
};
export default Sidebar;
