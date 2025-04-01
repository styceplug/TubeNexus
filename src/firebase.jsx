import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyAHQcPFFSCKdDQpcqfTiKmjCdkT38G2ybA",
    authDomain: "distro-90045.firebaseapp.com",
    projectId: "distro-90045",
    storageBucket: "distro-90045.appspot.com",
    messagingSenderId: "264920780921",
    appId: "1:264920780921:web:1ddb9d26d3bc18c1dcc4a8",
    measurementId: "G-D024G8V98P"
};

// Check if Firebase has already been initialized
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = app.firestore(); // Initialize Firestore and export it

