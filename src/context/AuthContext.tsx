import { createContext, useContext, useState } from "react";
<<<<<<< HEAD
import {
  login as loginApi,
  register as registerApi,
  type LoginData,
  type RegisterData,
  type User,
} from "../services/authService";
import { ApiError } from "../services/api";
=======

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
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432

interface AuthContextType {
  user: User | null;
  token: string | null;
<<<<<<< HEAD
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
=======
  login: (data: LoginData) => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
