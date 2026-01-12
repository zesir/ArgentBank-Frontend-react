type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  className?: string;
  onChange: (value: string) => void;
};

const InputField = ({
  id,
  label,
  type = "text",
  value,
  className,
  onChange,
}: InputFieldProps) => {
  return (
    <div className={className}>
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
