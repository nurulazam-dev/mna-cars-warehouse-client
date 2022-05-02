// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    /* apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId, */ 

    
  apiKey: "AIzaSyDZnVZKIj232N8kWSBkg3LoNDfps9Bj86k",
  authDomain: "mna-cars-warehouse.firebaseapp.com",
  projectId: "mna-cars-warehouse",
  storageBucket: "mna-cars-warehouse.appspot.com",
  messagingSenderId: "1042997612322",
  appId: "1:1042997612322:web:ef23db85bbf7c1b9499f7b" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default (auth);