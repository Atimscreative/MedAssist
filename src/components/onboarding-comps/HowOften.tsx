import Button from "../Button";
import { checkboxOptions2 } from "../../utils/data";

export const HowOften = ({ handleClick }: { handleClick: () => void }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="mb-3 text-2xl">How often do you take it?</h2>
        <p>Let’s help you set that reminder</p>
      </div>

      <div>
        <form
          id="hopes"
          className="space-y-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          {checkboxOptions2?.map((option: any, index: number) => (
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

          <Button type={"submit"} children={"Done"} className={"mt-5"} />
        </form>
      </div>
    </div>
  );
};
