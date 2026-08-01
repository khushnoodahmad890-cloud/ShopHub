import { createContext, useContext, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: "user" | "admin";
}

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (data: LoginData) => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
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
    const res = await fetch("https://shophub-production-5d04.up.railway.app/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) return false;

    return true;
  }

  async function login(data: LoginData) {
    const res = await fetch("https://shophub-production-5d04.up.railway.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) return false;

    const result = await res.json();

    localStorage.setItem("token", result.token);
    localStorage.setItem("user", JSON.stringify(result.user));

    setToken(result.token);
    setUser(result.user);

    return true;
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