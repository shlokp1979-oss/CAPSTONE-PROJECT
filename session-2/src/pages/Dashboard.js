import React from "react";
import Sidebar from "../components/Sidebar";
import ResumeCard from "../components/ResumeCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <h2>My Resumes</h2>
        <button className="btn primary">+ Create Resume</button>

        <div className="card-container">
          <ResumeCard title="Software Engineer Resume" />
          <ResumeCard title="Frontend Developer Resume" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;