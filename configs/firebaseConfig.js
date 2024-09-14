// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-4d266.firebaseapp.com",
  projectId: "car-marketplace-4d266",
  storageBucket: "car-marketplace-4d266.appspot.com",
  messagingSenderId: "486690125093",
  appId: "1:486690125093:web:7c599bef0d97c62d2356cc",
  measurementId: "G-1C6E8MS7WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);