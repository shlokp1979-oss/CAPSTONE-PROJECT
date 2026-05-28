import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<ResumeBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;