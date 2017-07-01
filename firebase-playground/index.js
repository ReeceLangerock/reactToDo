import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDK6IepV8kIUBNpKkhE1SPJons0S2vJizo",
  authDomain: "reacttodo-90c8e.firebaseapp.com",
  databaseURL: "https://reacttodo-90c8e.firebaseio.com",
  projectId: "reacttodo-90c8e",
  storageBucket: "",
  messagingSenderId: "459061846045"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  isRunning: true,
  user: {
    name: "Reece",
    age: 29
  },
  app: {
    name: "ToDo App",
    version: "1.0.0"
  }
});

var todosRef = firebaseRef.child('todos');


todosRef.on('child_added', (snapshot) => {
  console.log("Todo added:", snapshot.key, snapshot.val());
})


todosRef.push({ name: "Walk the dog"});
todosRef.push({ name: "Brush Teeth"});
