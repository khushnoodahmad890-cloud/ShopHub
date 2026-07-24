import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const { dark, toggleTheme } = useTheme();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          ShopHub
        </Link>


        {/* Navigation */}
        <ul className="nav-links">

          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/products">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders">
              My Orders
            </NavLink>
          </li>

          {/* Temporary Admin Access */}
          <li>
            <NavLink to="/admin">
              Admin
            </NavLink>
          </li>

          <li>
            <NavLink to="/cart">
              Cart ({totalItems})
            </NavLink>
          </li>

        </ul>


        {/* Authentication */}
        <div className="auth-buttons">

          {user ? (
            <button
              onClick={logout}
              className="btn logout-btn"
            >
              Logout
            </button>
          ) : (
            <>
              <Link 
                to="/login" 
                className="btn login-btn"
              >
                Login
              </Link>

              <Link 
                to="/register" 
                className="btn register-btn"
              >
                Register
              </Link>
            </>
          )}

          <button
            className="theme-btn"
            onClick={toggleTheme}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;