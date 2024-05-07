import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard-components/SideBar";
import Navbar from "../components/dashboard-components/Navbar";
import MobileNav from "../components/dashboard-components/MobileNav";

const DashboardLayout = () => {
  return (
    <div className="lg:grid lg:grid-cols-[300px_1fr]">
      <SideBar />
      <MobileNav />
      <div className="px-4 py-5 lg:px-8">
        <Navbar />

        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
