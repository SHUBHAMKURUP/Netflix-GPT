// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVTXPL23qz_FkauiPrW6ATsOzGi-ykdl0",
  authDomain: "netflix-gpt-a23b9.firebaseapp.com",
  projectId: "netflix-gpt-a23b9",
  storageBucket: "netflix-gpt-a23b9.firebasestorage.app",
  messagingSenderId: "79639601769",
  appId: "1:79639601769:web:7c939e966ea41feb9ab8f8",
  measurementId: "G-QM3HK10Q0N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
