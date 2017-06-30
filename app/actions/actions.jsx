export var setSearchText = searchText => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText
  };
};

export var addToDo = text => {
  return {
    type: "ADD_TODO",
    text
  };
};

export var toggleShowCompleted = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED"
  };
};

export var toggleToDo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export var addToDos = (todos) => {
  return {
    type: "ADD_TODOS",
    todos
  };
};
