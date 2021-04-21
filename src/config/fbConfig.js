// import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDhoce2onFehpI9QHUZqsWleQC7GLk7BJQ",
  authDomain: "collabzone-af940.firebaseapp.com",
  projectId: "collabzone-af940",
  storageBucket: "collabzone-af940.appspot.com",
  messagingSenderId: "139327890210",
  appId: "1:139327890210:web:4a8d9bec3734e5eb707b7b",
  measurementId: "G-439FTDBB3C"
};
firebase.initializeApp(firebaseConfig);

export default firebase 