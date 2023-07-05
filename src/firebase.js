import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGu7IWWkOxSbu04UJ4WD2oC1hCvIIyfsc",
  authDomain: "netflix-clone-910bd.firebaseapp.com",
  projectId: "netflix-clone-910bd",
  storageBucket: "netflix-clone-910bd.appspot.com",
  messagingSenderId: "471921712711",
  appId: "1:471921712711:web:f779d0417b90733c421b62",
  measurementId: "G-H8K17W3LHS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// export default db;
export { auth, db };
