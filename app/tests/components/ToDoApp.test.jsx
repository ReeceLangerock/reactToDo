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

  it('should add todo to the todos state on handle add todo', () => {
    var todoText = "Test Todo"
    var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>)

    todoApp.setState({todos: []})
    todoApp.handleAddToDo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  })
});
