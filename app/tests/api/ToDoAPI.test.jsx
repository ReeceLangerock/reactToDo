import expect from "expect";

import ToDoAPI from "ToDoAPI";

describe("ToDoAPI", () => {
  beforeEach(() => {
    localStorage.removeItem("todos");
  });
  it("should exist", () => {
    expect(ToDoAPI).toExist();
  });

  describe("setTodos", () => {});
  it("should set valid todos array", () => {
    var todos = [
      {
        id: 23,
        text: "test",
        completed: false
      }
    ];

    ToDoAPI.setToDos(todos);
    var actualToDos = JSON.parse(localStorage.getItem("todos"));
    expect(actualToDos).toEqual(todos);
  });

  it("should not set invalid todos array", () => {
    var badTodos = { a: "b" };

    ToDoAPI.setToDos(badTodos);

    expect(localStorage.getItem("todos")).toBe(null);
  });
  describe("getTodos", () => {
    it("should return empty array for bad localstorage data", () => {
      var actualToDos = ToDoAPI.getToDos();

      expect(actualToDos).toEqual([]);
    });
  });

  describe("getTodos", () => {
    it("should return todos if valid array in localstorage", () => {
      var todos = [
        {
          id: 23,
          text: "test",
          completed: false
        }
      ];
      localStorage.setItem("todos", JSON.stringify(todos));
      var actualToDos = ToDoAPI.getToDos();

      expect(actualToDos).toEqual(todos);
    });
  });

  describe("filterTodos", () => {
    var todos = [
      {
        id: 1,
        text: "some text here",
        completed: true
      },
      {
        id: 2,
        text: "other text here",
        completed: false
      },
      {
        id: 3,
        text: "some text here",
        completed: true
      }
    ];

    it("should return all items if showCompleted is true", () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, "");

      expect(filteredToDos.length).toBe(3);
    });

    it("should return correct items if showCompleted is false", () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, false, "");

      expect(filteredToDos.length).toBe(1);
    });

    it("should sort by completed status", () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, "");

      expect(filteredToDos[0].completed).toBe(false);
    });

    it("should filter todos by search text", () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, "some");

      expect(filteredToDos.length).toBe(2);
    });

    it("should return all todos if searchText is empty", () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, "");

      expect(filteredToDos.length).toBe(3);
    });
  });
});
