import { useEffect, useState } from "react";
import { getResumes, deleteResume } from "../services/firestoreService";

function ResumeList() {
  const [resumes, setResumes] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getResumes();
      setResumes(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteResume(id);
    fetchData();
  };

  return (
    <div>
      <h2>Resumes</h2>
      {resumes.map((item) => (
        <div key={item.id}>
          <p>{item.name} - {item.email}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ResumeList;