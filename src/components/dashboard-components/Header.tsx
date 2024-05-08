import { BsBell, BsPersonCircle } from "react-icons/bs";

const Header = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className=" mb-5 hidden items-center justify-between border-b  border-neutral-200 pb-4 lg:flex">
      <h1 className="text-2xl">{pageTitle}</h1>
      <div className="flex items-center gap-6">
        <span className="relative inline-block cursor-pointer text-cyan-900 duration-300 hover:text-cyan-800">
          <BsBell size={32} />
          <span className="absolute right-0.5 top-1 inline-block h-3 w-3 rounded-full bg-red-600"></span>
        </span>
        <span className="relative inline-block cursor-pointer text-cyan-900 duration-300 hover:text-cyan-800">
          <BsPersonCircle size={32} />
        </span>
      </div>
    </div>
  );
};

export default Header;
