import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}
      <Link to="/" className="navbar-logo">
        boAt
      </Link>

      {/* NAV LINKS */}
      <nav className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

      </nav>

      {/* RIGHT SIDE */}
      <div className="nav-actions">

        <ThemeToggle />

        <Link to="/login" className="login-link">
          Login
        </Link>

        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>

        <Link to="/cart" className="cart-btn">
          🛒
        </Link>

      </div>

    </header>
  );
}

export default Navbar;