import React from "react";

var AddToDo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todo = this.refs.todo.value

    if(todo.length > 0) {
      this.refs.todo.value = "";
      this.props.onAddToDo(todo);
    } else {
      this.refs.todo.focus();
    }


  },
  render: function() {
    return (
      <div>
        <form ref = "form" onSubmit={this.handleSubmit}>
        <input type="text" ref="todo" placeholder="What do you need to do?" />
        <button className = "button expanded">Add ToDo!</button>
      </form>
      </div>
    );
  }
});

module.exports = AddToDo;
