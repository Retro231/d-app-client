// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwryeipdhtXHI7zUoSh1kFSRktlKPq02s",
  authDomain: "d-test-172e9.firebaseapp.com",
  databaseURL: "https://d-test-172e9-default-rtdb.firebaseio.com",
  projectId: "d-test-172e9",
  storageBucket: "d-test-172e9.appspot.com",
  messagingSenderId: "526576179184",
  appId: "1:526576179184:web:64cae8371487733c2daf35",
  measurementId: "G-3JB2QXDK6J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// const db = getFirestore(app);
// const ques_db = getDatabase(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
export { storage };
