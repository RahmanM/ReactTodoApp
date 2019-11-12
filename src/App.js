import React from "react";
import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./Layout";
import { Auth } from './Auth'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Switch>
        <Route component={Auth} exact path="/" />
        <Route component={Layout}  path="/Layout" />
      </Switch>
    </div>
  );
}

export default App;
