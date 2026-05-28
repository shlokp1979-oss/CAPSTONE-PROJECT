import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa3v_UWfh1_94GS3Hk61-6IpdPDvvKOzs",
  authDomain: "open-ai-b9ec7.firebaseapp.com",
  projectId: "open-ai-b9ec7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ HAR BAAR NEW DOCUMENT CREATE HOGA
export const saveResume = async (resumeData) => {
  try {
    await addDoc(collection(db, "resumes"), {
      ...resumeData,
      createdAt: new Date()
    });
    console.log("Saved!");
  } catch (err) {
    console.error(err);
  }
};