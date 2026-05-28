import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1>Build Your Resume with AI</h1>
      <button onClick={() => navigate("/builder")}>
        Get Started
      </button>
    </div>
  );
}

export default Home;