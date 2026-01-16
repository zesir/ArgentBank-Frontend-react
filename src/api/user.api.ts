// src/api/user.api.ts
import { http } from "@/api/http";
import type { UserProfile } from "@/types/UserProfile";

export const getUserProfile = async (token: string): Promise<UserProfile> => {
  const data = await http<{ body: UserProfile }>(
    "/user/profile",
    { method: "GET" },
    token
  );
  return data.body;
};

export const updateUserProfile = async (
  token: string,
  payload: { userName: string; firstName: string; lastName: string }
): Promise<UserProfile> => {
  const data = await http<{ body: UserProfile }>(
    "/user/profile",
    { method: "PUT", body: JSON.stringify(payload) },
    token
  );
  return data.body;
};
