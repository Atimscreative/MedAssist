import { BsPlus } from 'react-icons/bs';
import Header from '../../components/dashboard-components/Header';
import { useState } from 'react';
import AddMedication from '../../components/dashboard-components/modals/AddMedication';

const steps = ['add medications', 'usage'];

const MedicationManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Header pageTitle="Manage your medication" />
      {/* MEDICATION MANAGEMENT OVERVIEW */}
      <div className="rounded-md border-2 border-dashed border-stone-300 p-6">
        <p className="text-sm font-medium text-cyan-900">
          No medication record
        </p>

        <div className={`flex items-center justify-center pb-9 pt-12`}>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-900"
          >
            <BsPlus size={24} /> Add a medication
          </button>
        </div>
      </div>

      <AddMedication setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default MedicationManagement;
