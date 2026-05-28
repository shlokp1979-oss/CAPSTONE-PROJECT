import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn7O7ZLFDjX7Y2fzU-EgsndUwdrdSN6tw",
  authDomain:"ai-resume-e905b.firebaseapp.com",
  projectId: "ai-resume-e905b.firebaseapp.com",
  appId:  "1:398659335088:web:479ef967e645abfa341c75"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);