// src/types/LoginResponse.ts

export type LoginResponse = {
  ok: boolean; // succès ou échec
  status: number; // status HTTP
  message?: string; // message d'erreur ou info
  body: {
    token?: string; // présent pour login
    // Pour getProfile, token n'existe pas, donc facultatif
    email?: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
  };
};
