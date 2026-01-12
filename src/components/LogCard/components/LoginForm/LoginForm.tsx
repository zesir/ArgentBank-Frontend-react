import { useAuth } from "@/Hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import RememberMe from "../RememberMe";
import styles from "./LoginForm.module.scss";

const API_URL = "http://localhost:3001/api/v1";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // 1️⃣ login et récupération du token
      const res = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      const token = data.body.token;
      setToken(token);

      // 2️⃣ fetch le profil complet juste après le login
      const profileRes = await fetch(`${API_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const profileData = await profileRes.json();
      setUser(profileData.body);

      // 3️⃣ rediriger vers User
      navigate("/user");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        className="input-wrapper"
        id="username"
        label="Username"
        value={username}
        onChange={setUsername}
      />
      <InputField
        className="input-wrapper"
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
