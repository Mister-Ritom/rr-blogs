import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
/*
const config = {
    apiKey: "AIzaSyC-41SBjWjCLmxlWwGiVXZvVIstSUzVHdc",
    authDomain: "rr-blogs.firebaseapp.com",
    projectId: "rr-blogs",
    storageBucket: "rr-blogs.appspot.com",
    messagingSenderId: "42204843256",
    appId: "1:42204843256:web:24333076f9346f104cbf0d",
    measurementId: "G-E3F8YJ23LV"
  };
*/
const betaConfig = {
  apiKey: "AIzaSyCZz_DTO6l3Y9dK6M-YROsgFchalStjdfA",
  authDomain: "rr-blogs-beta.firebaseapp.com",
  projectId: "rr-blogs-beta",
  storageBucket: "rr-blogs-beta.appspot.com",
  messagingSenderId: "105584219354",
  appId: "1:105584219354:web:91e8cfa70f6eb3bab381e3",
  measurementId: "G-REPL4H62ZZ"
};

const app = initializeApp(betaConfig)
export const db = getFirestore(app);
export const auth = getAuth(app);