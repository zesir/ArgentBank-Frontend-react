import type { Dispatch, SetStateAction } from "react";
import styles from "./RememberMe.module.scss";

type RememberMeProps = {
  checked: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
};

const RememberMe = ({ checked, onChange }: RememberMeProps) => {
  return (
    <div className={styles["input-remember"]}>
      <input
        type="checkbox"
        id="remember-me"
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
      />
      <label htmlFor="remember-me">Remember me</label>
    </div>
  );
};

export default RememberMe;
