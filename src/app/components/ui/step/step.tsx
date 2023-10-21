import React from "react";
import styles from "./step.module.css";

const Steps = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.steps}>{children}</div>
);

type StepProps = {
  children: React.ReactNode;
  stage: "back" | "current" | "next";
};

const Step = ({ children, stage }: StepProps) => (
  <div data-state={stage} className={styles.step}>
    {children}
  </div>
);

export { Steps, Step };
