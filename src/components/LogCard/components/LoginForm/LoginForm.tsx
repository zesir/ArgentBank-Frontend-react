// src/components/LoginForm/LoginForm.tsx
import { useAuth } from "@/Hooks/useAuth";
import { authenticateUser } from "@/api/auth.services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import RememberMe from "../RememberMe";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit called");

    try {
      const { token, user } = await authenticateUser(username, password);
      console.log("authenticateUser returned:", { token, user });

      setToken(token);
      setUser(user);
      console.log("Context updated, navigating to /user");
      navigate("/user");
    } catch (err: unknown) {
      console.error("Error caught in handleSubmit:", err);
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="username"
        label="Email"
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

      <button type="submit" className={styles["sign-in-button"]}>
        Sign In
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default LoginForm;
