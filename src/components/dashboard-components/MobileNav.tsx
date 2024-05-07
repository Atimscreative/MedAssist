import { Calendar, Home2 } from "iconsax-react";
import { BsBell } from "react-icons/bs";
import { CiPill } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  console.log(pathname);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex w-full justify-around gap-6 border-t bg-cyan-900 px-4 py-4 pb-2 lg:hidden">
      <NavLink
        to={"/dashboard"}
        className={({ isActive, isPending }) =>
          isActive
            ? "relative inline-flex flex-col items-center justify-center gap-2 text-sm text-blue-300 duration-300 after:absolute after:-top-4 after:h-1 after:w-[71px] after:bg-blue-300"
            : isPending
              ? ""
              : "inline-flex flex-col items-center justify-center gap-2 text-sm text-neutral-300 duration-300"
        }
      >
        <span>
          <Home2 />
        </span>
        <span>Home</span>
      </NavLink>
      <NavLink
        to={"/medication-management"}
        className={({ isActive, isPending }) =>
          isActive
            ? "relative inline-flex flex-col items-center justify-center gap-2 text-sm text-blue-300 duration-300 after:absolute after:-top-4 after:h-1 after:w-full after:bg-blue-300"
            : isPending
              ? ""
              : "inline-flex flex-col items-center justify-center gap-2 text-sm text-neutral-300 duration-300"
        }
      >
        <span>
          <CiPill size={24} />
        </span>
        <span className={``}>Medication</span>
      </NavLink>
      <NavLink
        to={"/adherence-tracking"}
        className={({ isActive, isPending }) =>
          isActive
            ? "relative inline-flex flex-col items-center justify-center gap-2 text-sm text-blue-300 duration-300 after:absolute after:-top-4 after:h-1 after:w-full after:bg-blue-300"
            : isPending
              ? ""
              : "inline-flex flex-col items-center justify-center gap-2 text-sm text-neutral-300 duration-300"
        }
      >
        <span>
          <Calendar size={24} />
        </span>
        <span className={``}>Adherence</span>
      </NavLink>
      <NavLink
        to={"/reminders"}
        className={({ isActive, isPending }) =>
          isActive
            ? "relative inline-flex flex-col items-center justify-center gap-2 text-sm text-blue-300 duration-300 after:absolute after:-top-4 after:h-1 after:w-full after:bg-blue-300"
            : isPending
              ? ""
              : "inline-flex flex-col items-center justify-center gap-2 text-sm text-neutral-300 duration-300"
        }
      >
        <span>
          <BsBell size={24} />
        </span>
        <span className={``}>Reminder</span>
      </NavLink>
    </nav>
  );
};

export default MobileNav;

//  <NavLink
//    to={"/reminders"}
//    className={({ isActive, isPending }) =>
//      isActive
//        ? "relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-sky-50 bg-opacity-20 p-2 px-4 text-sm text-neutral-300 duration-300"
//        : isPending
//          ? ""
//          : "relative inline-flex items-center gap-2 rounded-full bg-sky-50 bg-opacity-0 p-2 px-4 text-sm text-neutral-300 duration-300"
//    }
//  >
//    <span>
//      <BsBell size={24} />
//    </span>
//    <span
//      className={`inline-block origin-[center_left] duration-300  ease-linear ${pathname === "/reminders" ? "max-w-[100px] opacity-100" : "max-w-0 opacity-0"}`}
//    >
//      Reminder
//    </span>
//  </NavLink>;
