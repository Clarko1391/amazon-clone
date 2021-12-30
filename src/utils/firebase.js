// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// TODO: Refactor to store config in React-env / consider deployment

const env = process.env;

const firebaseConfig = {

  apiKey: env.REACT_APP_API_KEY,

  authDomain: env.REACT_APP_AUTH_DOMAIN,

  projectId: env.REACT_APP_PROJECT_ID,

  storageBucket: env.REACT_APP_STORAGE_BUCKET,

  messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,

  appId: env.REACT_APP_APP_ID,

  measurementId: env.REACT_APP_MEASUREMENT_ID

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export { db, auth }