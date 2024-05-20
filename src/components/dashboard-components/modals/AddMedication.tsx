import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { drugs as medications } from '../../../utils/medication';
import { CgSearch } from 'react-icons/cg';
import Button from '../../Button';
import SelectOption from '../../SelectOption';
import {
  durationOptions,
  medForm,
  timeIntervalOptions,
} from '../../../utils/data';
import MedicationInfos from './Medication';
import EachElement from '../../../utils/helper/EachElement';

type AddMedProps = {
  isOpen: boolean;
  setIsOpen: any;
};

const MedicationList = ({ onClick }: { onClick: any }) => {
  const [drugs, setDrugs] = useState(medications);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  useEffect(() => {
    const dr = drugs.slice();
    const filteredDrugs = dr
      .slice()
      .filter((item: any) =>
        item.toLowerCase().includes(searchValue.toLowerCase()),
      );
    if (searchValue) {
      setDrugs(filteredDrugs);
    } else {
      setDrugs(medications);
    }
  }, [searchValue]);
  return (
    <div className="p-6">
      <label htmlFor="drugs" className="relative block">
        <input
          type="text"
          id="drugs"
          name="drugs"
          className="form-input w-full rounded-md border border-stone-300 px-4 py-3 placeholder:text-stone-300 focus:border-cyan-900 focus:ring-cyan-900"
          placeholder="Search medication here"
          value={searchValue}
          onChange={(e) => handleChange(e)}
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-cyan-900">
          <CgSearch size={24} />
        </span>
      </label>

      <div className="hide-scroll-bar mt-5 h-[300px] w-full overflow-auto rounded border border-stone-300 px-6">
        <div>
          <EachElement
            of={drugs}
            render={(drug: any, index: number) => (
              <div
                key={index}
                className="border-b py-4 capitalize text-neutral-500 last:border-none"
              >
                {drug}
              </div>
            )}
          />
          {drugs.map((drug: any) => (
            <div
              key={drug}
              className="border-b py-4 capitalize text-neutral-500 last:border-none"
            >
              {drug}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <Button
          type="button"
          className={twMerge(
            'w-fit border border-red-600 bg-transparent px-6 py-2.5 text-red-600 hover:bg-red-600 hover:text-white',
          )}
        >
          Cancel
        </Button>
        <Button
          type="button"
          onclick={onClick}
          className={twMerge('w-fit px-6 py-2.5')}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const AddMedication: React.FC<AddMedProps> = ({ isOpen, setIsOpen }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleDone = () => {
    setIsOpen(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <MedicationList onClick={nextStep} />;
      case 1:
        return <MedicationInfos />;
    }
  };

  return (
    <div
      className={twMerge(
        'hide-scroll-bar fixed left-0 top-0 z-[100] flex h-full w-full items-start justify-center overflow-y-auto bg-black bg-opacity-50 px-4',
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0',
      )}
    >
      <div className="hide-scroll-bar h-min w-full overflow-y-auto py-2 lg:py-8">
        <div className="relative rounded-[20px] bg-white sm:w-[500px] md:w-full">
          <div className="rounded-[20px] bg-blue-100 p-6 py-6 text-center md:pt-11">
            <h2 className="mb-2 text-2xl">Add Medications</h2>
            <p className="text-sm">Add to your medications</p>

            <div className={`mt-7 h-1 w-full bg-blue-50`}>
              <div
                className={twMerge(
                  'h-1 w-1/2 bg-black',
                  currentStep === 1 && 'w-full',
                )}
              ></div>
            </div>
          </div>
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default AddMedication;
