<<<<<<< HEAD
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAQcYiur1456x49u9ijX98j-CZcmbms-wE",
    authDomain: "drp1-422ee.firebaseapp.com",
    projectId: "drp1-422ee",
    storageBucket: "drp1-422ee.appspot.com",
    messagingSenderId: "138716877444",
    appId: "1:138716877444:web:0a3f985267df0b3e3fe8d1"
};

initializeApp(firebaseConfig);
const dbService = getFirestore()
export default dbService;
