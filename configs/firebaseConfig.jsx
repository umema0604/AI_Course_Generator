// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "knights-course-generator.firebaseapp.com",
  projectId: "knights-course-generator",
  storageBucket: "knights-course-generator.firebasestorage.app",
  messagingSenderId: "353288152435",
  appId: "1:353288152435:web:cde6408335f347c13f1106",
  measurementId: "G-YE19NE7Y14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)