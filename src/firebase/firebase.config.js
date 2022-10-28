// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCif84yke0WPDRUG6Rb71QTceai_hjTuAg",
  // authDomain: "learn-code-f6971.firebaseapp.com",
  // projectId: "learn-code-f6971",
  // storageBucket: "learn-code-f6971.appspot.com",
  // messagingSenderId: "92734112687",
  // appId: "1:92734112687:web:0c7af043b61517b80ba55a"
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);