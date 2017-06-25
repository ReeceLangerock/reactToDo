import $ from "jquery";

module.exports = {
  setToDos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    }
  },

  getToDos: function() {
    var stringToDos = localStorage.getItem("todos");
    var todos = [];

    try {
      todos = JSON.parse(stringToDos);
    } catch (e) {}

    if ($.isArray(todos)) {
      return todos;
    } else {
      return [];
    }
  }
};
