import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";
var { Provider } = require("react-redux");

import { configure } from "configureStore";
import ConnectedToDoList, { ToDoList } from "ToDoList";
import ConnectedToDo, { ToDo } from "ToDo";

describe("ToDoList", () => {
  it("should exist", () => {
    expect(ToDoList).toExist();
  });

  it("should render one ToDo component for each todo item", () => {
    var todos = [
      {
        id: 1,
        text: "Walk the Dog",
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: "Clean the yard",
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];

    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}><ConnectedToDoList /></Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(
      todoList,
      ConnectedToDo
    );

    expect(todosComponents.length).toBe(todos.length);
  });

  it("should render empty message if no todos", () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find(".container__message").length).toBe(1);
  });
});
