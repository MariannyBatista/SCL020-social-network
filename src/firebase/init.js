import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

import firebaseConfig from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { initializeApp, signInWithEmailAndPassword, auth, db };
