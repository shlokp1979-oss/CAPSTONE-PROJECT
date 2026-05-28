import { useEffect, useState } from "react";
import { getResumes, addResume, deleteResume } from "./services/firestoreService";
import "./App.css";

function App() {
  const [resumes, setResumes] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    skills: ""
  });

  // Fetch data
  const fetchData = async () => {
    const res = await getResumes();
    setResumes(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Add data
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addResume(data);
    setData({ name: "", email: "", skills: "" });
    fetchData();
  };

  // Delete
  const handleDelete = async (id) => {
    await deleteResume(id);
    fetchData();
  };

  return (
    <div className="container">
      <h1>🚀 Resume List</h1>

      {/* 🔥 FORM */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="skills"
          placeholder="Enter Skills"
          value={data.skills}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Resume</button>
      </form>

      {/* 📋 LIST */}
      <div className="card">
        <h2>Saved Resumes</h2>

        {resumes.length === 0 ? (
          <p>No resumes found 😢</p>
        ) : (
          resumes.map((item) => (
            <div className="resume-item" key={item.id}>
              <p>{item.name}</p>
              <button onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;