import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import OnbordingLayout from "../../layout/OnbordingLayout";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setVisible((prev: any) => !prev);
  };

  const toggleVisibility2 = () => {
    setVisible2((prev: any) => !prev);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/onboarding");
  };

  return (
    <OnbordingLayout>
      <div className="mb-6 text-center">
        <h2 className="mb-1 text-2xl">Sign up</h2>
        <p>Sign up to Continue using MedAssist</p>
      </div>

      <form
        id="sign-in"
        className="space-y-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="email" className="block">
          <span className="mb-1.5 inline-block text-sm font-semibold">
            Email
          </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="form-input w-full rounded-md border border-neutral-300 px-4 py-2.5 placeholder:text-sm focus:border-cyan-900 focus:ring-cyan-900"
          />
        </label>
        <label htmlFor="password" className="relative block">
          <span className="mb-1.5 inline-block text-sm font-semibold">
            Password
          </span>
          <input
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Your password"
            className="form-input w-full rounded-md border border-neutral-300 px-4 py-2.5 placeholder:text-sm focus:border-cyan-900 focus:ring-cyan-900"
          />
          <span
            className="absolute bottom-4 right-4 inline-block"
            onClick={toggleVisibility}
          >
            {visible ? <BsEyeSlash /> : <BsEye />}
          </span>
        </label>
        <label htmlFor="password-confirm" className="relative block">
          <span className="mb-1.5 inline-block text-sm font-semibold">
            Confirm Password
          </span>
          <input
            type={visible2 ? "text" : "password"}
            name="password-confirm"
            id="password-confirm"
            placeholder="Your confirm password"
            className="form-input w-full rounded-md border border-neutral-300 px-4 py-2.5 placeholder:text-sm focus:border-cyan-900 focus:ring-cyan-900"
          />
          <span
            className="absolute bottom-4 right-4 inline-block"
            onClick={toggleVisibility2}
          >
            {visible2 ? <BsEyeSlash /> : <BsEye />}
          </span>
        </label>

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-cyan-900 py-4 text-white"
        >
          Continue
        </button>

        <p className="cursor-pointer text-center text-base font-medium">
          Already have an account?{" "}
          <Link to="/sign-in" className="cursor-pointer text-cyan-900">
            Sign in
          </Link>
        </p>

        <div className="my-4 flex items-center justify-center gap-3">
          <hr className="flex-grow border-t border-neutral-300" />
          <span className="text-sm uppercase text-neutral-400">or</span>
          <hr className="flex-grow border-t border-neutral-300" />
        </div>

        <button className="flex w-full items-center justify-center gap-3 rounded-md bg-blue-100 py-3">
          <FcGoogle size={28} />{" "}
          <span className="font-medium">Sign up with Google</span>
        </button>
      </form>
    </OnbordingLayout>
  );
};

export default SignUp;
