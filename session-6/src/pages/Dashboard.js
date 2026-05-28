import { useAuth } from "../context/AuthContext";

function Dashboard() {

  const { user, logout } = useAuth();

  return (
    <div className="container">

      <h1>Dashboard</h1>

      <h3>Welcome</h3>

      <p>{user?.email}</p>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;