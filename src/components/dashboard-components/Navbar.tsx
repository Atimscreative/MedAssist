import { BsBell, BsPersonCircle, BsPlus } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center justify-between gap-4">
        {/* <div>
                  h1
              </div> */}
        <label htmlFor="search" className="relative block w-1/2">
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
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-900 px-5 py-3 text-white duration-300 hover:bg-cyan-800">
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
