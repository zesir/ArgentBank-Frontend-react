// src/context/AuthProvider.tsx
import type { UserProfile } from "@/types/UserProfile";
import type { ReactNode } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null | undefined>(undefined);
  const [user, setUser] = useState<UserProfile | null>(null);

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
