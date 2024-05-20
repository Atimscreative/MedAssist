import { Outlet } from 'react-router-dom';
import SideBar from '../components/dashboard-components/SideBar';
import MobileNav from '../components/dashboard-components/MobileNav';

const DashboardLayout = () => {
  return (
    <>
      <MobileNav />
      <section className="lg:grid lg:grid-cols-[300px_1fr]">
        <div className="hidden lg:block">
          <SideBar />
        </div>
        <main className="overflow-y-auto px-4 pt-24 lg:h-screen lg:p-6">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default DashboardLayout;
