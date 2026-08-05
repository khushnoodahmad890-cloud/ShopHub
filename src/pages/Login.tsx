import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
<<<<<<< HEAD
import { useToast } from "../context/ToastContext";
import { ApiError } from "../services/api";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await login({ email, password });

      showToast("Welcome back!", "success");
      navigate("/");
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : "Invalid email or password.";

      showToast(message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-card">
          <h1>Welcome Back</h1>

          <p>Login to your ShopHub account</p>

          <form onSubmit={handleSubmit} className="auth-form">
=======

function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault();


    const success = await login({
      email,
      password,
    });



    if (success) {

      alert("Login successful!");

      navigate("/");

    } else {

      alert("Invalid email or password.");

    }

  }



  return (

    <section className="auth-section">

      <div className="container">


        <div className="auth-card">


          <h1>
            Welcome Back
          </h1>


          <p>
            Login to your ShopHub account
          </p>



          <form
            onSubmit={handleSubmit}
            className="auth-form"
          >


>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
            <input
              type="email"
              placeholder="Email"
              value={email}
<<<<<<< HEAD
              onChange={(e) => setEmail(e.target.value)}
              required
            />

=======
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />



>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
            <input
              type="password"
              placeholder="Password"
              value={password}
<<<<<<< HEAD
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
=======
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />



            <button
              type="submit"
              className="btn"
            >
              Login
            </button>


          </form>


        </div>


      </div>


    </section>

  );
}


export default Login;
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
