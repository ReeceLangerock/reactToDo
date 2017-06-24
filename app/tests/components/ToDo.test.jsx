import React from "react";
import ReactDOM from "react-dom";
import expect from 'expect';
import $ from 'jquery';
import TestUtils from "react-addons-test-utils";

import ToDo from 'ToDo'

describe("ToDo", () =>{
  it("should exist", () => {

    expect(ToDo).toExist();
  });
  it("should call onToggle prop with id on click", () => {
    var todoData = {
      id: 199,
      text: "write todo.test.jsx test",
      completed: false
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<ToDo {...todoData} onToggle ={spy} />);


    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);


    expect(spy).toHaveBeenCalledWith(199);

  });

});
