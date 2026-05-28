import { db } from "../firebase/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const resumeCollection = collection(db, "resumes");

// ✅ ADD
export const addResume = async (data) => {
  try {
    await addDoc(resumeCollection, data);
  } catch (error) {
    console.error("Error adding resume:", error);
  }
};

// ✅ GET
export const getResumes = async () => {
  const snapshot = await getDocs(resumeCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// ✅ DELETE
export const deleteResume = async (id) => {
  await deleteDoc(doc(db, "resumes", id));
};