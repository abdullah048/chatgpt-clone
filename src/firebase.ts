// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmYy6P0g18_CduDX7SnH3ZL9J_ZBgbOKg',
  authDomain: 'chatgpt-clone-6b5ea.firebaseapp.com',
  projectId: 'chatgpt-clone-6b5ea',
  storageBucket: 'chatgpt-clone-6b5ea.appspot.com',
  messagingSenderId: '745683371713',
  appId: '1:745683371713:web:66d9f0e4f7a3e88459b640',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
