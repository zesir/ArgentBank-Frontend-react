import AccountCard from "@/components/AccountCard";
import EditUserNameForm from "@/components/EditUserNameForm/EditUserNameForm";
import { useAuth } from "@/Hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3001/api/v1";

const User = () => {
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const { token, user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // 1️⃣ Token pas encore déterminé → on attend
    if (token === undefined) return;

    // 2️⃣ Pas connecté → redirection
    if (token === null) {
      navigate("/sign-in");
      return;
    }

    // 3️⃣ Connecté → fetch du profil
    const fetchProfile = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Unauthorized");
        }

        const data = await res.json();
        setUser({
          email: data.body.email,
          firstName: data.body.firstName,
          lastName: data.body.lastName,
          userName: data.body.userName,
        });
      } catch (error) {
        console.error("Failed to fetch profile", error);
        navigate("/sign-in");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate, setUser]);

  // ⬇️ RENDU CONDITIONNEL (UNIQUEMENT ICI)

  if (token === undefined) {
    return <p>Vérification du token...</p>;
  }

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!user) {
    return <p>Aucune donnée utilisateur</p>;
  }

  const onSaveHandler = async (updatedUser: {
    userName: string;
    firstName: string;
    lastName: string;
  }) => {
    try {
      const res = await fetch(`${API_URL}/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser),
      });

      if (!res.ok) {
        throw new Error("Update failed");
      }

      const data = await res.json();
      console.log("Réponse du backend :", data);

      // ⚡ Appelle correctement setUser
      setUser({
        email: data.body.email,
        firstName: data.body.firstName,
        lastName: data.body.lastName,
        userName: data.body.userName,
      });

      setIsEditing(false);
    } catch (error) {
      console.error("Erreur mise à jour profil", error);
      alert("Erreur lors de la mise à jour du profil");
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        {!isEditing ? (
          <div className="header-message">
            <h1>Welcome back</h1>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </div>
        ) : (
          <EditUserNameForm
            userName={user.userName}
            firstName={user.firstName}
            lastName={user.lastName}
            onCancel={() => setIsEditing(false)}
            onSave={onSaveHandler}
          />
        )}
      </div>

      <AccountCard
        title="Argent Bank Checking (x8349)"
        amount={2500}
        description="Available Balance"
        transactionPath="/transaction"
      />
      <AccountCard
        title="Argent Bank Savings (x6712)"
        amount={2500}
        description="Available Balance"
        transactionPath="/transaction"
      />
      <AccountCard
        title="Argent Bank Credit Card (x8349)"
        amount={2450}
        description="Current Balance"
        transactionPath="/transaction"
      />
    </main>
  );
};

export default User;
