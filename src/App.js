import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons-kit";
import "font-awesome/css/font-awesome.min.css";
import { useLocation } from "react-router-dom";
import "../src/custom/style.css";
import UserDashboard from "./components/leftnav/UserDashboard";
import NavBar from "../src/components/topnav/NavBar";
import Footer from "../src/components/footer/Footer";
import Home from "../src/components/pages/Home";
import HomePage from "../src/components/pages/HomePage";
import UserLogin from "./components/pages/UserLogin";
import OfficialWebsite from "../src/components/pages/OfficialWebsite";
import ModalOne from "./components/modal/ModalOne";
import AdminBanner from "./components/pages/AdminBanner";
import ContactUs from "./components/pages/ContactUs";
import DashBoard from "./components/leftnav/DashBoard";
import Change from "./components/leftnav/Change";
import NandaStepOne from "../src/components/leftnav/NandaGoraForms/RegistrationForms/NandaStepOne";
import NandaStepTwo from "../src/components/leftnav/NandaGoraForms/RegistrationForms/NandaStepTwo";
import NandaStepThree from "../src/components/leftnav/NandaGoraForms/RegistrationForms/NandaStepThree";
import LoginFooter from "./components/footer/LoginFooter";
import InnerNavigation from "./components/leftnav/InnerNavigation";
import GirlsBornStep from "./components/leftnav/NandaGoraForms/RegistrationForms/GirlsBornStep";

function App() {
  const location = useLocation();

 
  const hiddenPaths = new Set(["/UserDashboard", "/DashBoard", "/Change","/NandaStepOne","/NandaStepTwo","/NandaStepThree"]); // Correct absolute paths
  const hiddenFooter1 = new Set(["/UserDashboard", "/DashBoard", "/Change","/NandaStepOne","/NandaStepTwo","/NandaStepThree"]); // Correct absolute paths
  const shouldHideNavbar = hiddenPaths.has(location.pathname);
  const shouldHideFooter1 =  hiddenFooter1.has(location.pathname);

  const buttons = [
    "UserDashboard",
  ]
  return (
    <div>
      {/* Conditionally render NavBar */}
      {!shouldHideNavbar && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/OfficialWebsite" element={<OfficialWebsite />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/AdminBanner" element={<AdminBanner />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/NandaStepOne" element={<NandaStepOne />} />
        <Route path="/NandaStepTwo" element={<NandaStepTwo />} />
        <Route path="/NandaStepThree" element={<NandaStepThree />} />
        <Route path="/DashBoard" element={<DashBoard />} /> {/* Correct path */}
        <Route path="/UserDashboard" element={<UserDashboard />} /> {/* Correct path */}
        <Route path="/Change" element={<Change />} /> {/* Correct path */}
        <Route path="/InnerNavigation" element={<InnerNavigation/>} /> {/* Correct path */}
        <Route path="/GirlsBornStep" element={<GirlsBornStep/>} /> {/* Correct path */}
        <Route path="/ModalOne" element={<ModalOne />} />
       
      </Routes>

     
      {!shouldHideFooter1 && <LoginFooter />}
    </div>
  );
}

export default App;
