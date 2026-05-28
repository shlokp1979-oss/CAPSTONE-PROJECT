import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBvROz3NxaU23_l7b8erzNtX6tiZs2LyA",
  authDomain: "session-5-59c63.firebaseapp.com",
  projectId: "session-5-59c63",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);