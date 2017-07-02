"use strict";
import React from "react";
import * as Redux from 'react-redux';

import * as actions from 'actions';
import ToDoList from "ToDoList";
import AddToDo from "AddToDo";
import ToDoSearch from "ToDoSearch";

export var ToDoApp = React.createClass({
  onLogout(e) {
    e.preventDefault();
    var {dispatch} = this.props;

    dispatch(actions.startLogout());
  },
  render() {
    return (
      <div>
        <div className ="page-actions">
          <a href ="#" onClick={this.onLogout}>Logout</a>
        </div>
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

export default Redux.connect()(ToDoApp);
