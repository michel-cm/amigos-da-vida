import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { getStorage, ref } from "firebase/storage";

import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC6vUaTmM9sl5swqj1_hW7UCbwV31nLigM",
  authDomain: "amigosdavida-ba2f8.firebaseapp.com",
  projectId: "amigosdavida-ba2f8",
  storageBucket: "amigosdavida-ba2f8.appspot.com",
  messagingSenderId: "60680727433",
  appId: "1:60680727433:web:7342cb1ad48f47688f0f58",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();
const storage = getStorage();

export { firebase, auth, storage, ref, database };
