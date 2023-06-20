import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCHiKvHfNzio3uZRAYifkJV5HtCA57MZu0",
  authDomain: "nextjs-firebase-auth-8402f.firebaseapp.com",
  projectId: "nextjs-firebase-auth-8402f",
  storageBucket: "nextjs-firebase-auth-8402f.appspot.com",
  messagingSenderId: "312955500660",
  appId: "1:312955500660:web:ebe553a4a97fd59c243921",
  measurementId: "G-PXH5N5JYNB"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth()
