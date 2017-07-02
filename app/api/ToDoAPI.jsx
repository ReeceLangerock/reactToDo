import $ from "jquery";

module.exports = {
  

  filterToDos: function(todos, showCompleted, searchText) {
    var filteredToDos = todos;

    // filter by showCompleted
    filteredToDos = filteredToDos.filter(todo => {
      return !todo.completed || showCompleted;
    });
    //filter by searchText
    filteredToDos = filteredToDos.filter(todo => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;


    });
    //sort todos with non-completed first

    filteredToDos.sort((a, b) => {
      if (a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredToDos;
  }
};
