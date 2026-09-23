import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIUviu50yTe987l9f7xYhcJV-3pgL1Xas",
  authDomain: "easteease.firebaseapp.com",
  projectId: "easteease",
  storageBucket: "easteease.firebasestorage.app",
  messagingSenderId: "572131978285",
  appId: "1:572131978285:web:6d9429e504af4bf1a85ca4",
  measurementId: "G-GV91V2F6XW"
};

// Avoid re-initializing on hot reload / multiple imports
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// googleProvider.setCustomParameters({
//     prompt: "select account" 
// })