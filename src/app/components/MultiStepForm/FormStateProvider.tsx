import React, { createContext, useState } from "react";
import { StepOneForm } from "./StepOne/StepOne";
import { StepTwoForm } from "./StepTwo/StepTwo";

type State = (StepOneForm & StepTwoForm) | object;

export type FormState = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export const FormContext = createContext<FormState>({
  state: {},
  setState: () => {},
});

type FormStateProvider = {
  children: React.ReactNode;
};

const FormStateProvider = ({ children }: FormStateProvider) => {
  const [state, setState] = useState<State>({});
  return (
    <FormContext.Provider value={{ state, setState }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormStateProvider;
