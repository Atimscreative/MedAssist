import { CgSearch } from "react-icons/cg";
import { drugs as medications } from "../../utils/medication";
import { useEffect, useState } from "react";

const Modal = () => {
  const [drugs, setDrugs] = useState(medications);
  const [searchValue, setSearchValue] = useState("");

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
    console.log(searchValue, filteredDrugs);

    if (searchValue) {
      setDrugs(filteredDrugs);
    } else {
      setDrugs(medications);
    }
  }, [searchValue]);

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="w-auto rounded-[20px]  bg-white">
        <div className="rounded-[20px] bg-blue-100 p-6 py-10 pb-3 text-center">
          <h2 className="text-2xl">Add Medication</h2>
          <p>Add to your medications </p>

          <div className="mt-7 h-1 w-full bg-white">
            <div className="h-full w-1/2 bg-black"></div>
          </div>
        </div>

        {/* DRUG LIST */}
        <div className="hidden p-6">
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

          <div className="hide-scroll-bar mt-5 h-[400px] w-full overflow-auto rounded border border-stone-300 px-6">
            <div>
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
        </div>
        {/* STEP 2 */}
        <div className="p-6">
          <div className="w-full rounded border border-stone-300 p-6">
            <div className="mb-4">
              {/* MEDICATION FORM */}
              <h3 className="mb-1 text-lg font-normal">
                What form is the medication
              </h3>
              <p>Select the form</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Pills
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Injection
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Drops
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Powder
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Inhaler
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Others
              </span>
            </div>
            <hr className="my-6 border-0 border-t-2 " />
            {/* DURATION OF USAGE */}
            <div className="mb-4">
              <h3 className="mb-1 text-lg font-normal">Duration of usage</h3>
              <p>For how long will you be taking it?</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                3days
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                5days
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                7days
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Others
              </span>
            </div>
            {/* TIME INTERVAL */}
            <div className="my-4 mt-6">
              <h3 className="mb-1 text-lg font-normal">
                How often do you take it?
              </h3>
              <p> What time interval do you use the drug</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Once daily
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Twice daily
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Thrice daily
              </span>
              <span className="inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white">
                Others
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="rounded-md bg-cyan-900 px-10 py-3 text-sm text-white duration-300 hover:bg-cyan-800">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
