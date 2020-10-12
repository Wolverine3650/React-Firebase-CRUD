import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAwSDL6Hi4WJgKd4mJynLqnfcpHiZOpFD0",
  authDomain: "react-crud-cfef6.firebaseapp.com",
  databaseURL: "https://react-crud-cfef6.firebaseio.com",
  projectId: "react-crud-cfef6",
  storageBucket: "react-crud-cfef6.appspot.com",
  messagingSenderId: "799761774920",
  appId: "1:799761774920:web:03a0942ecc9cc504535b7d",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
