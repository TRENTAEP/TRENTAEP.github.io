// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxBTdoc2JTVylTvIULd9uP4il3658D05M",
  authDomain: "trentaep-b22a1.firebaseapp.com",
  projectId: "trentaep-b22a1",
  storageBucket: "trentaep-b22a1.firebasestorage.app",
  messagingSenderId: "714801056227",
  appId: "1:714801056227:web:f2941326bcd18312aaf8d6",
  measurementId: "G-ZS4B0Z9RF9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

signInAnonymously(auth)
.then(() => {
    console.log("Logged in");
})
.catch((error)=>{
    console.log(error);
});
