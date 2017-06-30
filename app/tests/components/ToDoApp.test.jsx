import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";
var { Provider } = require("react-redux");

var configureStore = require("configureStore");
import ToDoList  from "ToDoList";
import ToDoApp from "ToDoApp";

describe("ToDoApp", () => {
  it("should exist", () => {
    expect(ToDoApp).toExist();
  });

  it("should render ToDoList", () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}><ToDoApp /></Provider>


    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, ToDoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, ToDoList);

    expect(todoList.length).toEqual(1);
  });
});
