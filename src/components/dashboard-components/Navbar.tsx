import { BsBell, BsPersonCircle, BsPlus, BsX } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import Medassist from "../../assets/medassist.svg";
import { Link } from "react-router-dom";
import { HambergerMenu } from "iconsax-react";
import SideBar from "./SideBar";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { openAddDependant } from "../../redux/features/overlay/dependantSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <header className="fixed left-0 top-0 z-[90] w-full border-b bg-white px-4 py-4 lg:static lg:border-none lg:bg-transparent lg:p-0">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 lg:hidden">
            <span
              className="cursor-pointer text-cyan-900"
              onClick={() => setIsOpen((prev: any) => !prev)}
            >
              {isOpen ? <BsX size={32} /> : <HambergerMenu size={32} />}
            </span>{" "}
            <Link to={"/"}>
              <img
                src={Medassist}
                alt="MedAssist Logo"
                className="w-[150px] cursor-pointer"
              />
            </Link>
          </div>

          <label htmlFor="search" className="relative hidden w-1/2 lg:block">
            <input
              type="text"
              name="search"
              id="search"
              className="form-input w-full rounded-md border border-neutral-500 px-4 py-3 placeholder:text-stone-300 focus:border-cyan-900 focus:ring-cyan-900"
              placeholder="Search for anything"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-cyan-900">
              <CgSearch size={24} />
            </span>
          </label>

          <div className="flex items-center gap-6">
            <button
              onClick={() => dispatch(openAddDependant())}
              className="hidden items-center justify-center gap-2 rounded-md bg-cyan-900 px-5 py-3 text-white duration-300 hover:bg-cyan-800 lg:inline-flex"
            >
              <BsPlus size={24} /> Add Dependant
            </button>
            <span className="relative inline-block cursor-pointer text-cyan-900 duration-300 hover:text-cyan-800">
              <BsBell size={32} />
              <span className="absolute right-0.5 top-1 inline-block h-3 w-3 rounded-full bg-red-600"></span>
            </span>

            <span className="relative inline-block cursor-pointer text-cyan-900 duration-300 hover:text-cyan-800">
              <BsPersonCircle size={32} />
            </span>
          </div>
        </div>
      </header>
      <div
        onClick={() => setIsOpen(false)}
        className={twMerge(
          "fixed top-0 z-40 h-full w-full bg-black bg-opacity-45 duration-300 lg:hidden",
          isOpen ? "left-0" : "-left-full",
        )}
      >
        <div className="w-[300px]" onClick={(e) => e.stopPropagation()}>
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Navbar;
