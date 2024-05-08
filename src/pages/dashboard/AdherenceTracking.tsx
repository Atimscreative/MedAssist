import { BsPlus } from "react-icons/bs";
import Header from "../../components/dashboard-components/Header";

const AdherenceTracking = () => {
  return (
    <>
      <Header pageTitle="Check  your adherence tracking" />
      <div className="rounded-md border-2 border-dashed border-stone-300 p-6">
        <p className="text-sm font-medium text-cyan-900">No adherence record</p>

        <div className={`flex items-center justify-center pb-9 pt-12`}>
          <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-900">
            <BsPlus size={24} /> Add a medication
          </button>
        </div>
      </div>
    </>
  );
};

export default AdherenceTracking;
