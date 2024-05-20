import {
  durationOptions,
  medForm,
  timeIntervalOptions,
} from '../../../utils/data';
import Button from '../../Button';
import SelectOption from '../../SelectOption';

export default function MedicationInfos() {
  return (
    <div className="p-4">
      <div className="w-full rounded border border-stone-300 p-4">
        <div className="mb-4">
          {/* MEDICATION FORM */}
          <h3 className="mb-1 text-lg font-normal">
            What form is the medication
          </h3>
          <p>Select the form</p>
        </div>

        <>
          <div className="hidden w-full">
            <SelectOption options={medForm} />
          </div>
          <div className=" flex flex-wrap items-center gap-3">
            {medForm.map((option: any, index: number) => (
              <span
                key={index}
                className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white"
              >
                {option.label}
              </span>
            ))}
          </div>
        </>
        <hr className="my-6 border-0 border-t-2 " />
        {/* DURATION OF USAGE */}
        <div className="mb-4">
          <h3 className="mb-1 text-lg font-normal">Duration of usage</h3>
          <p>For how long will you be taking it?</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {durationOptions.map((option: any, index: number) => (
            <span
              key={index}
              className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white"
            >
              {option.label}
            </span>
          ))}
        </div>
        {/* TIME INTERVAL */}
        <div className="my-4 mt-6">
          <h3 className="mb-1 text-lg font-normal">
            How often do you take it?
          </h3>
          <p> What time interval do you use the drug</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {timeIntervalOptions.map((option: any, index: number) => (
            <span
              key={index}
              className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white"
            >
              {option.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          type="button"
          className="rounded-md bg-cyan-900 px-10 py-3 text-sm text-white duration-300 hover:bg-cyan-800"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
