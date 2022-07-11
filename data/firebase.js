// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFE5TtHpBuQJYSW7pEHJ7RlMsKvIVpkIg",
  authDomain: "react-http-91fc5.firebaseapp.com",
  databaseURL: "https://react-http-91fc5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-http-91fc5",
  storageBucket: "react-http-91fc5.appspot.com",
  messagingSenderId: "251609596761",
  appId: "1:251609596761:web:f2a76b9b0c9b0173c60248"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const storage = getStorage(app)