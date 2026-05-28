import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { user, logout } = useAuth();

  return (
    <nav className="navbar">

      <h2>Auth App</h2>

      <div>

        {
          user ? (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              <button onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/">
              Login
            </Link>
          )
        }

      </div>

    </nav>
  );
}

export default Navbar;