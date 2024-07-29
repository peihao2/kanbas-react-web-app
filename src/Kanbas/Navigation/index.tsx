import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoHelpCircleOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaLaptop, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { MdGroups2 } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import "./KanbasNavigation.css";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Groups", path: "/Kanbas/Groups", icon: MdGroups2 },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "History", path: "/Kanbas/History", icon: LuHistory },
    { label: "Studio", path: "/Kanbas/Studio", icon: FaLaptop },
    { label: "Help", path: "/Kanbas/Help", icon: IoHelpCircleOutline },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div className="kanbas-container">
      <div
        id="wd-kanbas-navigation"
        className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
        style={{ width: 120 }}
      >
        <span style={{ color: "white" }}>{pathname}</span>

        <a
          id="wd-account-link"
          target="_blank"
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0"
        >
          <img src="/images/NEU.png" width="75px" />
        </a>

        <Link
          key="/Kanbas/Account"
          to="/Kanbas/Account"
          className={`list-group-item text-center border-0 bg-black
${
  pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"
}`}
        >
          <FaRegCircleUser
            className={`fs-1 ${
              pathname.includes("Account") ? "text-danger" : "text-white"
            }`}
          />
          <br />
          Account
        </Link>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`list-group-item bg-black text-center border-0
${
  pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"
}`}
          >
            {link.icon({ className: "fs-1 text-danger" })}
            <br />
            {link.label}
          </Link>
        ))}
      </div>

      <div className="kanbas-content">{/* Main content goes here */}</div>
    </div>
  );
}
