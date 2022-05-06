import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQcYiur1456x49u9ijX98j-CZcmbms-wE",
  authDomain: "drp1-422ee.firebaseapp.com",
  projectId: "drp1-422ee",
  storageBucket: "drp1-422ee.appspot.com",
  messagingSenderId: "138716877444",
  appId: "1:138716877444:web:0a3f985267df0b3e3fe8d1",
};


// Get a reference to the storage service, which is used to create references in your storage bucket
const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const dbService = getFirestore();
export const storage = getStorage(app);
export default dbService;
