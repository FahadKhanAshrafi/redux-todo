import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBTa-nF0QWKnrGLBNMz4Zffo2kwDmtIs3Q",
    authDomain: "reduxtodo-31731.firebaseapp.com",
    databaseURL: "https://reduxtodo-31731.firebaseio.com",
    projectId: "reduxtodo-31731",
    storageBucket: "",
    messagingSenderId: "727447186320"
  };
const fireBase = firebase.initializeApp(config);
export default fireBase;