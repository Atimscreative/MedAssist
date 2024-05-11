import { useState } from 'react';
import Avatar from '../../../assets/Rectangle 2.png';
import { Camera, InfoCircle } from 'iconsax-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Button from '../../Button';
import {
  closeAddDependant,
  // openAddDependant,
} from '../../../redux/features/overlay/dependantSlice';
import { relationship } from '../../../utils/data';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { twMerge } from 'tailwind-merge';

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required('Please enter your firstname'),
    lastName: yup.string().required('Please enter your lastname'),
    relationship: yup.string().required('Select your relationship'),
    gender: yup.string().required('Select your gender'),
    age: yup
      .number()
      .typeError('Age must be a number')
      // .positive('Age must be a positive number')
      .integer('Age must be an integer')
      .required('Age is required'),
  })
  .required();

const AddDependant = () => {
  const [imgUrl, setImgUrl] = useState<string>(Avatar);
  const [image, setImage] = useState<File | null>(null);
  const addDependant = useSelector(
    (state: RootState) => state.dependant.addDependant,
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const url = URL.createObjectURL(file as Blob);
    setImgUrl(url);
    setImage(file);
  };

  const handleCancel = () => {
    dispatch(closeAddDependant());
    reset();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const onSubmit = (data: any) => {
    // e.preventDefault();
    console.log(image, data);
    handleCancel();
    reset();
  };
  return (
    <div
      className={`hide-scroll-bar fixed left-0 top-0 z-[100] flex h-full w-full items-start justify-center overflow-y-auto bg-black bg-opacity-50 px-4 ${addDependant ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div className="hide-scroll-bar h-min overflow-y-auto py-2 lg:py-8">
        <div className="relative rounded-[20px] bg-white sm:w-[500px]">
          <div className="rounded-[20px] bg-blue-100 p-6 py-16 pt-11 text-center">
            <h2 className="mb-2 text-2xl">Add Dependant</h2>
            <p className="text-sm">Manage meds for your family members</p>
          </div>

          <form
            id="dependant"
            className="px-6 pb-6"
            onSubmit={handleSubmit(onSubmit)}
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

            <div className="space-y-3 sm:mt-8">
              <label htmlFor="firstName" className="block">
                <span className="mb-1 inline-block font-semibold">
                  First name
                </span>
                <input
                  {...register('firstName')}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={twMerge(
                    'form-input w-full rounded-md border border-neutral-300 focus:border-cyan-900 focus:ring-cyan-900',
                    errors?.firstName &&
                      'border-red-600 focus:border-red-600 focus:ring-red-600',
                  )}
                />

                {errors.firstName?.message && (
                  <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
                    <InfoCircle size={18} />
                    {errors.firstName?.message}
                  </p>
                )}
              </label>
              <label htmlFor="lastName" className="block">
                <span className="mb-1 inline-block font-semibold">
                  Last name
                </span>
                <input
                  {...register('lastName')}
                  type="text"
                  name="lastName"
                  id="lastName"
                  className={twMerge(
                    'form-input w-full rounded-md border border-neutral-300 focus:border-cyan-900 focus:ring-cyan-900',
                    errors?.lastName &&
                      'border-red-600 focus:border-red-600 focus:ring-red-600',
                  )}
                />

                {errors.lastName?.message && (
                  <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
                    <InfoCircle size={18} />
                    {errors.lastName?.message}
                  </p>
                )}
              </label>
              <label htmlFor="relationship" className="block">
                <span className="mb-1 inline-block font-semibold">
                  Relationship with dependant
                </span>
                <select
                  {...register('relationship')}
                  name="relationship"
                  id="relationship"
                  className={twMerge(
                    'form-input w-full rounded-md border border-neutral-300 focus:border-cyan-900 focus:ring-cyan-900',
                    errors?.relationship &&
                      'border-red-600 focus:border-red-600 focus:ring-red-600',
                  )}
                >
                  <option value=""></option>
                  {relationship.map((rel: any, index: number) => (
                    <option key={index} value={rel.toLowerCase()}>
                      {rel}
                    </option>
                  ))}
                </select>
                {errors.relationship?.message && (
                  <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
                    <InfoCircle size={18} />
                    {errors.relationship?.message}
                  </p>
                )}
              </label>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label htmlFor="gender" className="block">
                  <span className="mb-1 inline-block font-semibold">
                    Gender of dependant
                  </span>
                  <select
                    {...register('gender')}
                    name="gender"
                    id="gender"
                    className={twMerge(
                      'form-input w-full rounded-md border border-neutral-300 focus:border-cyan-900 focus:ring-cyan-900',
                      errors?.gender &&
                        'border-red-600 focus:border-red-600 focus:ring-red-600',
                    )}
                  >
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Prefer not to say</option>
                  </select>

                  {errors.gender?.message && (
                    <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
                      <InfoCircle size={18} />
                      {errors.gender?.message}
                    </p>
                  )}
                </label>
                <label htmlFor="age" className="block">
                  <span className="mb-1 inline-block font-semibold">
                    Age of dependant
                  </span>
                  <input
                    {...register('age')}
                    type="number"
                    name="age"
                    id="age"
                    className={twMerge(
                      'form-input w-full rounded-md border border-neutral-300 focus:border-cyan-900 focus:ring-cyan-900',
                      errors?.age &&
                        'border-red-600 focus:border-red-600 focus:ring-red-600',
                    )}
                  />

                  {errors.age?.message && (
                    <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
                      <InfoCircle size={18} />
                      {errors.age?.message}
                    </p>
                  )}
                </label>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Button
                type="button"
                children={'Cancel'}
                className={
                  'w-fit border border-red-600 bg-transparent px-5 py-2 text-red-600 hover:bg-red-600 hover:text-white'
                }
                onclick={handleCancel}
              />
              <Button
                type="submit"
                children={'Done'}
                className={'w-fit px-5 py-2'}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDependant;
