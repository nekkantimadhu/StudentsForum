import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDNlJdpB4u4VmjDGNjgymfFwmpl1i8yAtM",
    authDomain: "studentsforum-b55c3.firebaseapp.com",
    projectId: "studentsforum-b55c3",
    storageBucket: "studentsforum-b55c3.appspot.com",
    messagingSenderId: "871752866311",
    appId: "1:871752866311:web:64cec39894551febaba8a2"
}).auth()