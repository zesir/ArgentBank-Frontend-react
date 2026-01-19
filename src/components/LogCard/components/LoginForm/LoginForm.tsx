// src/components/LoginForm/LoginForm.tsx
import { authenticateUser } from "@/api/auth.services";
import { login } from "@/redux/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import RememberMe from "../RememberMe";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit called");

    try {
      const { token, user: userData } = await authenticateUser(
        username,
        password,
      );
      console.log("authenticateUser returned:", { token, userData });

      // ✅ Redux dispatch
      dispatch(
        login({
          firstName: userData.firstName,
          lastName: userData.lastName,
          token,
          userName: userData.userName, // si tu l’as ajouté
        }),
      );

      console.log("Redux store updated, navigating to /user");
      navigate("/user");
    } catch (err: unknown) {
      console.error("Error caught in handleSubmit:", err);
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <form className="input-wrapper" onSubmit={handleSubmit}>
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
