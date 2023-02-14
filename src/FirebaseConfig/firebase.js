// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO8nu0NswxG27L7K7KhjfXDZxXfDNLfzs",
  authDomain: "ecommerce-impresion3d.firebaseapp.com",
  projectId: "ecommerce-impresion3d",
  storageBucket: "ecommerce-impresion3d.appspot.com",
  messagingSenderId: "286483272419",
  appId: "1:286483272419:web:8e1bac6045dc47b918abd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)