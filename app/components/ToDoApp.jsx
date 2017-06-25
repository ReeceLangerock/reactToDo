"use strict";
import React from "react";
import uuid from "node-uuid";

import ToDoList from "ToDoList";
import AddToDo from "AddToDo";
import ToDoSearch from "ToDoSearch";
import ToDoAPI from "ToDoAPI";

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: "",
      todos: ToDoAPI.getToDos()
    };
  },
  componentDidUpdate: function() {
    ToDoAPI.setToDos(this.state.todos);
  },
  handleAddToDo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function(id) {
    var updatedToDos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos: updatedToDos });
  },
  handleSearch: function(showCompleted, searchText) {

    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var { todos, showCompleted, searchText } = this.state;
    var filteredToDos = ToDoAPI.filterToDos(todos, showCompleted, searchText);

    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch} />
        <ToDoList todos={filteredToDos} onToggle={this.handleToggle} />
        <AddToDo onAddToDo={this.handleAddToDo} />
      </div>
    );
  }
});

module.exports = ToDoApp;
