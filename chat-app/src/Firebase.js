// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"; 
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBTMyAQGabR5EJ-O9dE095u4jeKVdmnfrs",
    authDomain: "chat-app-12d41.firebaseapp.com",
    projectId: "chat-app-12d41",
    storageBucket: "chat-app-12d41.appspot.com",
    messagingSenderId: "134198013647",
    appId: "1:134198013647:web:9a331e1096c8ad125651ba"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const googleAuthProvider = new GoogleAuthProvider();
//   const db = getFirestore(app);

//   export {db};

  export default app;