"use client";

import { ReactElement, useState } from "react";

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () =>
    setCurrentStepIndex((prevStepIndex) => {
      if (prevStepIndex >= steps.length - 1) {
        return prevStepIndex;
      }
      return prevStepIndex + 1;
    });

  const backStep = () =>
    setCurrentStepIndex((prevStepIndex) => {
      if (prevStepIndex <= 0) {
        return prevStepIndex;
      }
      return prevStepIndex - 1;
    });

  return {
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    nextStep,
    backStep,
  };
};

export default useMultiStepForm;
