// import Firebase from "firebase";
import {getAuth} from "firebase/auth"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBITlkqnYTN4QxqN5bw_JdB1z1wzQrQ0aI",
  authDomain: "infinitelistha.firebaseapp.com",
  projectId: "infinitelistha",
  storageBucket: "infinitelistha.appspot.com",
  messagingSenderId: "828547715915",
  appId: "1:828547715915:web:e3770c61138d81bf518ece",
  measurementId: "G-LMHWPHKBJ4"
};


const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
