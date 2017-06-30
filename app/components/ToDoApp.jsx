"use strict";
import React from "react";
import uuid from "node-uuid";
import moment from "moment";

import ToDoList from "ToDoList";
import AddToDo from "AddToDo";
import ToDoSearch from "ToDoSearch";

var ToDoApp = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="page-title">ToDo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <ToDoSearch />
              <ToDoList />
              <AddToDo />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ToDoApp;
