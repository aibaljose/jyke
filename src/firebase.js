
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHjbPVRusWw-2t84RrMod53leyuRqis2I",
    authDomain: "jyke-b8089.firebaseapp.com",
    projectId: "jyke-b8089",
    storageBucket: "jyke-b8089.appspot.com",
    messagingSenderId: "356897407881",
    appId: "1:356897407881:web:522ca48e1a510e667ed758"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
export const auth = getAuth(app);

export const firestore = getFirestore(app);
