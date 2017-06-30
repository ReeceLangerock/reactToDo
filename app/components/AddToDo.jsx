import React from "react";
var { connect } = require("react-redux");
var actions = require("actions");

export var AddToDo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todo = this.refs.todo.value;

    if (todo.length > 0) {
      this.refs.todo.value = "";

      var {dispatch} = this.props;
      dispatch(actions.addToDo(todo));
    } else {
      this.refs.todo.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todo" placeholder="What do you need to do?" />
          <button className="button expanded">Add ToDo!</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddToDo);
