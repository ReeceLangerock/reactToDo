import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";
var {AddToDo} = require('AddToDo');
import * as actions from 'actions';
//import {AddToDo} from "AddToDo";

describe("AddToDo", () => {
  it("should exist", () => {
    expect(AddToDo).toExist();
  });

  it('should dispatch ADD_TODO if valid text entered', () => {
    var todoText = "check mail";
    var spy = expect.createSpy();
    var action = actions.startAddToDo(todoText);

    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo dispatch ={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDoForm));

    addToDoForm.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO if invalid text entered', () => {
    var spy = expect.createSpy();

    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo dispatch ={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDoForm));

    addToDoForm.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });

});
