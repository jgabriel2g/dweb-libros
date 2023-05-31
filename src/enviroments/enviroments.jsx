import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBF__661tqB3-QDysc2PgHlKWMUZBlZDQE",
    authDomain: "dweb-lb.firebaseapp.com",
    projectId: "dweb-lb",
    storageBucket: "dweb-lb.appspot.com",
    messagingSenderId: "270704806716",
    appId: "1:270704806716:web:cd135b06b196bc87272c39"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const auth = getAuth(app);
