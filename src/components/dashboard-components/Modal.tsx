const Modal = () => {
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
      </div>
    </div>
  );
};

export default Modal;
