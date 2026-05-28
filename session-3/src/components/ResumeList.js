import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCa3v_UWfh1_94GS3Hk61-6IpdPDvvKOzs",
  authDomain: "open-ai-b9ec7.firebaseapp.com",
  projectId: "open-ai-b9ec7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function ResumeList() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      const querySnapshot = await getDocs(collection(db, "resumes"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setResumes(data);
    };

    fetchResumes();
  }, []);

  return (
    <div>
      <h2>Saved Resumes</h2>

      {resumes.map((res, index) => (
        <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <p><b>{res.name}</b></p>
          <pre>{res.resume}</pre>
        </div>
      ))}
    </div>
  );
}

export default ResumeList;