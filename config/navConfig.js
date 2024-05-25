import { BiTable } from "react-icons/bi";
import { FaFingerprint } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { SiReacthookform, SiSoundcharts } from "react-icons/si";
import { TbMapSearch } from "react-icons/tb";

const navList = {
  ADMIN_LAYOUT_PAGES: [
    { name: "DASHBOARD", path: "/", icon: <RiDashboardHorizontalFill /> },
    { name: "REPORT", path: "/report", icon: <BiTable /> },
    { name: "MAPS", path: "/maps", icon: <TbMapSearch /> },
    { name: "CHARTS", path: "/charts", icon: <SiSoundcharts /> },
  ],
  AUTH_LAYOUT_PAGES: [
    { name: "LOGIN", path: "/login", icon: <FaFingerprint /> },
    { name: "REGISTER", path: "/register", icon: <SiReacthookform /> },
  ],
};
export default navList;
