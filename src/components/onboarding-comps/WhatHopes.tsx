import Button from "../Button";
import { checkboxOptions } from "../../utils/data";

export const WhatHopes = ({ handleNext }: { handleNext: () => void }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleNext();
  };
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="mb-3 text-2xl">
          Alright Chinonye, <br className="hidden sm:block" /> What do you hope
          to do with MedAssist?{" "}
        </h2>
        <p>You can choose for than one</p>
      </div>

      <div>
        <form
          id="hopes"
          className="space-y-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          {checkboxOptions?.map((option: any, index: number) => (
            <label
              htmlFor={option.name}
              key={index}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                name={option.name}
                id={option.name}
                className="form-input h-6 w-6 border-cyan-500 checked:bg-cyan-500 checked:hover:bg-cyan-500 focus:bg-cyan-500 focus:outline-0 focus:ring-0 checked:focus:bg-cyan-500 checked:focus:ring-0"
              />
              <span className="inline-block">{option.label}</span>
            </label>
          ))}

          <Button type={"submit"} children={"Continue"} className={"mt-5"} />
        </form>
      </div>
    </div>
  );
};
