import Navbar from "./components/Navbar";
import ResumeForm from "./components/ResumeForm";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="container">
        <ResumeForm />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;