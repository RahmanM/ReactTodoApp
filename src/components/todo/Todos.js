import React, { Component } from "react";
import TodoList from "./TodoList";
import { todoListAction } from '../../actions/TodoActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Todos extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recordsPerPage: 5,
      currentPage: 1
    }
  }

  componentDidMount() {
    // Call the todoListAction so todos are loaded in form load
    this.props.todoListAction();
  }

  showNextPages = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  render() {
    // NB: Somehow this was needed to get the proper array even though type of this.props.todos was array. 
    // Otherwise this error was showing up -> this.props.data.map is not a function
    const data = Array.from(this.props.todos) || [];

    var skip = this.state.recordsPerPage * this.state.currentPage;
    var pagged = data.slice(0, skip);

    if (pagged) {
      return (
        <div>
          <TodoList todos={pagged} />
          <div><a href="#" onClick={() => this.showNextPages()}>More...</a></div>
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
