import React from "react";
import ToDo from "ToDo";
var ToDoList = React.createClass({
  render: function() {
    var { todos } = this.props;
    var renderToDos = () => {
      if (todos.length === 0) {
        return <p className="container__message">Nothing To Do</p>;
      } else {
        return todos.map(todo => {
          return (
            <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle} />
          );
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

module.exports = ToDoList;
