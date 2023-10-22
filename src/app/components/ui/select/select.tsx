import React from "react";
import styles from "./select.module.css";
import { Control, useController } from "react-hook-form";

type SelectProps = {
  options?: any[];
  control: Control<any>;
  name: string;
};

const Select = ({ options, control, name }: SelectProps) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
  });

  return (
    <select className={styles.select} {...inputProps}>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
