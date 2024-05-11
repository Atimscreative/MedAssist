import { useState } from 'react';
import Avatar from '../../assets/Rectangle 2.png';
import { Camera } from 'iconsax-react';
import { BsPlus } from 'react-icons/bs';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { openAddDependant } from '../../redux/features/overlay/dependantSlice';

export default function UserOverview() {
  const [imgUrl, setImgUrl] = useState<string>(Avatar);
  const [image, setImage] = useState<File | null>(null);
  const dispatch = useDispatch();
  const currentDate = new Date();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const url = URL.createObjectURL(file as Blob);
    setImgUrl(url);
    setImage(file);
    console.log(file, url, image);
  };
  return (
    <div className="relative rounded-md bg-blue-100 p-6">
      <span className="inline-block rounded bg-white bg-opacity-55 p-2">
        {moment(currentDate).format('MMM. DD, YYYY')}
      </span>

      <div className="mt-6">
        <h1 className="text-2xl">Good day, Chinonye</h1>
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
      <button
        onClick={() => dispatch(openAddDependant())}
        className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-md bg-cyan-900 px-4 py-3 text-sm font-medium text-white duration-300 hover:bg-cyan-800 lg:hidden"
      >
        <BsPlus size={24} /> Add Dependent
      </button>
    </div>
  );
}
