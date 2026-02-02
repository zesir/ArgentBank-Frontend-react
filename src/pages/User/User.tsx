// src/pages/User/User.tsx
import AccountCard from "@/components/AccountCard";

import EditUserNameForm from "@/components/EditUserNameForm/EditUserNameForm";
import type { UserProfile } from "@/types/UserProfile";

type UserProps = {
  user: UserProfile;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  onSave: (updatedUser: {
    userName: string;
    firstName: string;
    lastName: string;
  }) => void;
};

const User = ({ user, isEditing, setIsEditing, onSave }: UserProps) => {
  if (!user) return null; // sécurité supplémentaire

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
            onSave={onSave}
          />
        )}
      </div>

      <AccountCard
        title="Argent Bank Checking (x8349)"
        amount={2082.79}
        description="Available Balance"
        transactionPath="/transaction"
      />
      <AccountCard
        title="Argent Bank Savings (x6712)"
        amount={10928.42}
        description="Available Balance"
        transactionPath="/transaction"
      />
      <AccountCard
        title="Argent Bank Credit Card (x8349)"
        amount={184.3}
        description="Current Balance"
        transactionPath="/transaction"
      />
    </main>
  );
};

export default User;
