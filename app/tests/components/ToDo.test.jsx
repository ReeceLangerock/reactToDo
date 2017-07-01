import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import * as actions from "actions";
import { ToDo } from "ToDo";

describe("ToDo", () => {
  it("should exist", () => {
    expect(ToDo).toExist();
  });
  it("should dispatch TOGGLE_TODO action id on click", () => {
    var todoData = {
      id: 199,
      text: "write todo.test.jsx test",
      completed: false
    };
    var action = actions.startToDo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(
      <ToDo {...todoData} dispatch={spy} />
    );

    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
