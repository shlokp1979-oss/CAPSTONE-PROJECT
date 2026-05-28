import React, { useState } from "react";
import Form from "../componets/Form";
import ResumePreview from "../componets/ResumePreview";

const Home = () => {
  const [resume, setResume] = useState("");

  return (
    <div>
      <h1>AI Resume Builder</h1>

      <Form setResume={setResume} />
      <ResumePreview resume={resume} />
    </div>
  );
};

export default Home;