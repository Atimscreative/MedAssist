import Button from "./Button";

type PopupProps = {
  title: string;
  content?: string;
  buttonText: string;
  onClick: () => void;
};

const ModalPopup: React.FC<PopupProps> = ({
  title,
  content,
  buttonText,
  onClick,
}) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center rounded-lg bg-blue-100 px-10 py-12">
        <div className="mb-8 text-center">
          <h3 className="mb-1 text-2xl">{title}</h3>
          {content && <p className="text-balance text-cyan-900">{content}</p>}
        </div>

        <Button
          type="button"
          children={buttonText}
          className={"w-2/3"}
          onclick={onClick}
        />
      </div>
    </div>
  );
};

export default ModalPopup;
