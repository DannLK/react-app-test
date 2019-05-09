import React, { Component } from "react";

class NavBar extends Component {
  render() {
    console.log("Navbar - Rendered");
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="abc.com">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;

/*Stateless Functional Component

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="abc.com">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
*/
