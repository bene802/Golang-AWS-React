import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <h1>Products Search</h1>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <p className="btn btn-sm m-2">Zetong Wang</p>
        </div>
      </nav>
    );
  }
}
export default Navbar;
