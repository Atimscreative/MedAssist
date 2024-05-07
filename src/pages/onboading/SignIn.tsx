import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Cookies from "js-cookie";
import OnbordingLayout from "../../layout/OnbordingLayout";

const SignIn = () => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [, setProfile] = useState<any>();
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setVisible((prev: any) => !prev);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = (error: any) => {
    console.log(error);
  };

  // USE EFFECT HOOKS
  useEffect(() => {
    // Set the cookie with appropriate attributes
    Cookies.set("myCookie", "cookieValue", {
      sameSite: "None",
      secure: true,
    });
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          },
        )
        .then((res) => {
          setProfile(res.data);
          navigate("/dashboard");
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <OnbordingLayout>
      <div className="mb-6 text-center">
        <h2 className="mb-1 text-2xl">Sign in</h2>
        <p>Sign in to Continue using MedAssist</p>
      </div>

      <form
        id="sign-in"
        onSubmit={(e) => handleSubmit(e)}
        className="space-y-3"
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
        <p className="my-3 cursor-pointer text-right font-medium">
          Forget Password?
        </p>

        <button
          type="submit"
          className="w-full rounded-md bg-cyan-900 py-4 text-white"
        >
          Continue
        </button>

        <p className="cursor-pointer text-center text-base font-medium">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="cursor-pointer text-cyan-900">
            Sign up
          </Link>
        </p>
        <GoogleLogin onSuccess={responseMessage} onError={() => errorMessage} />

        <div className="my-4 flex items-center justify-center gap-3">
          <hr className="flex-grow border-t border-neutral-300" />
          <span className="text-sm uppercase text-neutral-400">or</span>
          <hr className="flex-grow border-t border-neutral-300" />
        </div>

        <button className="flex w-full items-center justify-center gap-3 rounded-md bg-blue-100 py-3">
          <FcGoogle size={28} />{" "}
          <span className="font-medium">Sign in with Google</span>
        </button>

        <span onClick={() => login()}>Log In</span>
        <span onClick={logOut}>Log Out</span>
      </form>
    </OnbordingLayout>
  );
};

export default SignIn;
