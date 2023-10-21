import React from "react";
import styles from "./input.module.css";
import { Control, useController } from "react-hook-form";

type InputProps = {
  control: Control<any>;
  name: string;
  type?: string;
  placeholder?: string;
};

const Input = ({ control, name, type, placeholder }: InputProps) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
  });

  return (
    <input
      {...inputProps}
      type={type || "text"}
      placeholder={placeholder || ""}
      className={styles.input}
    />
  );
};

export default Input;
