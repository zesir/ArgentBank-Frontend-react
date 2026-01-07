import type { Dispatch, SetStateAction } from "react";
import styles from "./InputField.module.scss";

type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className={`${styles["input-wrapper"]}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
