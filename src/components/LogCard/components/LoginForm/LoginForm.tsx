import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import RememberMe from "../RememberMe";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // futur appel API
    navigate("/user");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="username"
        label="Username"
        value={username}
        onChange={setUsername}
      />
      <InputField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <RememberMe checked={rememberMe} onChange={setRememberMe} />

      <button type="submit" className={`${styles["sign-in-button"]}`}>
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
