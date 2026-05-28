import { useState } from "react";
import { addResume } from "../services/firestoreService";

function Form({ refresh }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    skills: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addResume(data);
      alert("Saved!");
      setData({ name: "", email: "", skills: "" });
      refresh(); // 👈 reload list
    } catch (error) {
      console.error(error);
      alert("Error saving");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={data.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={data.email} onChange={handleChange} />
      <input name="skills" placeholder="Skills" value={data.skills} onChange={handleChange} />

      <button type="submit">Save</button>
    </form>
  );
}

export default Form;