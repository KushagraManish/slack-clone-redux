// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQ5KL8oeNJPDLiaCfG9XF5n1gp_I7NhrM",
  authDomain: "slack-clone-kushu.firebaseapp.com",
  projectId: "slack-clone-kushu",
  storageBucket: "slack-clone-kushu.appspot.com",
  messagingSenderId: "159431511974",
  appId: "1:159431511974:web:546d341c328c9da06f8967",
  measurementId: "G-XBV6CS0EBD"
};

// eslint-disable-next-line 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };