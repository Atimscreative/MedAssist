import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard-components/SideBar";
import Navbar from "../components/dashboard-components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="lg:grid lg:grid-cols-[300px_1fr]">
      <div className="hidden lg:block">
        <SideBar />
      </div>{" "}
      <div className="px-4 py-5 lg:px-8">
        <div className="block lg:hidden">
          <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
