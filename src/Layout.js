import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import TodoCategory from "./components/todo/TodoCategory";
import Todos from "./components/todo/Todos";
import TodoCreate from './components/todo/TodoCreate';
import TodoCounter from "./components/todo/TodoCounter";
import AuthHelper from './AuthHelper'


export default class Layout extends Component {

    componentDidMount() {
        if(!AuthHelper.isLoggedIn){
            this.props.history.push('/')
        }
    }
    

  render() {
    return (
        <div className=''>

        <div>
          <Navbar history={this.props.history} />
        </div>
  
        <div className="container-fluid top-10">
          <div className="row">
            <div className="col-lg-2">

              <TodoCategory />
  
              <br></br>
              
              <TodoCounter />
  
            </div>
  
            <div className="col-lg-10">
  
              <div className="padding-right-30">
                <TodoCreate />
              </div>
  
              <br></br>
  
              <div>
                <Todos  />
              </div>
  
            </div>
          </div>
        </div>
  
      </div>
    )
  }
}
