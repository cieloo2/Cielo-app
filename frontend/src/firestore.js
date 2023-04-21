import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoGXZXjUZo8YTYT3bbHYeSl75HrHcjCao",
  authDomain: "fire-app-5c753.firebaseapp.com",
  databaseURL: "https://fire-app-5c753-default-rtdb.firebaseio.com",
  projectId: "fire-app-5c753",
  storageBucket: "fire-app-5c753.appspot.com",
  messagingSenderId: "405891475335",
  appId: "1:405891475335:web:4d1e12272442dafb275522",
  measurementId: "G-ZWH23VPS56"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };