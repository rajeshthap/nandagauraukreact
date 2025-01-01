
import UKLogon from "../../assets/images/UKLogo.png";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaAlignLeft } from "react-icons/fa";

import "../../assets/css/LeftNav.css";
import Accordion from "react-bootstrap/Accordion";

import "@fortawesome/fontawesome-free"; // Font Awesome library
import { RiDashboard3Line } from "react-icons/ri";
import {
  MdOutlinePublishedWithChanges,
  MdOutlineFormatAlignRight,
} from "react-icons/md";
import { ImFilePdf } from "react-icons/im";
import { HiOutlineUser } from "react-icons/hi";

import { Row, Col, Card, Form } from "react-bootstrap";
import Nandonline from "../../assets/images/onlinenanda.png";
import OnlineImage from "../../assets/images/vig_2024.jpg";
import KanyaBorn from "../../assets/images/kanyaborn.png";
import Girls12th from "../../assets/images/girls12th.png";
import AnathAshrm from "../../assets/images/anathashrm.png";
import PdfFile from "../../assets/images/12thpass.png";
import "../../assets/css/HomePage.css";
import ModalOne from "../modal/ModalOne";
import BirthInfo from "../modal/BirthInfo";
import Girls12thPass from "../modal/Girls12thPass";
import Footer from "../footer/Footer";
import Orphanage from "../modal/Orphanage";
import {
  FaAdjust,
  FaRegFileAlt,
  FaChalkboardTeacher,
  FaBuilding,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaLongArrowAltUp,
} from "react-icons/fa"; // React Icons
import DashboardIndex from "./DashboardIndex";
import React, { useState } from "react";
import { LuLogOut } from "react-icons/lu";
function DashHeader() {
  const [isNavClosed, setIsNavClosed] = useState(false);
  
    const toggleNav = () => {
      setIsNavClosed(!isNavClosed);
    };
  return (
    <div>

<header>
          
          <div className="logosec">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
              className="icn menuicn"
              id="menuicn"
              alt="menu-icon"
              onClick={toggleNav}
            />

            <Link to="#" className="logo-page">
              <img src={UKLogon} alt="logo" className="logo" />
            </Link>
            <div className="nd-title">
              <span className="nd-subtitle">
                उत्तराखंड सरकार | Gov.t of Uttarakhand{" "}
              </span>
              <span className="subtitle">
                महिला सशक्तिकरण एवं बाल विकास विभाग उत्तराखंड
              </span>
            </div>
          </div>

          <div className="message">
            <div className="nd-msg">
              <span>User:</span> Deepika
            </div>
            <div className="dp" alt="logout" title="Click to logout">
              <LuLogOut />
            </div>
          </div>
        </header>
       
    </div>
  )
}

export default DashHeader;