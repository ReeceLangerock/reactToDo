"use strict";
import React from "react";
import uuid from "node-uuid";
import moment from "moment";

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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
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
        <h1 className = "page-title">ToDo App</h1>
        <div className = "row">
          <div className = "column small-centered small-11 medium-6 large-5">
            <div className = "container">
              <ToDoSearch onSearch={this.handleSearch} />
              <ToDoList/>
              <AddToDo onAddToDo={this.handleAddToDo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ToDoApp;
