import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import ToDoSearch from "ToDoSearch";

describe("ToDoSearch", () => {
  it("should exist", () => {
    expect(ToDoSearch).toExist();
  });

  it("should call onSearch with entered input text", () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(
      <ToDoSearch onSearch={spy} />
    );
    var searchText = "Dog";

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, "Dog");
  });

  it("should call onSearch with proper checked value", () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(
      <ToDoSearch onSearch={spy} />
    );
    var searchText = "";

    todoSearch.refs.searchText.value = searchText;
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, "");
  });
});
