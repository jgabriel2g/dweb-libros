import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuxAfYaWwInde9G5MrJnJWnk2i_BsO-2E",
    authDomain: "dweb-libros.firebaseapp.com",
    projectId: "dweb-libros",
    storageBucket: "dweb-libros.appspot.com",
    messagingSenderId: "925671644045",
    appId: "1:925671644045:web:60b275a3ec82e5c2edfbc4"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const auth = getAuth(app);
