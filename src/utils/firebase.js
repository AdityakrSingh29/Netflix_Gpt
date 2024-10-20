// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9p-X1fy6dbpdTezHJz6CDt1PgMnVo7Yk",
  authDomain: "netflix-gpt-dfc41.firebaseapp.com",
  projectId: "netflix-gpt-dfc41",
  storageBucket: "netflix-gpt-dfc41.appspot.com",
  messagingSenderId: "559441546686",
  appId: "1:559441546686:web:b98329b04dbec8e5e13def",
  measurementId: "G-VGZX3QZZ8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();