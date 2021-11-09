import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0eJhia42uWQqmIkXeiCdQCcnBjgPdWlw",
    authDomain: "snapchat-clone-102ed.firebaseapp.com",
    projectId: "snapchat-clone-102ed",
    storageBucket: "snapchat-clone-102ed.appspot.com",
    messagingSenderId: "946594022969",
    appId: "1:946594022969:web:ee98dd4aacb3de007eafe8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };