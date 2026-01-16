import { getProfile, login } from "@/api/auth.api";
import type { LoginResponse } from "@/types/LoginResponse";
import type { UserProfile } from "@/types/UserProfile";

export const authenticateUser = async (
  email: string,
  password: string
): Promise<{ token: string; user: UserProfile }> => {
  console.log("authenticateUser called with:", email, password);

  const loginRes: LoginResponse = await login(email, password);
  console.log("loginRes:", loginRes);

  if (loginRes.status !== 200 || !loginRes.body.token) {
    throw new Error(loginRes.message || "Login failed");
  }

  const token = loginRes.body.token;
  console.log("Token received:", token);

  const profileRes: LoginResponse = await getProfile(token);
  console.log("profileRes:", profileRes);

  if (profileRes.status !== 200 || !profileRes.body.email) {
    throw new Error(profileRes.message || "Failed to fetch user profile");
  }

  const user: UserProfile = {
    email: profileRes.body.email!,
    firstName: profileRes.body.firstName!,
    lastName: profileRes.body.lastName!,
    userName: profileRes.body.userName!,
  };

  console.log("User object constructed:", user);
  return { token, user };
};
