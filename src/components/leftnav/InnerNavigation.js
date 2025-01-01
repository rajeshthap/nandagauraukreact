import { RiDashboard3Line } from "react-icons/ri";
import {
  MdOutlinePublishedWithChanges,
  MdOutlineFormatAlignRight,
} from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { ImFilePdf } from "react-icons/im";
import React, { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { FaRegFileAlt, FaChalkboardTeacher, FaCog } from "react-icons/fa"; // React Icons
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
function InnerNavigation() {
  const [isNavClosed, setIsNavClosed] = useState(false);

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };
  return (
    <div>
      <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
        <nav className="nav">
          <div className="nav-upper-options">
            <div className="nd-user">User: Deepika</div>
            <div className="nd-menu">
              {" "}
              <FaAlignLeft
                className="icn menuicn"
                id="menuicn"
                alt="menu-icon"
                onClick={toggleNav}
              />
            </div>
            {[
              {
                icon: <RiDashboard3Line />,
                label: "Dashboard",
                path: "/DashBoard",
              },
              {
                icon: <MdOutlinePublishedWithChanges />,
                label: "Change",
                path: "/Change",
              },
              {
                icon: <FaRegFileAlt />,
                label: "Request Query",
                path: "/report",
              },
              {
                icon: <MdOutlineFormatAlignRight />,
                label: "Form Statuse",
                path: "/institution",
              },
              {
                icon: <ImFilePdf />,
                label: "नंदा गौरा योजना विषयक शासनादेश",
                path: "/profile",
              },
              {
                icon: <FaCog />,
                label: "Girl Child Form Tutorial",
                path: "/settings",
              },
              {
                icon: <FaChalkboardTeacher />,
                label: "12th Form Tutorial",
                path: "/login", // Path to UserLogin
              },
              {
                icon: <HiOutlineUser />,
                label: "Contact Us",
                path: "/login", // Path to UserLogin
              },
            ].map((option, index) => (
              <Link
                to={option.path}
                className={`nav-option option${index + 1}`}
                key={index}
              >
                <div className="nav-item">
                  <div className="d-flex">
                    <span className="nav-icon">{option.icon}</span>
                    <span className="nav-label">{option.label}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default InnerNavigation;
