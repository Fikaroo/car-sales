"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../../ui/input/input";
import Label from "../../ui/label/label";
import styles from "./StepOne.module.css";
import Select from "../../ui/select/select";

const StepOneForm = z.object({
  receipt: z.string().min(1),
  rDate: z.string().min(1),
  rTime: z.string().min(1),
  handover: z.string().min(1),
  hDate: z.string().min(1),
  hTime: z.string().min(1),
});

export type StepOneForm = z.infer<typeof StepOneForm>;

type Inputs = {
  fieldType: "input" | "select";
  name: keyof StepOneForm;
  label?: string;
  placeholder?: string;
  type?: string;
  options?: any[];
};

const inputs: Inputs[] = [
  {
    fieldType: "input",
    name: "receipt",
    label: "Place of receipt",
    placeholder: "Placeholder",
    type: "text",
  },
  {
    fieldType: "input",
    name: "rDate",
    label: "Date",
    placeholder: "Placeholder",
    type: "date",
  },
  {
    fieldType: "select",
    name: "rTime",
    label: "Time",
    placeholder: "Placeholder",
    options: ["00:00", "00:30", "01:00", "01:30"],
  },
  {
    fieldType: "input",
    name: "handover",
    label: "Place of handover",
    placeholder: "Placeholder",
    type: "text",
  },
  {
    fieldType: "input",
    name: "hDate",
    label: "Date",
    placeholder: "Placeholder",
    type: "date",
  },
  {
    fieldType: "select",
    name: "hTime",
    label: "Time",
    placeholder: "Placeholder",
    options: ["00:00", "00:30", "01:00", "01:30"],
  },
];

const StepOne = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StepOneForm>({
    resolver: zodResolver(StepOneForm),
    defaultValues: {
      receipt: "",
      rDate: "",
      rTime: "00:00",
      handover: "",
      hDate: "",
      hTime: "00:00",
    },
  });

  const onSubmit = (data: StepOneForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        {inputs[0]?.label && <Label>{inputs[0]?.label}</Label>}
        <Input
          name={inputs[0].name}
          control={control}
          type={inputs[0]?.type}
          placeholder={inputs[0]?.placeholder}
        />
        {errors?.[inputs[0]?.name]?.message && (
          <span className={styles.error}>
            {errors?.[inputs[0]?.name]?.message}
          </span>
        )}
      </div>

      <div className={styles.twoCol}>
        <div>
          {inputs[1]?.label && <Label>{inputs[1]?.label}</Label>}
          <Input
            name={inputs[1].name}
            control={control}
            type={inputs[1]?.type}
            placeholder={inputs[1]?.placeholder}
          />
          {errors?.[inputs[1]?.name]?.message && (
            <span className={styles.error}>
              {errors?.[inputs[1]?.name]?.message}
            </span>
          )}
        </div>

        <div>
          {inputs[2]?.label && <Label>{inputs[2]?.label}</Label>}
          <Select
            name={inputs[2].name}
            control={control}
            options={inputs[2]?.options}
          />
          {errors?.[inputs[2]?.name]?.message && (
            <span className={styles.error}>
              {errors?.[inputs[2]?.name]?.message}
            </span>
          )}
        </div>
      </div>

      <div>
        {inputs[3]?.label && <Label>{inputs[3]?.label}</Label>}
        <Input
          name={inputs[3].name}
          control={control}
          type={inputs[3]?.type}
          placeholder={inputs[3]?.placeholder}
        />
        {errors?.[inputs[3]?.name]?.message && (
          <span className={styles.error}>
            {errors?.[inputs[3]?.name]?.message}
          </span>
        )}
      </div>

      <div className={styles.twoCol}>
        <div>
          {inputs[4]?.label && <Label>{inputs[4]?.label}</Label>}
          <Input
            name={inputs[4].name}
            control={control}
            type={inputs[4]?.type}
            placeholder={inputs[4]?.placeholder}
          />
          {errors?.[inputs[4]?.name]?.message && (
            <span className={styles.error}>
              {errors?.[inputs[4]?.name]?.message}
            </span>
          )}
        </div>

        <div>
          {inputs[5]?.label && <Label>{inputs[5]?.label}</Label>}
          <Select
            name={inputs[5].name}
            control={control}
            options={inputs[5]?.options}
          />
          {errors?.[inputs[5]?.name]?.message && (
            <span className={styles.error}>
              {errors?.[inputs[5]?.name]?.message}
            </span>
          )}
        </div>
      </div>

      {/* <button type="submit" className={styles.btnPrimary} onClick={nextStep}>
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
      </button> */}
    </form>
  );
};

export default StepOne;
