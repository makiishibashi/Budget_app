// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyDFlMDbKmsWFPaJpBwXPiWxy5zF9QBG7tU",
//     authDomain: "assignment-a15ef.firebaseapp.com",
//     projectId: "assignment-a15ef",
//     storageBucket: "assignment-a15ef.appspot.com",
//     messagingSenderId: "956291081653",
//     appId: "1:956291081653:web:463ed5b6eb1663e511a5fc"
//   };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  
  // v9 compat packages are API compatible with v8 code
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  
  //認証関数のリファクタリング
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  const auth = getAuth(firebaseApp);
  onAuthStateChanged(auth, user => {
    // Check for user status
  });


  //CloudFirestore関数のリファクタリング
  import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

  const db = getFirestore(firebaseApp);

  const q = query(collection(db, "cities"), where("capital", "==", true));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

// const db = getFirestore(app);

//グローバル
var x2,x3
  
//Firebaseに値を追加
document.getElementById("form1").addEventListener("submit",(e)=>{
  e.preventDefault();
  var budget={budget:document.getElementById("budgetFirebase").value};
  firebase.database().ref("budgetapp/budget").set(budget);
  document.getElementById("budgetFirebase").value="";
});
document.getElementById("form2").addEventListener("submit",(e)=>{
  e.preventDefault();
  var expenses={expenses:document.getElementById("expensesFirebase").value};
  firebase.database().ref("budgetapp/expenses").set(expenses);
  document.getElementById("expensesFirebase").value="";
});

//値の読み込み
function read() {
  firebase.database().ref("budggetapp/budget").child("budget").on("value", function (value) {
    document.getElementById("budget").innerHTML = `${value.val()}`;
    x2 = value.val();
    document.getElementById("chart").innerHTML = `<canvas id="myChart"></canvas>`;
    let ctx = document.getElementById("myChart").getContext('2d');
  })
}


 export default 'default export';