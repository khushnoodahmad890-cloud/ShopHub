// Central place for talking to the backend.
// Reads the API base URL from an environment variable instead of being
// hardcoded in every service file, and centralizes auth-header injection
// and error handling.

export const API_URL = "https://shophub-production-5d04.up.railway.app";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

function getHeaders(): HeadersInit {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...getHeaders(),
      ...(options.headers || {}),
    },
  });

  // Some endpoints (e.g. plain 200 with no body) may not return JSON.
  let data: unknown = null;

  try {
    data = await res.json();
  } catch {
    // No JSON body — that's fine for some responses.
  }

  if (!res.ok) {
    const message =
      (data as { message?: string } | null)?.message ||
      `Request failed with status ${res.status}`;

    throw new ApiError(message, res.status);
  }

  return data as T;
}

export const api = {
  get: <T>(path: string) => request<T>(path, { method: "GET" }),

  post: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "POST",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }),

  put: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "PUT",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }),

  delete: <T>(path: string) => request<T>(path, { method: "DELETE" }),
};
