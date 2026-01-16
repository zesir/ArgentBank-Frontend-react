// src/pages/User/UserContainer.tsx
import { getUserProfile, updateUserProfile } from "@/api/user.api";
import { useAuth } from "@/Hooks/useAuth";
import type { UserProfile } from "@/types/UserProfile";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import User from "./User";

const UserContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const shouldEdit = searchParams.get("edit") === "true";
  const { token, user, setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(shouldEdit);
  const navigate = useNavigate();

  // 🔑 écoute du state de navigation
  useEffect(() => {
    if (!isEditing && searchParams.get("edit") === "true") {
      searchParams.delete("edit");
      setSearchParams(searchParams, { replace: true });
    }
  }, [isEditing, searchParams, setSearchParams]);

  useEffect(() => {
    if (token === undefined) return;

    if (token === null) {
      navigate("/sign-in");
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profile: UserProfile = await getUserProfile(token);
        setUser(profile);
      } catch (err) {
        console.error("Erreur récupération profil :", err);
        navigate("/sign-in");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate, setUser]);

  const onSaveHandler = async (updatedUser: {
    userName: string;
    firstName: string;
    lastName: string;
  }) => {
    if (!token) return;

    try {
      const updatedProfile = await updateUserProfile(token, updatedUser);
      setUser(updatedProfile);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (!user) return null;

  return (
    <User
      user={user}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      onSave={onSaveHandler}
    />
  );
};

export default UserContainer;
