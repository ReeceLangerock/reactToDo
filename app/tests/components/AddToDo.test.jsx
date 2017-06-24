import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import AddToDo from "AddToDo";

describe("AddToDo", () => {
  it("should exist", () => {
    expect(AddToDo).toExist();
  });

  it('should call onAddToDo if valid text entered', () => {
    var spy = expect.createSpy();

    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo onAddToDo ={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDoForm));

    addToDoForm.refs.todo.value = 'test';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith('test');
  });

  it('should not call onAddToDo if invalid text entered', () => {
    var spy = expect.createSpy();

    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo onAddToDo ={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDoForm));

    addToDoForm.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });

});
