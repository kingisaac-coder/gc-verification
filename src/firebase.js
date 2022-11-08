import Firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJLljXbZRd3KirTYOK81IfCWSyfZV15Pc",
  authDomain: "gcverification.firebaseapp.com",
  projectId: "gcverification",
  storageBucket: "gcverification.appspot.com",
  messagingSenderId: "750013185911",
  appId: "1:750013185911:web:fbe0e899cf2ee6dc54eb72",
  measurementId: "G-847LVRK0D1",
};
const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
