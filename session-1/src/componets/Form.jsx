import React, { useState } from "react";
import axios from "axios";

const Form = ({ setResume }) => {
  const [formData, setFormData] = useState({
    name: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const generateResume = async () => {
    const prompt = `
    Create a professional resume:
    Name: ${formData.name}
    Skills: ${formData.skills}
    Experience: ${formData.experience}
    `;

    try {
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }, {
        headers: {
          Authorization: `Bearer YOUR_OPENAI_API_KEY`,
        },
      });

      setResume(res.data.choices[0].message.content);
    } catch (err) {
      console.log(err);
      alert("Error generating resume");
    }
  };

  return (
    <div>
      <h2>Enter Details</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="skills" placeholder="Skills" onChange={handleChange} />
      <textarea name="experience" placeholder="Experience" onChange={handleChange}></textarea>

      <button onClick={generateResume}>Generate Resume</button>
    </div>
  );
};

export default Form;