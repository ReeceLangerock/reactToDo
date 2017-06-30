import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import { ToDoSearch } from "ToDoSearch";

describe("ToDoSearch", () => {
  it("should exist", () => {
    expect(ToDoSearch).toExist();
  });

  it("should dispatch SET_SEARCH_TEXT on input change", () => {
    var spy = expect.createSpy();
    var searchText = "Dog";
    var todoSearch = TestUtils.renderIntoDocument(
      <ToDoSearch dispatch={spy} />
    );
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText
    };

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it("should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(
      <ToDoSearch dispatch={spy} />
    );

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
