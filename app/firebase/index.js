import firebase from "firebase";

try {
  var config = {
    apiKey: "AIzaSyDK6IepV8kIUBNpKkhE1SPJons0S2vJizo",
    authDomain: "reacttodo-90c8e.firebaseapp.com",
    databaseURL: "https://reacttodo-90c8e.firebaseio.com",
    projectId: "reacttodo-90c8e",
    storageBucket: "",
    messagingSenderId: "459061846045"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
