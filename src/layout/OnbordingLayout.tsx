import { Link } from "react-router-dom";
import Logo from "../assets/medassist.svg";

const OnbordingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="lg:grid lg:h-screen lg:grid-cols-[400px_1fr]">
      <div className="bg-[linear-gradient(#CAE9FF,rgb(202,233,255,0.8)),url(./assets/drugs.png)] bg-cover bg-bottom p-8">
        <Link to="/">
          <img
            src={Logo}
            alt="Medassist logo"
            className="mx-auto mb-8 w-[200px] lg:mx-0"
          />
        </Link>
        <div className="lg:flex lg:h-[400px] lg:items-center">
          <div className="mx-auto w-[300px] rounded-lg bg-white bg-opacity-75 p-6 sm:text-center lg:mx-0 lg:text-left">
            <h1 className="mb-1 text-lg">Welcome back to MedAssist </h1>
            <p className="text-cyan-900">
              Your all-in-one solution for seamless medication management and
              adherence.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 md:mx-auto md:w-[500px] lg:w-[550px] xl:w-1/2">
        {children}
      </div>
    </section>
  );
};

export default OnbordingLayout;
