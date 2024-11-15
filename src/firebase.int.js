// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7tEUCc5j1TbvQ4ptliTyf8NokEIykUUY",
  authDomain: "react-auth-project-f87dd.firebaseapp.com",
  projectId: "react-auth-project-f87dd",
  storageBucket: "react-auth-project-f87dd.firebasestorage.app",
  messagingSenderId: "30555816173",
  appId: "1:30555816173:web:91afef5919a63652ea4ce4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
    export  const auth = getAuth(app);
