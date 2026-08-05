import { createContext, useContext, useState } from "react";
import {
  login as loginApi,
  register as registerApi,
  type LoginData,
  type RegisterData,
  type User,
} from "../services/authService";
import { ApiError } from "../services/api";

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });

  async function register(data: RegisterData) {
    try {
      await registerApi(data);
    } catch (err) {
      if (err instanceof ApiError) throw err;
      throw new Error("Registration failed. Please try again.");
    }
  }

  async function login(data: LoginData) {
    try {
      const result = await loginApi(data);

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      setToken(result.token);
      setUser(result.user);
    } catch (err) {
      if (err instanceof ApiError) throw err;
      throw new Error("Login failed. Please try again.");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
