import { Link, NavLink } from "react-router-dom";
import Medassist from "../../assets/medassist.svg";
import {
  Book1,
  Calendar,
  Element3,
  Health,
  HeartAdd,
  Logout,
} from "iconsax-react";
import { BsBell } from "react-icons/bs";

const sideBarLinks = [
  {
    name: "Home",
    icon: <Element3 size={24} />,
    link: "/dashboard",
  },
  {
    name: "Medication Management",
    icon: <Health size={24} />,
    link: "/medication-management",
  },
  {
    name: "Adherence Tracking",
    icon: <Calendar size={24} />,
    link: "/adherence-tracking",
  },
  {
    name: "Reminders",
    icon: <BsBell size={24} />,
    link: "/reminders",
  },
  {
    name: "Educational Resources",
    icon: <Book1 size={24} />,
    link: "/educational-resources",
  },
  {
    name: "Healthcare Providers",
    icon: <HeartAdd size={24} />,
    link: "/healthcare-providers",
  },
];

const SideBar = ({ setIsOpen }: { setIsOpen?: any }) => {
  return (
    <aside className="h-screen w-full bg-blue-100">
      <Link to={"/"} className="inline-block px-8 py-5">
        <img
          src={Medassist}
          alt="MedAssist Logo"
          className="w-[150px] cursor-pointer"
        />
      </Link>
      <div className="mt-6 flex flex-col gap-1 ">
        {sideBarLinks?.map((item: any, index: number) => (
          <NavLink
            key={index}
            to={item.link}
            onClick={() => setIsOpen(false)}
            className={({ isActive, isPending }) =>
              isActive
                ? "flex w-full items-center gap-3 bg-cyan-900 px-8 py-4 font-medium text-white duration-300"
                : isPending
                  ? ""
                  : "flex w-full items-center gap-3 px-8 py-4 font-medium text-cyan-900 duration-300 hover:bg-cyan-700 hover:text-white"
            }
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="mt-32 inline-flex items-center gap-3 px-8 text-cyan-900 duration-300 hover:text-cyan-700">
        <span>
          <Logout size={24} />
        </span>
        <span>Logout</span>
      </div>
    </aside>
  );
};

export default SideBar;
