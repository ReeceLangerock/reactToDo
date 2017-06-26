import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import ToDoList from "ToDoList";
import ToDo from "ToDo";

describe("ToDoList", () => {
  it("should exist", () => {
    expect(ToDoList).toExist();
  });

  it("should render one ToDo component for each todo item", () => {
    var todos = [
      {
        id: 1,
        text: "Walk the Dog"
      },
      {
        id: 2,
        text: "Clean the yard"
      }
    ];

    var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(
      todoList,
      ToDo
    );

    expect(todosComponents.length).toBe(2);
  });

  it("should render empty message if no todos", () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
