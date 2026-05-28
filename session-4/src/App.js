import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <Navbar />

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <p>Hello bhai 👋</p>
      </Modal>

      <Footer />
    </div>
  );
}

export default App;