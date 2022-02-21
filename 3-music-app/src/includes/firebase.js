import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEgLcmMikUVeAs3QUl4BUINCST3OvT45U",
  authDomain: "music-auth-app.firebaseapp.com",
  projectId: "music-auth-app",
  storageBucket: "music-auth-app.appspot.com",
  appId: "1:40120595191:web:308763e13d282c7c3e59f2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const userCollection = db.collection("users");

export { auth, db, userCollection };
