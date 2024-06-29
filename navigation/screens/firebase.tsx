// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//for auth

import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyDSCFsGCVw_j1iklcAZ3NJ2TKEY6v6rbuk",
  authDomain: "mobeen-dfd9b.firebaseapp.com",
  projectId: "mobeen-dfd9b",
  storageBucket: "mobeen-dfd9b.appspot.com",
  messagingSenderId: "747779468661",
  appId: "1:747779468661:web:eaa485a4df02df36d6773c",
  measurementId: "G-PPV18D5QVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const  auth = getAuth(app);

export  {app, auth};