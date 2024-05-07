import { twMerge } from "tailwind-merge";

type ButtonProps = {
  type: "submit" | "reset" | "button";
  children: React.ReactNode;
  onclick?: () => void;
  className?: string | any;
};

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onclick,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={twMerge(
        "w-full cursor-pointer rounded-md bg-cyan-900 px-4 py-3 text-white hover:bg-cyan-800",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
