var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require("react-router");

import ToDoApp from "ToDoApp";
// Load foundation

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState());

})

$(document).foundation();

// App css
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Provider store ={store}>
      <ToDoApp/>
    </Provider>,
    document.getElementById('app')


);
