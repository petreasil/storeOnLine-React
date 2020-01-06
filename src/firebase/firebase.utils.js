import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyByEwkplDaoxWVOEMKYiUDVo3IRlFVqWYU",
  authDomain: "store-db-81417.firebaseapp.com",
  databaseURL: "https://store-db-81417.firebaseio.com",
  projectId: "store-db-81417",
  storageBucket: "store-db-81417.appspot.com",
  messagingSenderId: "267737739263",
  appId: "1:267737739263:web:151dcc1bb78ec5f13c41ca"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
