import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmXe93szYYdGUNVla7VqRpQK-tKLIdkOg",
  authDomain: "summertraining-403de.firebaseapp.com",
  projectId: "summertraining-403de",
  storageBucket: "summertraining-403de.appspot.com",
  messagingSenderId: "215791559417",
  appId: "1:215791559417:web:3fd07f777eeaa04b06b828",
  measurementId: "G-WMWR6FQ3XR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
