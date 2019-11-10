import React, { Component } from 'react'
import { connect } from 'react-redux';
import { todoListAction } from '../../actions/TodoActions';
import { bindActionCreators } from 'redux'

class TodoCounter extends Component {

    refreshTodoList = (completed) => {
        this.props.todoListAction({ categoryKey: null, isCompleted: completed });
    }

    render() {
        const { todos } = this.props;

        var completedCount = 0;
        var notCompletedCount = 0;

        if (todos && todos.length > 0) {
            completedCount = todos.filter((t) => t.isCompleted === true).length;
            notCompletedCount = todos.filter((t) => t.isCompleted === false).length;
        }

        const counterStyle = {
            width: '100%',
            margin: 1
        };

        const textStyle = {
            float: 'left',
            marginLeft: 5
        }

        return (
            <div>

                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action list-group-item-success">
                        <button type="button" style={counterStyle} className="btn btn-success" onClick={() => this.refreshTodoList(true)}>
                            <span className="badge badge-light float-left badge-pill">{completedCount}</span>
                            <span style={textStyle}>Completed</span>
                        </button>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-warning">
                        <button style={counterStyle} type="button" className="btn btn-warning" onClick={() => this.refreshTodoList(false)}>
                            <span className="badge badge-light float-left badge-pill">{notCompletedCount}</span>
                            <span style={textStyle}>Not Completed</span>
                        </button>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-info">
                        <button style={counterStyle} type="button" className="btn btn-info" onClick={() => this.refreshTodoList(null)}>
                            <span className="badge badge-light float-left badge-pill">{completedCount + notCompletedCount}</span>
                            <span style={textStyle}>All</span>
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ todoListAction: todoListAction }, dispatch);
}


const mapStateToProps = (state) => {
    return {
        todos: state.fetchToDos
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(TodoCounter)
