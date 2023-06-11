// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhW1LrtlpddnhzdR9FWYAvUxI6oaFgQIU",
  authDomain: "todo-firebase-264d4.firebaseapp.com",
  projectId: "todo-firebase-264d4",
  storageBucket: "todo-firebase-264d4.appspot.com",
  messagingSenderId: "188128216629",
  appId: "1:188128216629:web:b26e13231f9d786680d37c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);