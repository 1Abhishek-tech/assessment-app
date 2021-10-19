import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM5MaG8p1NLM3NYl2qEKIhwrNQAvxMCyU",
  authDomain: "authenticate-assessment.firebaseapp.com",
  projectId: "authenticate-assessment",
  storageBucket: "authenticate-assessment.appspot.com",
  messagingSenderId: "491017738612",
  appId: "1:491017738612:web:7026aeacb7592692c0b421",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
