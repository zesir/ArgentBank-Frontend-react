type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  label,
  className,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
