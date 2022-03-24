import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCwSc8wkBegdhVzxXgUJqGmnPuiQmGCUIM",
  authDomain: "setouchi-web-app.firebaseapp.com",
  projectId: "setouchi-web-app",
  storageBucket: "setouchi-web-app.appspot.com",
  messagingSenderId: "480976356052",
  appId: "1:480976356052:web:e836ccb875360645643141",
  measurementId: "G-CENMEQ3CLZ",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
