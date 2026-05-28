import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";

function Dashboard() {
  const [data, setData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
  });

  return (
    <div className="dashboard">
      <ResumeForm data={data} setData={setData} />

      <ResumePreview data={data} />
    </div>
  );
}

export default Dashboard;