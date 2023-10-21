import React from "react";
import styles from "./StepTwo.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import z from "zod";
import Input from "../../ui/input/input";
import Label from "../../ui/label/label";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const FormSchema = z.object({
  fullName: z.string().min(1),
  phoneNumber: z.string().min(1),
  eMail: z.string().min(1).email("This is not a valid email."),
  comment: z.string().min(1),
  age: z.boolean(),
});

type FormSchema = z.infer<typeof FormSchema>;

type Inputs = {
  fieldType: "input" | "select";
  name: keyof FormSchema;
  label?: string;
  placeholder?: string;
  type?: string;
  options?: any[];
};

const inputs: Inputs[] = [
  {
    fieldType: "input",
    name: "fullName",
    label: "Full name",
    placeholder: "Placeholder",
    type: "text",
  },
  {
    fieldType: "input",
    name: "phoneNumber",
    label: "Phone number *",
    placeholder: "+994",
    type: "number",
  },
  {
    fieldType: "input",
    name: "eMail",
    label: "E-mail address",
    placeholder: "Placeholder",
    type: "email",
  },
  {
    fieldType: "input",
    name: "comment",
    label: "Comment",
    placeholder: "Placeholder",
    type: "text",
  },
  {
    fieldType: "input",
    name: "age",
    label: "Aged above 24 years",
    type: "checkbox",
  },
];

const StepTwo = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "+994 ",
      eMail: "",
      comment: "",
      age: false,
    },
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        {inputs[0]?.label && <Label>{inputs[0]?.label}</Label>}
        <Input
          control={control}
          name={inputs[0]?.name}
          type={inputs[0]?.type}
          placeholder={inputs[0]?.placeholder}
        />
        {errors?.[inputs[0]?.name]?.message && (
          <span className={styles.error}>
            {errors?.[inputs[0]?.name]?.message}
          </span>
        )}
      </div>
      <div>
        {inputs[1]?.label && <Label>{inputs[1]?.label}</Label>}
        <Controller
          control={control}
          name={inputs[1]?.name}
          render={({ field }) => (
            <PhoneInput
              defaultCountry="az"
              value={field?.name}
              onChange={field.onChange}
              placeholder="+994"
            />
          )}
        />
      </div>

      <div>
        {inputs[2]?.label && <Label>{inputs[2]?.label}</Label>}
        <Input
          control={control}
          name={inputs[2]?.name}
          type={inputs[2]?.type}
          placeholder={inputs[2]?.placeholder}
        />
        {errors?.[inputs[2]?.name]?.message && (
          <span className={styles.error}>
            {errors?.[inputs[2]?.name]?.message}
          </span>
        )}
      </div>

      <Controller
        control={control}
        name={inputs[3]?.name}
        render={({ field }) => (
          <div>
            {inputs[3]?.label && <Label>{inputs[3]?.label}</Label>}
            <textarea
              {...field}
              className={styles.textarea}
              value={field.value.toString()}
              placeholder={inputs[3]?.placeholder}
            />
            {errors?.[inputs[3]?.name]?.message && (
              <span className={styles.error}>
                {errors?.[inputs[3]?.name]?.message}
              </span>
            )}
          </div>
        )}
      />

      <div style={{ display: "flex", gap: "1rem" }}>
        <Input
          control={control}
          name={inputs[4]?.name}
          type={inputs[4]?.type}
          placeholder={inputs[4]?.placeholder}
        />
        {errors?.[inputs[4]?.name]?.message && (
          <span className={styles.error}>
            {errors?.[inputs[4]?.name]?.message}
          </span>
        )}
        {inputs[4]?.label && <Label>{inputs[4]?.label}</Label>}
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

export default StepTwo;
