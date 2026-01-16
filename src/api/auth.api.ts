import { http } from "@/api/http";
import type { LoginResponse } from "@/types/LoginResponse";

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  return http<LoginResponse>("/user/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const getProfile = async (token: string): Promise<LoginResponse> => {
  return http<LoginResponse>("/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
