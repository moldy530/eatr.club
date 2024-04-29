// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = import.meta.env.DEV
  ? {
      apiKey: "AIzaSyDggnZnmHhXlchEM9LK8HPaz8PGUBnv7_c",
      authDomain: "dev-eatr-club-5b388.firebaseapp.com",
      projectId: "dev-eatr-club-5b388",
      storageBucket: "dev-eatr-club-5b388.appspot.com",
      messagingSenderId: "205639988021",
      appId: "1:205639988021:web:4bf81fa54e9d8d66bf527c",
    }
  : {
      apiKey: "AIzaSyADQepNDM8BBsL8iG6AnKsCmbjUnG_Mv74",
      authDomain: "dev-eatr-club.firebaseapp.com",
      projectId: "dev-eatr-club",
      storageBucket: "dev-eatr-club.appspot.com",
      messagingSenderId: "941863095182",
      appId: "1:941863095182:web:5c253bda13ff24c72af2df",
      measurementId: "G-MHXKZE9F9T",
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
