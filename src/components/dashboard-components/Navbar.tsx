import { BsBell, BsPersonCircle, BsPlus } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import Medassist from "../../assets/medassist.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-[999] w-full border-b bg-white px-4 py-4 lg:bg-transparent">
      <div className="flex items-center justify-between gap-4">
        <Link to={"/"} className="inline-block">
          <img
            src={Medassist}
            alt="MedAssist Logo"
            className="w-[150px] cursor-pointer"
          />
        </Link>
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
          <button className="hidden items-center justify-center gap-2 rounded-md bg-cyan-900 px-5 py-3 text-white duration-300 hover:bg-cyan-800 lg:inline-flex">
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
  );
};

export default Navbar;
