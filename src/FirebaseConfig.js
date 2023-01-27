import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAby01lCg82tLLuqM5gowLcOxnvLIky7rU",
  authDomain: "spy-chat-f687d.firebaseapp.com",
  projectId: "spy-chat-f687d",
  storageBucket: "spy-chat-f687d.appspot.com",
  messagingSenderId: "187320433572",
  appId: "1:187320433572:web:e6cacfc3a1da8a4043df31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);