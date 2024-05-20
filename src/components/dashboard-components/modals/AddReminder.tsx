import { twMerge } from 'tailwind-merge';

type AddReminderProps = {
  isOpen: boolean;
  setIsOpen: any;
};

const AddReminder: React.FC<AddReminderProps> = ({ isOpen }) => {
  return (
    <div
      className={twMerge(
        'hide-scroll-bar fixed left-0 top-0 z-[100] flex h-full w-full items-start justify-center overflow-y-auto bg-black bg-opacity-50 px-4',
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0',
      )}
    >
      <div className="hide-scroll-bar h-min overflow-y-auto py-2 lg:py-8">
        <div className="relative rounded-[20px] bg-white sm:w-[500px]">
          <div className="rounded-[20px] bg-blue-100 p-6 py-16 pt-11 text-center">
            <h2 className="mb-2 text-2xl">Add Medications</h2>
            <p className="text-sm">Manage meds for your family members</p>
          </div>
          <div className={`h-1 w-full bg-neutral-300`}>
            <div className={twMerge('h-1 w-10 bg-black')}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReminder;
