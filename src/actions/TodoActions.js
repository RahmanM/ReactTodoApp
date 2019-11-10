import { todosRef, categoriesRef } from '../configs/Firebase';

/*
  Todo list action
*/
export const todoListAction = (filter=null) => async dispatch => {
  todosRef.on("value", snapshot => {
    var todos = [];

    snapshot.forEach((childSnapshot) => {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
      todos.push(item);
    });

    if(filter){
      // Filter by category
      if(filter.categoryKey){
        todos = todos.filter((t) => t.todoCategory === filter.categoryKey);
      }

      // filter by completed
      if(filter.isCompleted===true){
        todos = todos.filter((t) => t.isCompleted === true);
      }

      // filter by not completed
      if(filter.isCompleted===false){
        todos = todos.filter((t) => t.isCompleted === false);
      }
    }

    dispatch({
      type: 'TODO_LIST',
      payload: todos
    });
  });
};

/*
  Todo Category action
*/
export const todoCategoriesAction = () => async dispatch => {
  categoriesRef.on("value", snapshot => {
    
    var categories = [];

    snapshot.forEach((childSnapshot) => {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
      categories.push(item);
    });
    
    dispatch({
      type: 'TODO_CATEGORIES',
      payload: categories
    });
  });
}

/*
  Add new Todo
*/
export const addTodoAction = (newToDo) => async dispatch => {
  todosRef.push().set(newToDo);
}

/*
  Delete Todo
*/
export const deleteTodo = (key) => async dispatch =>  {
  todosRef.child(key).remove();
}

/*
  Complete Todo
*/
export const completeTodo = (key, isCompleted) => async dispatch =>  {
  todosRef.child(key).update({isCompleted: !isCompleted})
}




