import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTO0zOfpB7QN4v1p-dnLFMbgSY6khJ3V0",
  authDomain: "vango-food-del.firebaseapp.com",
  projectId: "vango-food-del",
  storageBucket: "vango-food-del.firebasestorage.app",
  messagingSenderId: "173302152018",
  appId: "1:173302152018:web:6123d15858bad5421c588b"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}
