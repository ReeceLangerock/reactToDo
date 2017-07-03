import expect from "expect";
import df from "deep-freeze-strict";
var reducers = require("reducers");

describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it("should set searchText", () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "dog"
      };

      var res = reducers.searchTextReducer(df(""), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe("showCompletedReducer", () => {
    it("should toggle showCompleted", () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED"
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe("authReducer", () => {
    it("should store UID on LOGIN", () => {
      var action = {
        type: "LOGIN",
        uid: "123abc"
      };

      var res = reducers.authReducer(undefined, df(action));

      expect(res).toEqual({ uid: action.uid });
    });

    it("should clear auth on LOGOUT", () => {
      var action = {
        type: "LOGOUT"
      };
      const authData = {
        uid: "123abc"
      };
      var res = reducers.authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });
  });

  describe("todosReducer", () => {
    it("should add new todo", () => {
      var action = {
        type: "ADD_TODO",
        todo: {
          id: "123",
          text: "Something",
          compelted: false,
          createdAt: 5155151
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it("should toggle completed status", () => {
      var todos = [
        {
          id: 123,
          text: "Something",
          completed: true,
          createdAt: 123,
          completedAt: 124
        }
      ];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: "UPDATE_TODO",
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it("should add existing todos", () => {
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
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it("should wipe todos on logout", () => {
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
        type: "LOGOUT",
        todos
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(0);

    });
  });
});
