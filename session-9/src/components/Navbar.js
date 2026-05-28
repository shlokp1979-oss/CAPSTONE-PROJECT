import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AI Resume Builder</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;