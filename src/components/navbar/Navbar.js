import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-light bg-dark">
        <a className ="navbar-brand" href="#">
          <img
            src="/docs/4.3/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Menu
        </a>
      </div>
    );
  }
}

export default Navbar;