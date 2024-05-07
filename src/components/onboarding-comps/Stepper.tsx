import React, { useState } from "react";
import Welcome from "../Welcome";
import { WhatHopes } from "./WhatHopes";
import { HowOften } from "./HowOften";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  closeModal,
  openModal,
} from "../../redux/features/overlay/toggleModalSlice";
import ModalPopup from "../ModalPopup";
import { useNavigate } from "react-router-dom";

type StepperProps = {
  steps: string[];
};

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const isOpen = useSelector((state: RootState) => state.toggle.isOpen);
  const dispatch = useDispatch();

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  // const handlePrev = () => {
  //   setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  // };

  const handleClick = () => {
    dispatch(openModal());
  };

  const closePopup = () => {
    dispatch(closeModal());
    navigate(`/dashboard?new=true`);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Welcome handleNext={handleNext} />;
      case 1:
        return <WhatHopes handleNext={handleNext} />;
      case 2:
        return <HowOften handleClick={handleClick} />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderStep()}
      {/* <button onClick={handlePrev} disabled={currentStep === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentStep === steps.length - 1}>
        Next
      </button> */}
      {isOpen && (
        <ModalPopup
          title={"Registration complete!"}
          buttonText={"Next"}
          content="Click next to proceed to dashboard"
          onClick={() => closePopup()}
        />
      )}
    </>
  );
};

export default Stepper;
