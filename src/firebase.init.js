// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRLvjwO3LngP6Y23wG10Soii8-IuZ9ld4",
  authDomain: "volunteer-network-01.firebaseapp.com",
  projectId: "volunteer-network-01",
  storageBucket: "volunteer-network-01.appspot.com",
  messagingSenderId: "718075969431",
  appId: "1:718075969431:web:7dcaf6e0ba597cb74a0ed2",
  measurementId: "G-59C0FSN0BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
