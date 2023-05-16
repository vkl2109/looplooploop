// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1CSQS0SnFGIOT_YNRDNLjCAlwionhktI",
  authDomain: "looplooploop-5c4cb.firebaseapp.com",
  projectId: "looplooploop-5c4cb",
  storageBucket: "looplooploop-5c4cb.appspot.com",
  messagingSenderId: "690670348112",
  appId: "1:690670348112:web:074dd238b9ebe3435fae55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };