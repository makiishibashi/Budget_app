// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDFlMDbKmsWFPaJpBwXPiWxy5zF9QBG7tU",
    authDomain: "assignment-a15ef.firebaseapp.com",
    projectId: "assignment-a15ef",
    storageBucket: "assignment-a15ef.appspot.com",
    messagingSenderId: "956291081653",
    appId: "1:956291081653:web:463ed5b6eb1663e511a5fc"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// db.collection('todos').getDocs();
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

//Detect auth state
// 