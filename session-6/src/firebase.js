import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEPDHg_VzpxqSuXYJ0CV9BvY4YiBalFkY",
  authDomain: "session-6-2d7b6.firebaseapp.com",
  projectId: "session-6-2d7b6",
  storageBucket: "session-6-2d7b6.firebasestorage.app",
  messagingSenderId: "553350081330",
  appId: "1:553350081330:web:a980599b5611ad8421852b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);