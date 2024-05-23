import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface reactChilLayout {
  children: ReactNode;
}

const Layout: React.FC<reactChilLayout> = ({ children }) => {
  return (
    <div className="flex min-h-screen overflow-auto">
      <div className="hidden md:block md:w-52 p-4">
        <Sidebar />
      </div>

      <div className="bg-gray-300 flex-1">
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
