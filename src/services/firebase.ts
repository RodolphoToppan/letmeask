import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAuGdImPdR7--VG7lDa9MmVreRd4Si6lYs",
  authDomain: "letmeask-491d4.firebaseapp.com",
  databaseURL: "https://letmeask-491d4-default-rtdb.firebaseio.com",
  projectId: "letmeask-491d4",
  storageBucket: "letmeask-491d4.appspot.com",
  messagingSenderId: "929079560482",
  appId: "1:929079560482:web:cbf3d0b120971ebd287d7b"
};

firebase.initializeApp(firebaseConfig);
 
const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }; 