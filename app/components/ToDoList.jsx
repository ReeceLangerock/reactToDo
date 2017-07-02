import React from "react";
import ToDo from "ToDo";
var { connect } = require("react-redux");
var ToDoAPI = require("ToDoAPI");
export var ToDoList = React.createClass({
  render: function() {
    var { todos, showCompleted, searchText } = this.props;
    var renderToDos = () => {
      var filterToDos = ToDoAPI.filterToDos(todos, showCompleted, searchText);
      if (filterToDos.length === 0) {
        return <p className="container__message">Nothing To Do</p>;
      } else {
        return ToDoAPI.filterToDos(
          todos,
          showCompleted,
          searchText
        ).map(todo => {
          return <ToDo key={todo.id} {...todo} />;
        });
      }
    };
    return (
      <div>
        {renderToDos()}
      </div>
    );
  }
});

export default connect(state => {
  return state;
})(ToDoList);
