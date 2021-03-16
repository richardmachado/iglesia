import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class LoggedInNavigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#FAEBD7" }} light expand="md">
          <button
            href="/addtemas"
            style={{ marginRight: 10, backgroundColor: "#f5e1c6" }}
          >
            Temas
          </button>
          <NavbarBrand href="/addtemas">Add </NavbarBrand>
          <NavbarBrand href="/edittemas">Edit</NavbarBrand>
          <NavbarBrand href="/deletetemas">Delete</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
export default LoggedInNavigation;
