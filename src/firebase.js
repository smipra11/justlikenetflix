import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDppnFAOMm_ZCTo6xNeFUmsrVS5ezT6ct8",
    authDomain: "justlikenetflix-67ced.firebaseapp.com",
    projectId: "justlikenetflix-67ced",
    storageBucket: "justlikenetflix-67ced.appspot.com",
    messagingSenderId: "873812296322",
    appId: "1:873812296322:web:c98b4686385a23e6d2ea9b"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();




const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  logout,
  createUserWithEmailAndPassword,signInWithEmailAndPassword,
onAuthStateChanged
};