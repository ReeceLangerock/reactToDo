import expect from "expect";

import ToDoAPI from "ToDoAPI";

describe("ToDoAPI", () => {
  beforeEach(()=> {
    localStorage.removeItem('todos');
  })
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

    })
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
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualToDos = ToDoAPI.getToDos();

      expect(actualToDos).toEqual(todos);

    })
  });


});
