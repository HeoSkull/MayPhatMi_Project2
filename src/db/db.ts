import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAD9tUynIMW9JhHLprlyh39DX6YZYJ_zQs",
  authDomain: "mayphatmiproject2-a457b.firebaseapp.com",
  projectId: "mayphatmiproject2-a457b",
  storageBucket: "mayphatmiproject2-a457b.appspot.com",
  messagingSenderId: "185053183112",
  appId: "1:185053183112:web:f435c2701f7ab4058a333d",
  measurementId: "G-C0CB39L6TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export {db,storage,app, auth};