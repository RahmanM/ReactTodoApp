import React, { Component } from "react";
import { deleteTodo, completeTodo } from '../../actions/TodoActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

export class Todo extends Component {

  completeTodo = (key, complete) => {
    this.props.completeCurrentTodo(key, complete);
  }

  deleteTodo = (key) => {
    this.props.deleteCurrentTodo(key);
  }

  render() {

    const { categories } = this.props;

    if(Array.isArray(categories)){



    var todos = this.props.todos.map(todo => (
      <tr key={todo.key}>
        <td>{todo.description}</td>
        <td>
          {
            (() => {
              var cat = categories.find(c => c.key === todo.todoCategory)
              return cat ? cat.description : '';
            }
            )()
          }
        </td>
        <td>
          {todo.isCompleted ? (
            <i className='far fa-check-circle'></i>
          ) : (
              <i className='fas fa-times'></i>
            )}
        </td>
        <td>
          <a href="#" onClick={() => this.deleteTodo(todo.key)}><i className='far fa-trash-alt'></i> </a> |{" "}
          <a href="#" onClick={() => this.completeTodo(todo.key, todo.isCompleted)}>
            {todo.isCompleted ? (
              <i className='fas fa-toggle-on'></i>
            ) : (
                <i className='fas fa-toggle-off'></i>
              )}
          </a>
        </td>
      </tr>
    ));

  }

    return (
      <div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Todo</th>
              <th scope='col'>Category</th>
              <th scope='col'>Done?</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>{todos}</tbody>
        </table>
      </div>
    );
  }
}

// 1) Will map the Actions to Props e.g. fetch todos to be added to this.props
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCurrentTodo: bindActionCreators(deleteTodo, dispatch),
    completeCurrentTodo: bindActionCreators(completeTodo, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.fetchCategories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
