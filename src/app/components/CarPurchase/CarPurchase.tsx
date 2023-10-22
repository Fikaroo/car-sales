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
import FormStateProvider from "../MultiStepForm/FormStateProvider";

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
    <FormStateProvider>
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
            {currentStepIndex === 0 ? (
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
            ) : currentStepIndex === 1 ? (
              <>
                <button className={styles.btnSecondary} onClick={backStep}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M9.42259 5.58934C9.74803 5.2639 9.74803 4.73626 9.42259 4.41083C9.09715 4.08539 8.56951 4.08539 8.24408 4.41083L3.24408 9.41083C2.91864 9.73626 2.91864 10.2639 3.24408 10.5893L8.24408 15.5893C8.56951 15.9148 9.09715 15.9148 9.42259 15.5893C9.74803 15.2639 9.74803 14.7363 9.42259 14.4108L5.84518 10.8334L17.1667 10.8334C17.6269 10.8334 18 10.4603 18 10.0001C18 9.53984 17.6269 9.16675 17.1667 9.16675L5.84518 9.16675L9.42259 5.58934Z"
                      fill="#141414"
                    />
                  </svg>
                  Back
                </button>

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
              </>
            ) : (
              <button className={styles.btnPrimary} onClick={nextStep}>
                Place your order
              </button>
            )}
          </SliderFooter>
        </SliderContent>
      </Slider>
    </FormStateProvider>
  );
};

export default CarPurchase;
