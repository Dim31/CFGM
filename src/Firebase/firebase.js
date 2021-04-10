import firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/firestore";
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDtqaoORXrYE5irEmqrXXslZSvKsD4_eMg",
    authDomain: "cfgm-860cc.firebaseapp.com",
    projectId: "cfgm-860cc",
    storageBucket: "cfgm-860cc.appspot.com",
    messagingSenderId: "156881338365",
    appId: "1:156881338365:web:5a95e081399045c1ed2394",
    measurementId: "G-58FQ7TL61E"
};

const Firebase = firebase.initializeApp(firebaseConfig)
export default Firebase