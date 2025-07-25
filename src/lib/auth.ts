import { API } from "./constants";

interface AuthResponse {
  data: {
    access_token: string;
    refresh_token: string;
    expires: string;
  };
}

interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

const TOKEN_KEY = "directus_access_token";
const REFRESH_KEY = "directus_refresh_token";

export async function login(email: string, password: string): Promise<User> {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.errors?.[0]?.message || "Login failed");
  }

  const { data } = (await res.json()) as AuthResponse;

  localStorage.setItem(TOKEN_KEY, data.access_token);
  localStorage.setItem(REFRESH_KEY, data.refresh_token);

  return await getCurrentUser();
}

export async function logout() {
  // Optionally revoke tokens on backend if API supports it, else just clear storage
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
}

export async function getCurrentUser(): Promise<User | null> {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return null;

  const res = await fetch(`${API}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) return null;

  const { data } = await res.json();

  const userRes = await fetch(`${API}/users/${data.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!userRes.ok) return null;

  const { data: fullUser } = await userRes.json();

  return fullUser as User;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
