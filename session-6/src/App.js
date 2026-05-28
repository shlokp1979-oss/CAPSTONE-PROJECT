import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import './index.css';
import { AuthProvider, useAuth } from "./context/AuthContext";

function PrivateRoute({ children }) {

  const { user } = useAuth();

  return user ? children : <Navigate to="/" />;
}

function App() {

  return (
    <BrowserRouter>

      <AuthProvider>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

        </Routes>

      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;