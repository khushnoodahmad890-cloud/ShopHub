import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {

  const { register } = useAuth();
  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



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


            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />



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
              Register
            </button>


          </form>


        </div>


      </div>


    </section>

  );
}


export default Register;