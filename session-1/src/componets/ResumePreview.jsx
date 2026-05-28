import React from "react";

const ResumePreview = ({ resume }) => {
  return (
    <div>
      <h2>Resume Preview</h2>
      <pre>{resume}</pre>
    </div>
  );
};

export default ResumePreview;