import React from "react";
import ToDoList from "ToDoList";
import AddToDo from "AddToDo";


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
  handleAddToDo: function(text) {
    alert("new todo: " + text);
  },
  render: function() {
    var { todos } = this.state;

    return (
      <div>
        <ToDoList todos={todos} />
        <AddToDo onAddToDo = {this.handleAddToDo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
