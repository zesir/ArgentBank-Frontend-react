import type { UserProfile } from "@/types/UserProfile";
import { createContext } from "react";

export type AuthContextType = {
  token: string | null | undefined;
  user: UserProfile | null;
  setToken: (token: string | null) => void;
  setUser: (user: UserProfile | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: undefined,
  user: null,
  setToken: () => {},
  setUser: () => {},
});
