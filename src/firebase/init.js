import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAUmEawDEdisWn9JZrKU99_M2dCOLBzYK0",
    authDomain: "smoothies-79a47.firebaseapp.com",
    databaseURL: "https://smoothies-79a47.firebaseio.com",
    projectId: "smoothies-79a47",
    storageBucket: "smoothies-79a47.appspot.com",
    messagingSenderId: "491421487962"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

// export firestore database
export default firebaseApp.firestore()