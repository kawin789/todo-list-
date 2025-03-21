import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBrjm5Ba0nVDSjKB3JA6Uor1fDPWa9gJ4c",
  authDomain: "to-do-list-9ee9a.firebaseapp.com",
  projectId: "to-do-list-9ee9a",
  storageBucket: "to-do-list-9ee9a.firebasestorage.app",
  messagingSenderId: "923805312301",
  appId: "1:923805312301:web:68f8f2457f0014722c5fa4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);