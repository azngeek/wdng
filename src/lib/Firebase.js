
	// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { collection, doc, getFirestore } from "firebase/firestore/lite";
import { onAuthStateChanged } from 'firebase/auth';


const firebaseConfig = {
	apiKey: 'AIzaSyCLrI9U-K4CnhdymwLOS2yMkSva0ABoQpo',
	authDomain: 'amandine-and-sebi.firebaseapp.com',
	projectId: 'amandine-and-sebi',
	storageBucket: 'amandine-and-sebi.appspot.com',
	messagingSenderId: '556000338897',
	appId: '1:556000338897:web:8438f94b3b9832bfd5b6f0',
	measurementId: 'G-HHWV3HRXX8'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db = getFirestore(app);
const userDoc = (userId) => doc(db, "users", userId)




export { auth, signOut, userDoc };