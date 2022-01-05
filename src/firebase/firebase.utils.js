import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAabXFKHS08WWMWymA1cepIIV4V87Jtcmw",
  authDomain: "kuko-visuals.firebaseapp.com",
  projectId: "kuko-visuals",
  storageBucket: "kuko-visuals.appspot.com",
  messagingSenderId: "126345264642",
  appId: "1:126345264642:web:d1f0da73945ac70673b11b",
  measurementId: "G-BS62BHPKD8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
