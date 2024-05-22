import React from "react";
import navList from "@/config/navConfig";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="hidden md:block py-4">NOTUS NEXTJS</div>
      <div className="hidden md:block border-b border-slate-200"></div>
      <div className="py-2 text-xs font-semibold tracking-wider">
        ADMIN LAYOUT PAGES
      </div>
      <div>
        <ul>
          {navList.ADMIN_LAYOUT_PAGES.map((item, ind) => {
            return (
              <li key={ind}>
                <div className="p-3 flex items-center text-gray-800 nav-hover">
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
      <div className="border-b border-slate-200 py-4"></div>
      <div className="py-4 text-xs font-semibold tracking-wider">
        AUTH LAYOUT PAGES
      </div>

      <div>
        <ul>
          {navList.AUTH_LAYOUT_PAGES.map((item, ind) => {
            return (
              <li key={ind}>
                <div className="p-3 flex items-center text-gray-800 nav-hover">
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
