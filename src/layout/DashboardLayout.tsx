import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/dashboard-components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-[300px_1fr]">
      <SideBar />
      <div className="px-8 py-5">
        <Navbar />

        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
