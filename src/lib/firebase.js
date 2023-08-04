import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC-41SBjWjCLmxlWwGiVXZvVIstSUzVHdc",
    authDomain: "rr-blogs.firebaseapp.com",
    projectId: "rr-blogs",
    storageBucket: "rr-blogs.appspot.com",
    messagingSenderId: "42204843256",
    appId: "1:42204843256:web:24333076f9346f104cbf0d",
    measurementId: "G-E3F8YJ23LV"
  };
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
export const auth = getAuth(app);