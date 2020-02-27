import  Rebase from "re-base";
import firebase from "firebase";


// Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBFGwobPci9G3MNv2h8YvFXAbLCYoEVRXs",
    authDomain: "catch-of-the-day-pv.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-pv.firebaseio.com",
    projectId: "catch-of-the-day-pv",
    storageBucket: "catch-of-the-day-pv.appspot.com",
    messagingSenderId: "420124809830",
    appId: "1:420124809830:web:759d3aa5dd6543fe4beba7",
    measurementId: "G-YL1V4QV4HK"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// Default export
export default base;
