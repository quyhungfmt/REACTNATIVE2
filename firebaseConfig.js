// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlnEOgZsU8URG2t2_YUspK3Rf2lqMGRzc",
  authDomain: "data-htgs.firebaseapp.com",
  projectId: "data-htgs",
  storageBucket: "data-htgs.appspot.com",
  messagingSenderId: "274431416203",
  appId: "1:274431416203:web:b1f754012b30fb7266818e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);