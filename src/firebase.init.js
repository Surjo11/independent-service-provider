// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfulf1b-pgtCSa-7hF6gSD2m9vJD7dnzk",
  authDomain: "wedding-photography-32f2e.firebaseapp.com",
  projectId: "wedding-photography-32f2e",
  storageBucket: "wedding-photography-32f2e.appspot.com",
  messagingSenderId: "102023824403",
  appId: "1:102023824403:web:83e469ac1f8846c3a82be6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
