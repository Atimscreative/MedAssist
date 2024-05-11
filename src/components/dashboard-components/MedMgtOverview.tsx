import { BsPlus } from 'react-icons/bs';

export default function MedMgtOverview() {
  return (
    <div className="rounded-md border-2 border-dashed border-stone-300 p-6">
      <p className="text-sm font-medium text-cyan-900">
        Medication management overview
      </p>

      <div className={`flex items-center justify-center pb-9 pt-12`}>
        <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-900">
          <BsPlus size={24} /> Add a medication
        </button>
      </div>
    </div>
  );
}
