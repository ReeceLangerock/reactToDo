import React from "react";
import ReactDOM from "react-dom";
import expect from 'expect';
import $ from 'jquery';
import TestUtils from "react-addons-test-utils";

import ToDoApp from 'ToDoApp'

describe("ToDoApp", () =>{
  it("should exist", () => {

    expect(ToDoApp).toExist();
  });


});
