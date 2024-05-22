import { BiTable } from "react-icons/bi";
import { FaFingerprint } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { SiReacthookform, SiSoundcharts } from "react-icons/si";
import { TbMapSearch } from "react-icons/tb";

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
export default navList;
