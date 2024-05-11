import { BsPlus } from 'react-icons/bs';

export default function MedCalenderOverview() {
  return (
    <div className="rounded-md border-2 border-dashed border-stone-300 p-6">
      <p className="text-sm font-medium text-cyan-900">
        Medication calendar - Reminders
      </p>

      <div className={`flex h-[200px] items-center justify-center`}>
        <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-900">
          <BsPlus size={24} /> Add reminders
        </button>
      </div>
    </div>
  );
}
