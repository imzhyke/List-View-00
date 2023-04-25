import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABeuB4_uhOWFtRT_YP-fzJ_gQeaFc-vOM",
  authDomain: "firestore-listview.firebaseapp.com",
  projectId: "firestore-listview",
  storageBucket: "firestore-listview.appspot.com",
  messagingSenderId: "369772101394",
  appId: "1:369772101394:web:98c0422d71497bc2a37dcb",
  measurementId: "G-24XSTNXX2D"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };