import React from "react";
import ToDoList from "ToDoList";

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: "Walk the Dog"
        },
        {
          id: 2,
          text: "Clean the yard"
        },
        {
          id: 3,
          text: "Do the dishes"
        },
        {
          id: 4,
          text: "Mop the floors"
        }
      ]
    };
  },
  render: function() {
    var { todos } = this.state;

    return <div><ToDoList todos={todos} /> </div>;
  }
});

module.exports = ToDoApp;
