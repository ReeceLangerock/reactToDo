import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
var expect = require("expect");

import firebase, { firebaseRef } from "app/firebase/";
var actions = require("actions");

var createMockStore = configureMockStore([thunk]);

describe("Actions", () => {
  it("should generate searchText action", () => {
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: "Some search text"
    };

    var response = actions.setSearchText(action.searchText);
    expect(response).toEqual(action);
  });

  it("should generate add todo action", () => {
    var action = {
      type: "ADD_TODO",
      todo: {
        id: "1212",
        text: "anything",
        completed: false,
        createdAt: 0
      }
    };

    var response = actions.addToDo(action.todo);
    expect(response).toEqual(action);
  });

  it("should create todo and dispatch ADD_TODO", done => {
    const store = createMockStore({});
    const todoText = "My todo item";

    store
      .dispatch(actions.startAddToDo(todoText))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: "ADD_TODO"
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });

        done();
      })
      .catch(done);
  });

  it("should generate add todos action", () => {
    var todos = [
      {
        id: 111,
        todo: "Thing to do",
        completed: false,
        completedAt: undefined,
        createdAt: 33333
      }
    ];
    var action = {
      type: "ADD_TODOS",
      todos
    };

    var response = actions.addToDos(todos);
    expect(response).toEqual(action);
  });

  it("should generate toggleToDo action", () => {
    var action = {
      type: "UPDATE_TODO",
      id: 1,
      updates: { completed: false }
    };

    var response = actions.updateToDo(action.id, action.updates);
    expect(response).toEqual(action);
  });

  it("should generate toggleShowCompleted action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };

    var response = actions.toggleShowCompleted(action);
    expect(response).toEqual(action);
  });

  describe("Tests with firebase todos", () => {
    var testToDoRef;

    beforeEach(done => {
      var todosRef = firebaseRef.child("todos");
      todosRef
        .remove()
        .then(() => {
          testToDoRef = firebaseRef.child("todos").push();
          testToDoRef.set({
            text: "something",
            completed: false,
            createdAt: 4545454
          });
        })
        .then(() => done())
        .catch(done);
    });

    afterEach(done => {
      testToDoRef.remove().then(() => done());
    });

    it("should toggle todo and dispatch UPDATE_TODO action", done => {
      const store = createMockStore({});
      const action = actions.startToDo(testToDoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: "UPDATE_TODO",
          id: testToDoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });

    it("should populate todos and dispatch ADD_TODO action", done => {
      const store = createMockStore({});

      const action = actions.startAddToDos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual("ADD_TODOS");
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual("something");

        done();
      }, done);
    });
  });
});
