import React from "react";

function ResumeCard({ title }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <button className="btn">Edit</button>
    </div>
  );
}

export default ResumeCard;