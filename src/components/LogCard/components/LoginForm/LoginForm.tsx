import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import RememberMe from "../RememberMe";
import styles from "./LoginForm.module.scss";

const API_URL = "http://localhost:3002/api/v1";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("USERNAME:", username);
      console.log("PASSWORD:", password);
      const res = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });

      const data = await res.json();

      // stocker le token pour l'utiliser sur la page user
      localStorage.setItem("token", data.body.token);

      // rediriger vers la page user
      navigate("/user");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please try again.");
    }
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
