import type { UserProfile } from "@/types/UserProfile";

export type UserProfileResponse = {
  status: number;
  message: string;
  body: UserProfile;
};
