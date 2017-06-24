import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import ToDoApp from "ToDoApp";

describe("ToDoApp", () => {
  it("should exist", () => {
    expect(ToDoApp).toExist();
  });

  it("should add todo to the todos state on handle add todo", () => {
    var todoText = "Test Todo";
    var todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

    todoApp.setState({ todos: [] });
    todoApp.handleAddToDo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it("should toggle completed value when handleToggle called", () => {
    var todoData = {
      id: 11,
      text: "test features",
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

    todoApp.setState({
      todos: [todoData]
    });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
