import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPDf9gOdrGZNO_B2TulH3n0NbMfut9A-Q",
  authDomain: "fir-13456.firebaseapp.com",
  projectId: "fir-13456",
  storageBucket: "fir-13456.appspot.com",
  messagingSenderId: "892795782746",
  appId: "1:892795782746:web:bd469f4361d7a366103a63",
  measurementId: "G-THNJLEJMXV"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;