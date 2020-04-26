  import firebase from 'firebase/app';
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var fbConfig = {
    apiKey: "AIzaSyDn7_1aAo8x0z8yYLI-Hia7dxNg2IahFo4",
    authDomain: "marioplan-15c2a.firebaseapp.com",
    databaseURL: "https://marioplan-15c2a.firebaseio.com",
    projectId: "marioplan-15c2a",
    storageBucket: "marioplan-15c2a.appspot.com",
    messagingSenderId: "216433530547",
    appId: "1:216433530547:web:9f1b3936ee43dda14102c6"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });


  export {firebase, fbConfig};