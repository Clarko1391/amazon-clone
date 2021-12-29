// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// TODO: Refactor to store config in React-env / consider deployment

const firebaseConfig = {

  apiKey: "AIzaSyAS_goOCJiOaz6xwuIlZD1q9k7F4GI2W8k",

  authDomain: "sc-clone-343d1.firebaseapp.com",

  projectId: "sc-clone-343d1",

  storageBucket: "sc-clone-343d1.appspot.com",

  messagingSenderId: "1043961186384",

  appId: "1:1043961186384:web:3a68db3994a6376812e955",

  measurementId: "G-HEJ7C71YXV"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export { db, auth }