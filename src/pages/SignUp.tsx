import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Logo from "../assets/medassist.svg";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const toggleVisibility = () => {
    setVisible((prev: any) => !prev);
  };

  const toggleVisibility2 = () => {
    setVisible2((prev: any) => !prev);
  };

  return (
    <section className="lg:grid lg:h-screen lg:grid-cols-[400px_1fr]">
      <div className="bg-[linear-gradient(#CAE9FF,rgb(202,233,255,0.8)),url(./assets/drugs.png)] bg-cover bg-bottom p-8">
        <Link to="/">
          <img
            src={Logo}
            alt="Medassist logo"
            className="mx-auto mb-8 w-[200px]"
          />
        </Link>

        <div className="mx-auto w-[300px] rounded-lg bg-white bg-opacity-75 p-6 sm:text-center">
          <h1 className="mb-1 text-lg">Welcome back to MedAssist </h1>
          <p className="text-cyan-900">
            Your all-in-one solution for seamless medication management and
            adherence.
          </p>
        </div>
      </div>
      <div className="px-4 py-10 lg:mx-auto lg:w-[50%]">
        <div className="mb-6 text-center">
          <h2 className="mb-1 text-2xl">Sign up</h2>
          <p>Sign up to Continue using MedAssist</p>
        </div>

        <form id="sign-in" className="space-y-4">
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

          <button className="flex w-full items-center justify-center gap-3 rounded-md bg-blue-100 py-4">
            <FcGoogle size={28} />{" "}
            <span className="font-medium">Sign up with Google</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
