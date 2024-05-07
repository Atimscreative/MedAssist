import Stepper from "../../components/onboarding-comps/Stepper";
import OnbordingLayout from "../../layout/OnbordingLayout";

const steps = ["Welcome", "WhatHopes", "HowOften"];

const Onboarding = () => {
  return (
    <OnbordingLayout>
      <Stepper steps={steps} />
    </OnbordingLayout>
  );
};

export default Onboarding;
