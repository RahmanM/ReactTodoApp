import React, { Component } from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { todoCategoriesAction, addTodoAction } from '../../actions/TodoActions';
import AuthHelper from '../../AuthHelper'

class TodoCreate extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      todoDescription: '',
      todoCategory: ''
    }
  } 

  componentDidMount() {
    this.props.todoCategoriesAction();
  }

  // Bind control to state
  inputChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  addTodos = (event) => {
    event.preventDefault();
    var {addTodoAction} = this.props;

    var newTodo = {
      description: this.state.todoDescription, 
      todoCategory: this.state.todoCategory, 
      isCompleted: false, 
      userId: AuthHelper.getUser().email
    };

    addTodoAction(newTodo);

    this.setState({todoDescription: ''});
    this.setState({todoCaselectegory: ''});
  }

  
  render() {
    var categories = this.props.categories || [];

    let cats = [];
    if (categories && categories.length > 0) {
      cats = categories.map((category) =>
      <option key={category.key} value={category.key}>{category.description}</option>
      );
    }

    return (

      <div className="card left-a">
        <div className="card-header">
          <h5>Create Todo</h5>
        </div>
        <div className="pad-right-50 pad-top-20 card-body left-a">
          <form>
            <div className="form-group row">
              <label className="col-form-label col-lg-2">Description:</label>
              <div className="col-lg-10">
                <input 
                      type="text" 
                      className="form-control" 
                      id="todoDescription" 
                      name="todoDescription"
                      placeholder="Enter description of what to be done?"
                      value={this.state.todoDescription}
                      onChange={this.inputChange}
                      >
                </input>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-lg-2">Category:</label>
              <div className="col-lg-10">

                <select name="todoCategory" className="col-lg-4"  onChange={this.inputChange} >
                  <option value="-1">Select A Category</option>
                  {cats}
                </select>
                
              </div>
            </div>

            <div className="form-group row">
              <div className="col-lg-10">
                <button type="submit" onClick={this.addTodos} className="btn btn-primary">Save Todo</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// 1) Will map the Actions to Props e.g. fetch todos to be added to this.props
const mapDispatchToProps = (dispatch) => {
  return {
    todoCategoriesAction: bindActionCreators(todoCategoriesAction, dispatch),
    addTodoAction: bindActionCreators(addTodoAction, dispatch)
  }
}

// 2) Maps the reducer data to props 
// i.e the action has already dispatched and populated the reducer data
const mapStateToProps = (state) => {
  return {
    categories: state.fetchCategories
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (TodoCreate)
