// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2nLbPKO6ht12VjLYK3fKS7PEsw7mXzgA",
  authDomain: "hspantryapp-cc81f.firebaseapp.com",
  projectId: "hspantryapp-cc81f",
  storageBucket: "hspantryapp-cc81f.appspot.com",
  messagingSenderId: "939761506790",
  appId: "1:939761506790:web:b37f6f5e7557d87dc29e27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firebaseConfig, firestore}