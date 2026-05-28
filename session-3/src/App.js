import { useState } from "react";
import Form from "./components/Form";
import ResumePreview from "./components/ResumePreview";
import ResumeList from "./components/ResumeList";
import "./App.css";


function App() {
  const [resume, setResume] = useState("");
  const [template, setTemplate] = useState("modern");

  // ✅ Copy to Clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(resume);
    alert("Copied!");
  };

  return (
    <div className="container">
      <h1>AI Resume Builder</h1>

      {/* Form */}
      <Form setResume={setResume} setTemplate={setTemplate} />

      {/* Resume Preview */}
      <ResumePreview resume={resume} template={template} />

      {/* Copy Button */}
      {resume && (
        <button onClick={copyToClipboard}>
          Copy Resume
        </button>


      )}
       
       <ResumeList />
    </div>
  );
}

export default App;