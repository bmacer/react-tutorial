import { initializeApp } from 'firebase/app';

import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcInGjah607NIpe5eBF9sWfY3_RmXqUy8",
    authDomain: "crown-clothing-db-a0b71.firebaseapp.com",
    projectId: "crown-clothing-db-a0b71",
    storageBucket: "crown-clothing-db-a0b71.appspot.com",
    messagingSenderId: "333117669366",
    appId: "1:333117669366:web:de341acf2d84d76b7f91d7"
  };
  
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);