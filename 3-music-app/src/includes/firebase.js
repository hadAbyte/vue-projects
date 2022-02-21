import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEgLcmMikUVeAs3QUl4BUINCST3OvT45U",
  authDomain: "music-auth-app.firebaseapp.com",
  projectId: "music-auth-app",
  storageBucket: "music-auth-app.appspot.com",
  appId: "1:40120595191:web:308763e13d282c7c3e59f2",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
