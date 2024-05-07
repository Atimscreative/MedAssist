import { useState } from "react";
import Avatar from "../../assets/Rectangle 2.png";
import { Camera } from "iconsax-react";
import { BsPlus } from "react-icons/bs";

const Dashboard = () => {
  const [imgUrl, setImgUrl] = useState<string>(Avatar);
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const url = URL.createObjectURL(file as Blob);
    setImgUrl(url);
    setImage(file);
    console.log(file, url, image);
  };
  return (
    <>
      <section className="w-full pb-20 pt-10 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-x-8 lg:pb-0 lg:pt-0">
        <div className="space-y-6">
          {/* USER GREETINGS */}
          <div className="relative rounded-md bg-blue-100 p-6">
            <span className="inline-block rounded bg-white bg-opacity-55 p-2">
              Nov. 22, 2024
            </span>

            <div className="mt-6">
              <h1 className="text-2xl font-bold">Good day, Chinonye</h1>
              <p className="text-cyan-900">What would you like to do today?</p>
            </div>

            <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 sm:inline-block">
              <img
                src={imgUrl}
                alt="avatar"
                className="h-[100px] w-[100px] rounded-full object-cover object-center "
              />
              <label
                htmlFor="avatar"
                aria-label="avatar"
                className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-500"
              >
                <Camera size={20} />
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                className="hidden"
                accept="image/png, image/jpeg, image/webp"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-md bg-cyan-900 px-4 py-3 text-sm font-medium text-white duration-300 hover:bg-cyan-800">
              <BsPlus size={24} /> Add Dependent
            </button>
          </div>

          {/* MEDICATION MANAGEMENT OVERVIEW */}
          <div className="rounded-md border-2 border-dashed border-stone-300 p-6">
            <p className="text-sm font-medium text-cyan-900">
              Medication management overview
            </p>

            <div className={`flex items-center justify-center pb-9 pt-12`}>
              <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-900">
                <BsPlus size={24} /> Add a medication
              </button>
            </div>
          </div>

          {/* MEDICATION CALENDER REMINDER */}
          <div className="rounded-md border-2 border-dashed border-stone-300 p-6">
            <p className="text-sm font-medium text-cyan-900">
              Medication calendar - Reminders
            </p>

            <div className={`flex h-[200px] items-center justify-center`}>
              <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-900">
                <BsPlus size={24} /> Add reminders
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-y-6 lg:mt-0">
          <div className="flex-grow rounded-md border-2 border-dashed border-stone-300 p-6">
            <p className="text-sm font-medium text-cyan-900">
              Adherence tracking
            </p>

            <div className={`flex h-[200px] items-center justify-center`}>
              <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-900">
                <BsPlus size={24} /> Add tracking details
              </button>
            </div>
          </div>
          <div className="flex-grow rounded-md border-2 border-dashed border-stone-300 p-6">
            <p className="text-sm font-medium text-cyan-900">Reminder notes</p>

            <div className={`flex h-[200px] items-center justify-center`}>
              <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-900">
                <BsPlus size={24} /> Add notes here
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <Modal /> */}
      {/* <ModalPopup
        title={""}
        buttonText={""}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      /> */}
    </>
  );
};

export default Dashboard;
