import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export default function ProtectedRoute({
  children,
  adminOnly = false,
}: Props) {
  const { user, token } = useAuth();
<<<<<<< HEAD

=======
console.log("ProtectedRoute:", {
  user,
  token,
  adminOnly,
});
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}