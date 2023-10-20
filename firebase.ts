import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA87x1ZahM6_CsqTf9OUMZCkyo_RJWFhes",
    authDomain: "chatgpt-project-86e58.firebaseapp.com",
    projectId: "chatgpt-project-86e58",
    storageBucket: "chatgpt-project-86e58.appspot.com",
    messagingSenderId: "1047707924291",
    appId: "1:1047707924291:web:67dd9b43f3821b8dbfe1f6"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }