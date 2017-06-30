var React = require("react");
var ReactDOM = require("react-dom");
var { Provider } = require("react-redux");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");

import ToDoApp from "ToDoApp";
// Load foundation

var actions = require("actions");
var store = require("configureStore").configure();
var ToDoAPI = require("ToDoAPI");

store.subscribe(() => {
  var state = store.getState();
  console.log("New State", store.getState());
  ToDoAPI.setToDos(state.todos);
});

var initialTodos = ToDoAPI.getToDos();
store.dispatch(actions.addToDos(initialTodos));

$(document).foundation();

// App css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById("app")
);
