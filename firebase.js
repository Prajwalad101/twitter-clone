// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCBZRKLe5TietCuLj9pDX-XK3GQqTJ4Go4',
  authDomain: 'twitter-clone-7bec6.firebaseapp.com',
  projectId: 'twitter-clone-7bec6',
  storageBucket: 'twitter-clone-7bec6.appspot.com',
  messagingSenderId: '560926535844',
  appId: '1:560926535844:web:60f79d2204f13a5fa1f631',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
