import { BsPlus } from 'react-icons/bs';
import Header from '../../components/dashboard-components/Header';
import { useState } from 'react';
import AddMedication from '../../components/dashboard-components/modals/AddMedication';
import { Edit, Trash } from 'iconsax-react';

const steps = ['add medications', 'usage'];

const MedicationManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header pageTitle="Manage your medication" />
      {/* MEDICATION DOCUMENTS */}
      <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#D6F3E3] p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="inline-flex items-center gap-3">
              <h3 className="text-xl font-medium">Medication document</h3>
              <span className="cursor-pointer">
                <Edit size={20} />
              </span>
            </div>
            <span className="cursor-pointer">
              <Trash size={20} />
            </span>
          </div>

          <ul className="space-y-2">
            <li>
              <span>Patient name: </span>
              <span className="capitalize">Chinoye</span>
            </li>
            <li>
              <span>Nature of illness: </span>
              <span className="capitalize">Headache</span>
            </li>
            <li>
              <span>Medication form: </span>
              <span className="capitalize">Pills</span>
            </li>
            <li>
              <span>Medication name: </span>
              <span className="capitalize">Paracetamol</span>
            </li>
            <li>
              <span>Dosage: </span>
              <span>Three times a day</span>
            </li>
            <li>
              <span>Dosage time: </span>
              <span>08:00 | 15:00 | 20:00</span>
            </li>
          </ul>

          <textarea
            name="note"
            id="note"
            className="form-textarea mt-4 h-[100px] w-full resize-none rounded-md border border-neutral-300 bg-white p-3 disabled:text-neutral-400"
            disabled
            value="Use medications immediately after food with a glass of water."
          ></textarea>
        </div>
      </div>

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
