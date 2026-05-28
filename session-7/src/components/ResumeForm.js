import { useState } from "react";
import openai from "../api";

function ResumeForm() {

  const [form, setForm] = useState({
    name: "",
    skills: "",
    experience: ""
  });

  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const generateSummary = async () => {

    setLoading(true);

    try {

      const prompt = `
      Create a professional resume summary.

      Name: ${form.name}
      Skills: ${form.skills}
      Experience: ${form.experience}
      `;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      });

      setSummary(
        response.choices[0].message.content
      );

    } catch (error) {

      console.log(error);
      alert("API Error");

    }

    setLoading(false);
  };

  return (
    <div className="container">

      <h1>AI Resume Generator</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="skills"
        placeholder="Enter Skills"
        onChange={handleChange}
      />

      <textarea
        name="experience"
        placeholder="Enter Experience"
        onChange={handleChange}
      />

      <button onClick={generateSummary}>
        {
          loading
          ? "Generating..."
          : "Generate Summary"
        }
      </button>

      {
        summary && (
          <div className="output">
            <h3>AI Summary</h3>

            <p>{summary}</p>
          </div>
        )
      }

    </div>
  );
}

export default ResumeForm;