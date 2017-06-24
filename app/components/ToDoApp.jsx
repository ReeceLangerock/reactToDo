"use strict";
import React from "react";
import ToDoList from "ToDoList";
import AddToDo from "AddToDo";
import ToDoSearch from "ToDoSearch";
import uuid from 'node-uuid';

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
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
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var { todos } = this.state;

    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch} />
        <ToDoList todos={todos} />
        <AddToDo onAddToDo={this.handleAddToDo} />
      </div>
    );
  }
});

module.exports = ToDoApp;
