// AuthContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import * as auth from "@/lib/auth"; // your login/logout logic
import { getCurrentUser } from "@/lib/auth";
import { User } from "@/lib/directus";
import { useNavigate } from "react-router-dom";

export const TOKEN_KEY = "auth-token";

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const loadUser = async () => {
      const current = await getCurrentUser();
      if (current) setUser(current);
      setIsLoading(false);
    };

    loadUser();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setUser(null);
    try {
      await auth.login(email, password);
      const currentUser = await getCurrentUser();

      if (!currentUser) {
        throw new Error("Failed to fetch user");
      }

      setUser(currentUser);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    auth.logout();
    setUser(null);
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
