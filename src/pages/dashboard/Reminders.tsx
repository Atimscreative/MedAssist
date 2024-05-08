import { BsPlus } from "react-icons/bs";
import Header from "../../components/dashboard-components/Header";

const Reminders = () => {
  return (
    <>
      <Header pageTitle="Update and manage your reminder" />
      {/* MEDICATION CALENDER REMINDER */}

      <div className="rounded-md border-2 border-dashed border-stone-300 p-6">
        <p className="text-sm font-medium text-cyan-900">Active Reminders</p>

        <div className={`flex h-[200px] items-center justify-center`}>
          <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-900">
            <BsPlus size={24} /> Add reminders
          </button>
        </div>
      </div>
    </>
  );
};

export default Reminders;
