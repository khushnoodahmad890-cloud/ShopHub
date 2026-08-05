import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
<<<<<<< HEAD
import { useToast } from "../context/ToastContext";
import { ApiError } from "../services/api";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
=======

function Register() {

  const { register } = useAuth();
  const navigate = useNavigate();

>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
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
=======



  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault();


    const success = await register({
      name,
      email,
      password,
    });



    if (success) {

      alert("Registration successful!");

      navigate("/login");

    } else {

      alert("Registration failed.");

    }

  }



  return (

    <section className="auth-section">

      <div className="container">


        <div className="auth-card">


          <h1>
            Create Account
          </h1>


          <p>
            Join ShopHub and start shopping
          </p>



          <form
            onSubmit={handleSubmit}
            className="auth-form"
          >


>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
            <input
              type="text"
              placeholder="Full Name"
              value={name}
<<<<<<< HEAD
              onChange={(e) => setName(e.target.value)}
              required
            />

=======
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />



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
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
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
              Register
            </button>


          </form>


        </div>


      </div>


    </section>

  );
}


export default Register;
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
