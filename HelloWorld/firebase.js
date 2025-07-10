// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCdqmF-7YrpQuroTL0Eo4iLYZ16XiHn0_c",
    authDomain: "glad-dev-ccec4.firebaseapp.com",
    projectId: "glad-dev-ccec4",
    storageBucket: "glad-dev-ccec4.firebasestorage.app",
    messagingSenderId: "585940799302",
    appId: "1:585940799302:web:04768a33f06e8a4eac9f47",
    measurementId: "G-FMYL7S3Y10"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Connexion anonyme automatique
signInAnonymously(auth)
    .then(() => console.log("Connecté à Firebase"))
    .catch((error) => console.error("Erreur Firebase:", error));
