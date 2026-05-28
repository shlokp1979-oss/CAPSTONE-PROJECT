import { useState } from "react";

function ResumeForm() {
  const [data, setData] = useState({
    name: "",
    skill: ""
  });

  const [summary, setSummary] = useState("");

  const handleGenerate = () => {
    setSummary(
      `${data.name} is a skilled ${data.skill} developer with strong problem-solving abilities.`
    );
  };

  return (
    <div className="card">
      <h2>Resume Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={data.name}
        onChange={(e) =>
          setData({ ...data, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Enter Skill"
        value={data.skill}
        onChange={(e) =>
          setData({ ...data, skill: e.target.value })
        }
      />

      <button onClick={handleGenerate}>
        Generate Summary
      </button>

      <p>{summary}</p>
    </div>
  );
}

export default ResumeForm;