import React, { useState } from "react";
import Form from "../componets/Form";
import ResumePreview from "../componets/ResumePreview";

const Dashboard = () => {
  const [resume, setResume] = useState("");

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      
      {/* LEFT SIDE - FORM */}
      <div style={{ width: "40%", padding: "20px" }}>
        <h2>Fill Your Details</h2>
        <Form setResume={setResume} />
      </div>

      {/* RIGHT SIDE - PREVIEW */}
      <div style={{ width: "60%", padding: "20px", background: "#f4f4f4" }}>
        <h2>Live Preview</h2>
        <ResumePreview resume={resume} />
      </div>

    </div>
  );
};

export default Dashboard;