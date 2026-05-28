import { useState } from "react";

function ResumeBuilder() {
  const [data, setData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: ""
  });

  const [error, setError] = useState("");
  const [resumes, setResumes] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const generateResume = () => {
    if (!data.name || !data.email || !data.skills || !data.experience) {
      setError("⚠️ Please fill all fields!");
      return;
    }

    if (!data.email.includes("@")) {
      setError("⚠️ Enter valid email!");
      return;
    }

    setError("");

    setResumes([...resumes, data]);

    setData({
      name: "",
      email: "",
      skills: "",
      experience: ""
    });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Create Resume</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input name="name" value={data.name} placeholder="Your Name" onChange={handleChange} /><br /><br />
      <input name="email" value={data.email} placeholder="Email" onChange={handleChange} /><br /><br />
      <input name="skills" value={data.skills} placeholder="Skills" onChange={handleChange} /><br /><br />
      <textarea name="experience" value={data.experience} placeholder="Experience" onChange={handleChange} /><br /><br />

      <button onClick={generateResume}>Generate Resume</button>

      {/* 👇 Multiple Resume Preview */}
      {resumes.map((res, index) => (
        <div key={index} className="resume-card">
          <h3>{res.name}</h3>
          <p><b>Email:</b> {res.email}</p>
          <p><b>Skills:</b> {res.skills}</p>
          <p><b>Experience:</b> {res.experience}</p>
        </div>
      ))}
    </div>
  );
}

export default ResumeBuilder;