import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC8PUsJkAHDkV7kUcFyZUYGd3Tkm6ZDpw8",
    authDomain: "develcode-5fbc3.firebaseapp.com",
    databaseURL: "https://develcode-5fbc3-default-rtdb.firebaseio.com",
    projectId: "develcode-5fbc3",
    storageBucket: "develcode-5fbc3.appspot.com",
    messagingSenderId: "802082682473",
    appId: "1:802082682473:web:44388131c85b62732854f8",
    measurementId: "G-Z0D873VYGS"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
