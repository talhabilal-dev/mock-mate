import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEAN8EuioGoBCgiZAkz5AKHxZ9Odp8Y1s",
    authDomain: "ai-mock-interviews-da7d0.firebaseapp.com",
    projectId: "ai-mock-interviews-da7d0",
    storageBucket: "ai-mock-interviews-da7d0.firebasestorage.app",
    messagingSenderId: "1074560333255",
    appId: "1:1074560333255:web:273dca831262e213bb95e2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
