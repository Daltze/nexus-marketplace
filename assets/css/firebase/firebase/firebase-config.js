import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnP4qhhB9GBmgs0F4Z1dYtBOpEhPd0Vo0",
  authDomain: "domingos-group-corporation.firebaseapp.com",
  projectId: "domingos-group-corporation",
  storageBucket: "domingos-group-corporation.firebasestorage.app",
  messagingSenderId: "731309206035",
  appId: "1:731309206035:web:0e2ba0153fb3828ca66de6",
  measurementId: "G-8Q81PRM258"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);