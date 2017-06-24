import React from "react";
import ToDo from "ToDo";
var ToDoList = React.createClass({
  render: function() {
    var { todos } = this.props;
    var renderToDos = () => {
      return todos.map(todo => {
        return <ToDo key = {todo.id} {...todo}/>;
      });
    };
    return (
      <div>
        {renderToDos()}
      </div>
    );
  }
});

module.exports = ToDoList;
