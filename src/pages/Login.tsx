import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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


            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />



            <input
              type="password"
              placeholder="Password"
              value={password}
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