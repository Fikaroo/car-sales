"use client";

import React, { ReactElement } from "react";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import StepOne from "../MultiStepForm/StepOne/StepOne";
import StepTwo from "../MultiStepForm/StepTwo/StepTwo";
import {
  Slider,
  SliderTrigger,
  SliderContent,
  SliderFooter,
} from "../ui/slider/slider";
import { Steps, Step } from "../ui/step/step";
import StepThree from "../MultiStepForm/StepThree/StepThree";
import styles from "./CarPurchase.module.css";

type MultiFormSteps = {
  name: string;
  step: ReactElement;
};

const multiFormSteps: MultiFormSteps[] = [
  {
    name: "Pick up and handover",
    step: <StepOne />,
  },
  { name: "Personal info", step: <StepTwo /> },
  { name: "Confirmation", step: <StepThree /> },
];

const CarPurchase = () => {
  const steps = multiFormSteps.map(({ step }) => step);
  const { currentStep, nextStep, backStep, currentStepIndex } =
    useMultiStepForm(steps);

  return (
    <div>
      <Slider>
        <SliderTrigger>Open</SliderTrigger>
        <SliderContent>
          <h2>Title</h2>
          <Steps>
            {multiFormSteps.map(({ name }, index) => (
              <Step
                stage={
                  currentStepIndex === index
                    ? "current"
                    : currentStepIndex > index
                    ? "back"
                    : "next"
                }
                key={index}
              >
                {name}
              </Step>
            ))}
          </Steps>
          {currentStep}
          <SliderFooter>
            <button className={styles.btnPrimary} onClick={nextStep}>
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M12.7559 4.41083C12.4305 4.08539 11.9028 4.08539 11.5774 4.41083C11.252 4.73626 11.252 5.2639 11.5774 5.58934L15.1548 9.16675H3.83333C3.3731 9.16675 3 9.53984 3 10.0001C3 10.4603 3.3731 10.8334 3.83333 10.8334H15.1548L11.5774 14.4108C11.252 14.7363 11.252 15.2639 11.5774 15.5893C11.9028 15.9148 12.4305 15.9148 12.7559 15.5893L17.7559 10.5893C18.0814 10.2639 18.0814 9.73626 17.7559 9.41083L12.7559 4.41083Z"
                  fill="#141414"
                />
              </svg>
            </button>
          </SliderFooter>
        </SliderContent>
      </Slider>
    </div>
  );
};

export default CarPurchase;
