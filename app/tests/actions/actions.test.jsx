import expect from "expect";
var actions = require("actions");


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
      text: "Thing to do"
    };

    var response = actions.addToDo(action.text);
    expect(response).toEqual(action);
  });

  it("should generate add todos action", () => {
    var todos = [{
      id: 111,
      todo: "Thing to do",
      completed: false,
      completedAt: undefined,
      createdAt: 33333
    }];
    var action = {
      type: "ADD_TODOS",
      todos
    };

    var response = actions.addToDos(todos);
    expect(response).toEqual(action);
  });

  it("should generate toggleToDo action", () => {
    var action = {
      type: "TOGGLE_TODO",
      id: 1
    };

    var response = actions.toggleToDo(action.id);
    expect(response).toEqual(action);
  });

  it("should generate toggleShowCompleted action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };

    var response = actions.toggleShowCompleted(action);
    expect(response).toEqual(action);
  });
});
