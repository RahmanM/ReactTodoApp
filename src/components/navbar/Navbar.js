import React, { Component } from "react";
import { configedFirebase } from '../../configs/Firebase';
import { Redirect } from 'react-router-dom'
import AuthHelper from '../../AuthHelper'

class Navbar extends Component {



  handleSignOut = () => {
    configedFirebase.auth().signOut();
    AuthHelper.setUser(null);
    this.props.history.push('/')
  }

  render() {

    const imageStyle = {
      widht: '50px',
      height: '50px'
    }

    const user = AuthHelper.getUser();

    return (
      <div className="navbar navbar-light bg-light">
        <div>
          <strong>
          Hello, {user.displayName}
          </strong>
        </div>
        
        <div class="pull-left">
          <a onClick={() => this.handleSignOut()} className="navbar-brand" href="#">
            Sign out!
          </a>
        </div>

        <span  class="pull-right padding-10">
          <img alt="..." class="img-circle" style={imageStyle} src={user.photoURL} />
        </span>

      </div>
    );
  }
}

export default Navbar;
