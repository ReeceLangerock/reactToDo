import firebase, { firebaseRef } from "app/firebase/";
import moment from "moment";

export var setSearchText = searchText => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText
  };
};

export var addToDo = todo => {
  return {
    type: "ADD_TODO",
    todo
  };
};

export var startAddToDo = text => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child("todos").push(todo);

    return todoRef.then(() => {
      dispatch(
        addToDo({
          ...todo,
          id: todoRef.key
        })
      );
    });
  };
};

export var toggleShowCompleted = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED"
  };
};

export var updateToDo = (id, updates) => {
  return {
    type: "UPDATE_TODO",
    id,
    updates
  };
};

export var addToDos = todos => {
  return {
    type: "ADD_TODOS",
    todos
  };
};

export var startAddToDos = () => {
  return (dispatch, getState) => {
    var todosRef = firebaseRef.child("todos");

    return todosRef.once("value").then(snapshot => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todos).forEach(todoId => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      dispatch(addToDos(parsedTodos));
    });
  };
};

export var startToDo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateToDo(id, updates));
    });
  };
};
