import React, { Component } from "react";
import TodoList from "./TodoList";
import { todoListAction } from '../../actions/TodoActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paginator from "../../pagination/Paginator";

class Todos extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recordPerPage: 3,
      currentPage: 0
    }
  }

  componentDidMount() {
    // Call the todoListAction so todos are loaded in form load
    this.props.todoListAction();
    this.setState({totalRecords: this.props.todos.length});
  }

  showNextPages = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  pageChanged = (currentPage) => {
    this.setState({currentPage: currentPage});
  }

  render() {
    // NB: Somehow this was needed to get the proper array even though type of this.props.todos was array. 
    // Otherwise this error was showing up -> this.props.data.map is not a function
    const data = Array.from(this.props.todos) || [];

    var pagged = data.slice(this.state.currentPage * this.state.recordPerPage, (this.state.currentPage + 1) * this.state.recordPerPage);

    if (pagged) {
      return (
        <div>
          <TodoList todos={pagged} />
          <Paginator 
                    totalRecords={data.length} 
                    recordPerPage={this.state.recordPerPage} 
                    currentPage={this.state.currentPage}
                    pageChanged={this.pageChanged}
                    />
        </div>
      );
    }
  }

}

// 1) Will map the Actions to Props e.g. fetch todos to be added to this.props
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ todoListAction }, dispatch);
}

// 2) Maps the reducer data to props 
// i.e the action has already dispatched and populated the reducer data
const mapStateToProps = (state) => {
  return {
    todos: state.fetchToDos
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Todos);
