import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TodoCategory from "./components/todo/TodoCategory";
import Todos from "./components/todo/Todos";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import TodoCreate from './components/todo/TodoCreate';
import TodoCounter from "./components/todo/TodoCounter";

function App() {
  return (
    <div className=''>

      <div>
        <Navbar />
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
              <Todos />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
