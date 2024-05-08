import { useState } from "react";
import Avatar from "../../assets/Rectangle 2.png";
import { Camera } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../Button";
import {
  closeAddDependant,
  // openAddDependant,
} from "../../redux/features/overlay/dependantSlice";

const AddDependant = () => {
  const [imgUrl, setImgUrl] = useState<string>(Avatar);
  const [image, setImage] = useState<File | null>(null);
  const addDependant = useSelector(
    (state: RootState) => state.dependant.addDependant,
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const url = URL.createObjectURL(file as Blob);
    setImgUrl(url);
    setImage(file);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(image);
  };
  return (
    <div
      className={`fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-black bg-opacity-50 px-4 ${addDependant ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="relative w-[500px] rounded-[20px] bg-white">
        <div className="rounded-[20px] bg-blue-100 p-6 py-16 pt-11 text-center">
          <h2 className="mb-2 text-2xl">Add Dependant</h2>
          <p className="text-sm">Manage meds for your family members</p>
        </div>

        <form
          id="dependant"
          className="px-6 pb-6"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="-mt-10 flex justify-center">
            <div className="relative">
              <img
                src={imgUrl}
                alt="avatarDep"
                className="h-[100px] w-[100px] rounded-full object-cover object-center "
              />
              <label
                htmlFor="avatarDep"
                aria-label="avatarDep"
                className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-500"
              >
                <Camera size={20} />
              </label>
            </div>

            <input
              type="file"
              name="avatarDep"
              id="avatarDep"
              className="hidden"
              accept="image/png, image/jpeg, image/webp"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="firstName" className="block">
              <span className="mb-1 inline-block font-semibold">
                First name
              </span>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-input w-full rounded-md border border-neutral-300 focus:border-cyan-900 focus:ring-cyan-900"
              />
            </label>
            <label htmlFor="lastName" className="block">
              <span className="mb-1 inline-block font-semibold">Last name</span>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-input w-full rounded-md border border-neutral-300 focus:border-cyan-900 focus:ring-cyan-900"
              />
            </label>
            <label htmlFor="relationship" className="block">
              <span className="mb-1 inline-block font-semibold">
                Relationship with dependant
              </span>
              <select
                name="relationship"
                id="relationship"
                className="form-select w-full rounded-md border border-neutral-300 focus:border-cyan-900 focus:ring-cyan-900"
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Prefer not to say</option>
              </select>
            </label>
            <label htmlFor="gender" className="block">
              <span className="mb-1 inline-block font-semibold">
                Gender of dependant
              </span>
              <select
                name="gender"
                id="gender"
                className="form-select w-full rounded-md border border-neutral-300 focus:border-cyan-900 focus:ring-cyan-900"
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Prefer not to say</option>
              </select>
            </label>
            <label htmlFor="age" className="block">
              <span className="mb-1 inline-block font-semibold">
                Age of dependant
              </span>
              <input
                type="number"
                name="age"
                id="age"
                className="form-input w-full rounded-md border border-neutral-300 focus:border-cyan-900 focus:ring-cyan-900"
              />
            </label>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Button
              type="button"
              children={"Cancel"}
              className={
                "w-fit border border-red-600 bg-transparent px-5 py-2 text-red-600 hover:bg-red-600 hover:text-white"
              }
              onclick={() => dispatch(closeAddDependant())}
            />
            <Button
              type="submit"
              children={"Done"}
              className={"w-fit px-5 py-2"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDependant;
