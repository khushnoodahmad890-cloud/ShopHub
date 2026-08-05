import { api } from "./api";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "user" | "admin";
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export function login(data: LoginData) {
  return api.post<{ message: string; token: string; user: User }>(
    "/api/auth/login",
    data
  );
}

export function register(data: RegisterData) {
  return api.post<{ message: string; user: User }>(
    "/api/auth/register",
    data
  );
}

export function getUserCount() {
  return api.get<{ customers: number }>("/api/auth/users/count");
}
