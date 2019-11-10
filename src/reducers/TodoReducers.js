
export const fetchToDos = (state = {}, action = {}) => {
  switch (action.type) {
    case "TODO_LIST":
      return action.payload;
    default:
      return state;
  }
};

export const  fetchCategories = (state = {}, action = {}) => {
  switch (action.type) {
    case "TODO_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};

