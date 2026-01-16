// src/api/http.ts
const API_URL = "http://localhost:3001/api/v1";

export const http = async <T>(
  endpoint: string,
  options: RequestInit = {},
  token?: string
): Promise<T> => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || "HTTP error");
  }

  return res.json();
};
