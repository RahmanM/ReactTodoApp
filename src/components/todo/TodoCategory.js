import React, { Component } from "react";
import { connect } from 'react-redux';
import { todoListAction, todoListAllAction } from '../../actions/TodoActions';
import { bindActionCreators } from 'redux'
import { groupBy } from "../../Helpers/Utils";

export class TodoCategory extends Component {

  refreshTodoList = (categoryKey) => {
    // Filter todos list by current selected category
    this.props.todoListAction({ categoryKey: categoryKey, isCompleted: null });
  }  

  componentDidMount() {
     this.props.todoListAll();
  }
  

  render() {
    var categories = this.props.categories || [];
    var { todos } = this.props || [];  

    let cats = [];

     var { allTodos } = this.props || [];
     //console.log("TodoCategory->allTodos", allTodos)
    //  console.log("TodoCategory->categories", categories)

    if (categories && categories.length > 0 && (todos && todos.length >= 0)) {
      const groupedTodos = groupBy(allTodos, 'todoCategory') || [];

      if (categories && categories.length > 0) {
        cats = categories.map((category) =>
          <div key={category.key} className='list-group-item list-group-item-warning'>
            <span className="float-right" >
              <span className="badge badge-info badge-pill">{groupedTodos[category.key] ? groupedTodos[category.key].length : 0}</span>
            </span>

            <span key={category.key} >
              <a href="#" onClick={() => this.refreshTodoList(category.key)}>{category.description}</a>
            </span>
          </div>
        );
      }
    }

    return (
      <div className='card cateogry'>
        <div className='card-header float-left'>
          <span style={{ fontSize: '1.25rem', fontWeight: '500' }} >Categories</span>
          {/* All categories = Refresh all todos */}
          <a href="#" onClick={() => this.refreshTodoList(null)}><span style={{ float: 'right' }}><i className="fa fa-bolt" ></i></span></a>
        </div>
        <div className='card-body'>
          <ul className='list-group'>
            {cats}
          </ul>
        </div>
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    todoListAction: bindActionCreators(todoListAction, dispatch),
    todoListAll : bindActionCreators(todoListAllAction, dispatch)
  }
}


// Maps state (store data) to component Prop so data is accessible
const mapStateToProps = (state) => {
  return {
    categories: state.fetchCategories,
    todos: state.fetchToDos,
    allTodos : state.fetchAllToDos
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(TodoCategory);