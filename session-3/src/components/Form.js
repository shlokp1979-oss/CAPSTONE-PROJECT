import { useState } from "react";
import { generateResume } from "../services/openai";
import { saveResume } from "../services/firebase";

function Form({ setResume, setTemplate }) {
  const [data, setData] = useState({
    name: "",
    skills: "",
    experience: "",
  });

  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await generateResume(data);

    setResume(res);

    // ✅ IMPORTANT: yahi se template App.js me jayega
    setTemplate(selectedTemplate);

    await saveResume({ ...data, resume: res, template: selectedTemplate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="skills" placeholder="Skills" onChange={handleChange} />
      <textarea name="experience" placeholder="Experience" onChange={handleChange} />

      {/* ✅ TEMPLATE SELECT */}
      <select onChange={(e) => setSelectedTemplate(e.target.value)}>
        <option value="modern">Modern</option>
        <option value="classic">Classic</option>
      </select>

      <button type="submit">Generate Resume</button>
    </form>
  );
}

export default Form;