import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABTpTNeCLbdazcA21SYjfvrCXM-NiQfiE",
  authDomain: "gmlinks-248f1.firebaseapp.com",
  projectId: "gmlinks-248f1",
  storageBucket: "gmlinks-248f1.appspot.com",
  messagingSenderId: "776717719027",
  appId: "1:776717719027:web:be440fb664bd8d3c986e86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
