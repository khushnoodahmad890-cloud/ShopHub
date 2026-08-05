import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { ApiError } from "../services/api";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await register({ name, email, password });

      showToast("Account created! Please log in.", "success");
      navigate("/login");
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message : "Registration failed.";

      showToast(message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-card">
          <h1>Create Account</h1>

          <p>Join ShopHub and start shopping</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
