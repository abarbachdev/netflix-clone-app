// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDymiHx1CPFKnV_LDPo74SeA2P6rRAwqE",
  authDomain: "netflix-react-9d30f.firebaseapp.com",
  projectId: "netflix-react-9d30f",
  storageBucket: "netflix-react-9d30f.appspot.com",
  messagingSenderId: "954576435185",
  appId: "1:954576435185:web:7ca9fb019a927d3a9a3650"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 