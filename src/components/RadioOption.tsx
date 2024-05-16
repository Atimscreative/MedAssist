import { twMerge } from 'tailwind-merge';

type RadioProps = {
  name: string;
  label: string;
  onChange: any;
  value: any;
  isChecked: boolean;
};

const RadioOption: React.FC<RadioProps> = ({
  name,
  onChange,
  label,
  value,
  isChecked,
}) => {
  return (
    <label
      className={twMerge(
        'inline-block cursor-pointer rounded-[50px] border-2 border-cyan-900 px-6 py-2 text-sm font-semibold duration-300 hover:bg-cyan-900 hover:text-white',
        isChecked && 'bg-cyan-900 text-white',
      )}
    >
      <input
        type="radio"
        name={name}
        id={name}
        onChange={onChange}
        className="hidden"
        value={value?.value}
      />
      <span className="whitespace-nowrap text-sm">{label}</span>
    </label>
  );
};

export default RadioOption;
